'use client'

// 用户对话框（网页端统一账号入口）：
//   - 未登录：账号密码双 Tab —— 登录（小程序里设置的网页账号 / 网页端注册的账号）+ 注册新账号；
//     绑定码登录已由账号密码取代（服务端接口兼容保留）
//   - 已登录：资料（emoji 头像 + 昵称，跨端同步）、网页账号展示、云端同步状态、立即同步、退出登录
// 顶栏徽章（page.tsx）随登录态/同步时间经 subscribeCloudUI 微 store 刷新。
import { useState, useSyncExternalStore } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { sfx } from '@/lib/sound'
import {
  alignCloud,
  cloudLogout,
  cloudProfile,
  getCloudUISnapshot,
  lastPushText,
  pushCloudNow,
  saveCloudProfile,
  subscribeCloudUI,
  webLogin,
  webRegister,
} from '@/lib/cloud'

const AVATARS = ['🙂', '😃', '🐱', '🐶', '🐼', '🦊', '🐸', '🐵', '🦁', '🌟', '🚀', '🏝️']

function useCloudUI(): void {
  // 快照必须是稳定值（昵称|lastpush），随登录态/资料/同步时间变化触发重渲染；
  // 不能用 Date.now() —— 每次快照都不同会导致无限重渲染（Maximum update depth）
  useSyncExternalStore(subscribeCloudUI, getCloudUISnapshot, () => '')
}

