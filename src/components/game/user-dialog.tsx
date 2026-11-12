'use client'

// 用户对话框（网页端统一账号入口）：
//   - 未登录：三通道 —— 微信扫码登录（默认推荐：微信扫小程序码 → 小程序内确认 → 网页自动登录）
//     + 账号密码登录（小程序里设置的网页账号 / 网页端注册的账号）+ 注册新账号；
//     绑定码登录已由账号密码/扫码取代（服务端接口兼容保留）
//   - 已登录：资料（emoji 头像 + 昵称，跨端同步）、网页账号展示、云端同步状态、立即同步、退出登录
// 顶栏徽章（page.tsx）随登录态/同步时间经 subscribeCloudUI 微 store 刷新。
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
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
  qrCreate,
  qrImage,
  qrPoll,
  saveCloudProfile,
  subscribeCloudUI,
  webLogin,
  webRegister,
  type CloudProfile,
} from '@/lib/cloud'

const AVATARS = ['🙂', '😃', '🐱', '🐶', '🐼', '🦊', '🐸', '🐵', '🦁', '🌟', '🚀', '🏝️']

function useCloudUI(): void {
  // 快照必须是稳定值（昵称|lastpush），随登录态/资料/同步时间变化触发重渲染；
  // 不能用 Date.now() —— 每次快照都不同会导致无限重渲染（Maximum update depth）
  useSyncExternalStore(subscribeCloudUI, getCloudUISnapshot, () => '')
}

// 微信扫码登录视图：创建凭证 → 展示服务端直出的小程序码 → 2s 轮询；
// confirmed（小程序已确认）→ onDone(profile)（父级 alignCloud + 提示并关闭）；expired → 遮罩刷新重扫。
function QrLoginView({ onBack, onDone }: { onBack: () => void; onDone: (p: CloudProfile) => void }) {
  const [phase, setPhase] = useState<'loading' | 'ready' | 'expired' | 'error'>('loading')
  const [errMsg, setErrMsg] = useState('')
  const [qrUrl, setQrUrl] = useState('') // 小程序码 objectURL
  const [busy, setBusy] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const urlRef = useRef('')

  const stopPolling = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const start = useCallback(async () => {
    stopPolling()
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current)
      urlRef.current = ''
    }
    setQrUrl('')
    setBusy(false)
    setPhase('loading')
    try {
      const { token, qrUrl } = await qrCreate()
      const objUrl = await qrImage(qrUrl)
      urlRef.current = objUrl
      setQrUrl(objUrl)
      setPhase('ready')
      timerRef.current = setInterval(async () => {
        try {
          const st = await qrPoll(token)
          if (st === 'confirmed') {
            stopPolling()
            const p = cloudProfile()
            if (p) onDone(p)
          } else if (st === 'expired') {
            stopPolling()
            setPhase('expired')
          }
        } catch (e) {
          /* 单次轮询失败静默：网络抖动下继续下一轮，凭证 5 分钟后由服务端判过期 */
        }
      }, 2000)
    } catch (e) {
      const msg = e instanceof Error ? e.message : ''
      setErrMsg(
        msg === 'disabled'
          ? '扫码登录未启用：服务端尚未配置微信凭据'
          : msg === 'network'
            ? '网络异常，请稍后重试'
            : '扫码登录暂时不可用，请稍后再试'
      )
      setPhase('error')
    }
  }, [onDone, stopPolling])

  // 进入视图即创建凭证；离开/关闭对话框（Radix 卸载内容）停止轮询并回收图片资源
  useEffect(() => {
    start()
    return () => {
      stopPolling()
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRefresh = async () => {
    if (busy) return
    setBusy(true)
    await start()
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-lg font-black">📱 微信扫码登录</DialogTitle>
        <DialogDescription className="text-left text-sm font-bold leading-relaxed">
          打开微信扫一扫，在小程序中点击「确认登录」即可进入同一账号，云端进度自动同步。
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center gap-3 py-1">
        <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-2xl border-2 border-amber-200 bg-white">
          {qrUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qrUrl} alt="微信扫码登录二维码" className="h-full w-full object-contain" />
          ) : (
            <span className="text-sm font-bold text-gray-400">{phase === 'loading' ? '二维码生成中…' : '—'}</span>
          )}
          {phase === 'expired' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95">
              <p className="text-sm font-black text-gray-600">二维码已失效</p>
              <Button
                disabled={busy}
                onClick={handleRefresh}
                className="rounded-2xl bg-orange-500 font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
              >
                {busy ? '刷新中…' : '刷新二维码'}
              </Button>
            </div>
          )}
          {phase === 'error' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95 px-4 text-center">
              <p className="text-sm font-bold text-gray-500">{errMsg}</p>
            </div>
          )}
        </div>
        {phase === 'ready' && (
          <p className="animate-pulse text-sm font-bold text-emerald-600">等待微信扫码确认…</p>
        )}
        <button
          onClick={() => {
            sfx.click()
            onBack()
          }}
          className="text-sm font-bold text-sky-600 hover:underline"
        >
          ← 返回账号密码登录
        </button>
      </div>
    </>
  )
}

