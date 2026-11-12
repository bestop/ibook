'use client'

// 用户对话框（网页端统一账号入口）：
//   - 未登录：绑定码登录（小程序「我的 → 云端同步」生成，一次一用 10 分钟有效）
//   - 已登录：资料（emoji 头像 + 昵称，跨端同步）、云端同步状态、立即同步、退出登录
// 顶栏徽章（page.tsx）随登录态/同步时间经 subscribeCloudUI 微 store 刷新。
import { useState, useSyncExternalStore } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { sfx } from '@/lib/sound'
import {
  alignCloud,
  claimByCode,
  cloudLogout,
  cloudProfile,
  getCloudUISnapshot,
  lastPushText,
  pushCloudNow,
  saveCloudProfile,
  subscribeCloudUI,
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
  const [mode, setMode] = useState<'login' | 'account'>('login')
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [nick, setNick] = useState('')
  const [emoji, setEmoji] = useState('🙂')

  const effectiveMode = profile ? (mode === 'login' && !code ? 'account' : mode) : 'login'

  const handleClaim = async () => {
    const digits = code.replace(/\D/g, '')
    if (digits.length !== 6) {
      toast({ title: '请输入 6 位绑定码' })
      return
    }
    setBusy(true)
    try {
      const p = await claimByCode(digits)
      const r = await alignCloud()
      sfx.coin()
      toast({
        title: '登录成功，欢迎 ' + (p.nickname || '小岛民') + '！',
        description: r === 'pulled' ? '已从云端恢复学习进度' : r === 'pushed' ? '本机进度已备份到云端' : '云端进度已是最新',
      })
      setCode('')
      onOpenChange(false)
    } catch (e) {
      toast({ title: '绑定码无效或已过期', description: '请在小程序「我的 → 云端同步」重新生成' })
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
      toast({ title: '已退出登录', description: '云端进度已保留，下次登录可恢复' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-3xl">
        {effectiveMode === 'login' ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-black">🔗 绑定码登录</DialogTitle>
              <DialogDescription className="text-left text-sm font-bold leading-relaxed">
                与小程序共用同一账号、同一份云端进度。在微信小程序「我的 → 云端同步」点击「生成网页绑定码」，把 6 位数字填到这里。
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <Input
                inputMode="numeric"
                placeholder="6 位绑定码"
                maxLength={7}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleClaim()
                }}
                className="h-12 rounded-2xl border-2 border-amber-200 text-center text-2xl font-black tracking-[0.4em] text-amber-700"
              />
              <Button
                disabled={busy}
                onClick={handleClaim}
                className="w-full rounded-2xl bg-orange-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
              >
                {busy ? '登录中…' : '登录'}
              </Button>
              <p className="text-center text-xs font-bold text-gray-400">没有小程序？直接玩也行，进度会保存在本机</p>
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
                    setMode('login')
                    setCode('')
                  }}
                  className="text-sky-600 hover:underline"
                >
                  绑定其他账号
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