export default function UserDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  useCloudUI() // 登录态/资料/同步时间变化时重渲染
  const profile = open ? cloudProfile() : null
  const [tab, setTab] = useState<'signin' | 'register'>('signin')
  const [switching, setSwitching] = useState(false) // 「切换账号」显式进入登录 Tab
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [busy, setBusy] = useState(false)
  const [nick, setNick] = useState('')
  const [emoji, setEmoji] = useState('🙂')

  const showLogin = !profile || switching

  const afterAuth = async (p: { nickname: string }) => {
    const r = await alignCloud()
    sfx.coin()
    toast({
      title: '登录成功，欢迎 ' + (p.nickname || '小岛民') + '！',
      description: r === 'pulled' ? '已从云端恢复学习进度' : r === 'pushed' ? '本机进度已备份到云端' : '云端进度已是最新',
    })
    setUsername('')
    setPassword('')
    setPassword2('')
    setSwitching(false)
    onOpenChange(false)
  }

  const handleLogin = async () => {
    const u = username.trim()
    if (!u || !password) {
      toast({ title: '请输入用户名和密码' })
      return
    }
    setBusy(true)
    try {
      const p = await webLogin(u, password)
      await afterAuth(p)
    } catch (e) {
      const msg = e instanceof Error ? e.message : ''
      toast({
        title: msg === 'bad_credentials' ? '用户名或密码错误' : '登录失败，请检查网络后重试',
        description: msg === 'bad_credentials' ? '账号在小程序「云端同步 → 网页登录账号」设置' : undefined,
      })
    } finally {
      setBusy(false)
    }
  }

  const handleRegister = async () => {
    const u = username.trim()
    if (!u || !password) {
      toast({ title: '请输入用户名和密码' })
      return
    }
    if (password.length < 6) {
      toast({ title: '密码至少 6 位' })
      return
    }
    if (password !== password2) {
      toast({ title: '两次输入的密码不一致' })
      return
    }
    setBusy(true)
    try {
      const p = await webRegister(u, password)
      await afterAuth(p)
    } catch (e) {
      const msg = e instanceof Error ? e.message : ''
      toast({
        title: msg === 'username_taken' ? '用户名已被占用，换一个试试' : '注册失败，请检查网络后重试',
        description: msg === 'username_taken' ? '2-24 位字母、数字、汉字、下划线或连字符' : undefined,
      })
    } finally {
      setBusy(false)
    }
  }

  const handleSaveProfile = async () => {
    const nickname = nick.trim() || profile?.nickname || ''
    if (!nickname) {
      toast({ title: '先填一个昵称吧' })
      return
    }
    setBusy(true)
    try {
      await saveCloudProfile({ nickname, avatarEmoji: emoji })
      toast({ title: '资料已保存，昵称将同步到小程序端' })
    } catch (e) {
      toast({ title: '保存失败，请稍后再试' })
    } finally {
      setBusy(false)
    }
  }

  const handleSync = async () => {
    setBusy(true)
    try {
      const ok = await pushCloudNow()
      toast({ title: ok ? '☁️ 本机进度已上传云端' : '同步失败，请检查网络' })
    } finally {
      setBusy(false)
    }
  }

  const handleLogout = async () => {
    setBusy(true)
    try {
      await cloudLogout()
      setSwitching(false)
      toast({ title: '已退出登录', description: '云端进度已保留，下次登录可恢复' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-3xl">
        {showLogin ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-black">🌐 账号登录</DialogTitle>
              <DialogDescription className="text-left text-sm font-bold leading-relaxed">
                与小程序共用同一账号、同一份云端进度：用小程序「云端同步 → 设置网页登录账号」里设置的用户名密码登录，或直接注册新账号。
              </DialogDescription>
            </DialogHeader>
            {/* 双 Tab：登录 / 注册新账号（注册多一步确认密码，防止小朋友手误把自己锁在外面） */}
            <div className="grid grid-cols-2 gap-1 rounded-2xl bg-amber-50 p-1">
              <button
                onClick={() => {
                  sfx.click()
                  setTab('signin')
                }}
                className={`rounded-xl py-2 text-sm font-black transition-colors ${tab === 'signin' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-orange-500'}`}
              >
                登录
              </button>
              <button
                onClick={() => {
                  sfx.click()
                  setTab('register')
                }}
                className={`rounded-xl py-2 text-sm font-black transition-colors ${tab === 'register' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500 hover:text-orange-500'}`}
              >
                注册新账号
              </button>
            </div>
            <div className="space-y-3">
              <Input
                placeholder="用户名（2-24 位字母、数字、汉字）"
                maxLength={24}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-11 rounded-2xl border-2 border-amber-200 font-bold"
              />
              <Input
                type="password"
                placeholder="密码（至少 6 位）"
                maxLength={32}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') (tab === 'signin' ? handleLogin : handleRegister)()
                }}
                className="h-11 rounded-2xl border-2 border-amber-200 font-bold"
              />
              {tab === 'register' && (
                <Input
                  type="password"
                  placeholder="再输入一遍密码"
                  maxLength={32}
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleRegister()
                  }}
                  className="h-11 rounded-2xl border-2 border-amber-200 font-bold"
                />
              )}
              <Button
                disabled={busy}
                onClick={tab === 'signin' ? handleLogin : handleRegister}
                className="w-full rounded-2xl bg-orange-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
              >
                {busy ? (tab === 'signin' ? '登录中…' : '注册中…') : tab === 'signin' ? '登录' : '注册并登录'}
              </Button>
              <p className="text-center text-xs font-bold text-gray-400">
                {tab === 'signin' ? '还没有账号？点上方「注册新账号」即可' : '注册即开通云端同步，进度自动备份'}
              </p>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-black">👤 我的账号</DialogTitle>
              <DialogDescription className="text-left text-sm font-bold">
                {profile?.nickname || '未设置昵称'} · 与小程序端同一账号
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-black text-gray-600">头像（网页端展示）</p>
                <div className="flex flex-wrap gap-1.5">
                  {AVATARS.map((a) => (
                    <button
                      key={a}
                      onClick={() => {
                        sfx.click()
                        setEmoji(a)
                      }}
                      className={`h-9 w-9 rounded-xl text-xl transition-transform ${
                        (profile?.avatarEmoji || '🙂') === a ? 'scale-110 bg-amber-200 ring-2 ring-orange-400' : 'bg-gray-100 hover:bg-amber-100'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-black text-gray-600">昵称（跨端同步）</p>
                <Input
                  placeholder="昵称"
                  maxLength={12}
                  value={nick || profile?.nickname || ''}
                  onChange={(e) => setNick(e.target.value)}
                  className="h-11 rounded-2xl border-2 border-amber-200 font-bold"
                />
              </div>
              <div className="rounded-2xl bg-amber-50 p-3 text-sm font-bold text-amber-700">
                ☁️ 云端同步：{lastPushText() ? `上次同步 ${lastPushText()}` : '还没有同步过'}
                {profile?.username ? ` · 网页账号 ${profile.username}` : ''}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  disabled={busy}
                  onClick={handleSaveProfile}
                  className="rounded-2xl border-amber-300 font-black text-amber-700 hover:bg-amber-50"
                >
                  保存资料
                </Button>
                <Button
                  disabled={busy}
                  onClick={handleSync}
                  className="rounded-2xl bg-orange-500 font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
                >
                  立即同步
                </Button>
              </div>
              <div className="flex items-center justify-between text-xs font-bold">
                <button
                  onClick={() => {
                    sfx.click()
                    setSwitching(true)
                    setTab('signin')
                  }}
                  className="text-sky-600 hover:underline"
                >
                  切换账号
                </button>
                <button onClick={handleLogout} disabled={busy} className="text-gray-400 hover:text-rose-500">
                  退出登录
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