export default function UserDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  useCloudUI() // 登录态/资料/同步时间变化时重渲染
  const profile = open ? cloudProfile() : null
  const [tab, setTab] = useState<'signin' | 'register' | 'qr'>('signin')
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
    setTab('signin')
    onOpenChange(false)
  }

  // 扫码确认成功（QrLoginView 轮询到 confirmed）：与账号密码登录同一套对齐/提示动线
  const handleQrDone = useCallback(
    (p: CloudProfile) => {
      afterAuth(p)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

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
      // 服务端 5xx（多半是数据库未建表/未配 DATABASE_URL）与网络异常分开提示，避免误导排查方向
      const serverErr = msg === 'network' ? '网络异常，请检查连接后重试' : '服务暂时不可用，请确认服务器已完成部署初始化'
      toast({
        title: msg === 'bad_credentials' ? '用户名或密码错误' : '登录失败，请稍后重试',
        description: msg === 'bad_credentials' ? '账号在小程序「云端同步 → 网页登录账号」设置' : msg === 'bad_credentials' ? undefined : serverErr,
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
      // 服务端 5xx（多半是数据库未建表/未配 DATABASE_URL）与网络异常分开提示，避免误导排查方向
      const serverErr = msg === 'network' ? '网络异常，请检查连接后重试' : '服务暂时不可用，请确认服务器已完成部署初始化'
      toast({
        title: msg === 'username_taken' ? '用户名已被占用，换一个试试' : '注册失败，请稍后重试',
        description: msg === 'username_taken' ? '2-24 位字母、数字、汉字、下划线或连字符' : serverErr,
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
                与小程序共用同一账号、同一份云端进度：推荐微信扫码登录，也可用小程序「云端同步 → 设置网页登录账号」里设置的用户名密码，或直接注册新账号。
              </DialogDescription>
            </DialogHeader>
            {tab === 'qr' ? (
              <QrLoginView
                onBack={() => {
                  setTab('signin')
                }}
                onDone={handleQrDone}
              />
            ) : (
              <>
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
              {/* 第三通道：微信扫码登录（小程序端确认，同一账号体系） */}
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                <span className="h-px flex-1 bg-gray-200" />
                <span>或</span>
                <span className="h-px flex-1 bg-gray-200" />
              </div>
              <Button
                variant="outline"
                disabled={busy}
                onClick={() => {
                  sfx.click()
                  setTab('qr')
                }}
                className="w-full rounded-2xl border-2 border-emerald-200 bg-emerald-50 py-3 font-black text-emerald-700 hover:bg-emerald-100"
              >
                📱 微信扫码登录
              </Button>
            </div>
              </>
            )}
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
