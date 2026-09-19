'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { DEFAULT_REWARDS, useGame } from '@/lib/game'
import type { RedeemRecord, RewardItem } from '@/lib/game'
import { sfx } from '@/lib/sound'

const EMOJI_CHOICES = ['🌟', '📖', '📺', '🍦', '🎮', '🎡', '🍕', '⚽', '🧸', '🏖️']

function fmtTime(at: number): string {
  const d = new Date(at)
  return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

function CouponTicket({ record }: { record: RedeemRecord }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-violet-300 bg-white p-4">
      <div className="absolute inset-y-0 left-14 w-px border-l-2 border-dashed border-violet-200" />
      <div className="flex items-center gap-4">
        <span className="w-10 shrink-0 text-center text-4xl">{record.emoji}</span>
        <div className="min-w-0 flex-1 pl-2">
          <p className={`text-base font-black ${record.fulfilled ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
            {record.name}
          </p>
          <p className="mt-0.5 text-xs font-bold text-gray-400">
            {fmtTime(record.at)} 兑换 · 花费 {record.cost} 🪙
          </p>
        </div>
        {record.fulfilled ? (
          <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-600">已兑现 ✅</span>
        ) : (
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-600">待兑现 🎫</span>
        )}
      </div>
    </div>
  )
}

export default function RewardShop() {
  const coins = useGame((s) => s.coins)
  const redeemLog = useGame((s) => s.redeemLog)
  const customRewards = useGame((s) => s.customRewards)
  const redeemReward = useGame((s) => s.redeemReward)
  const markRedeemFulfilled = useGame((s) => s.markRedeemFulfilled)
  const addCustomReward = useGame((s) => s.addCustomReward)
  const removeCustomReward = useGame((s) => s.removeCustomReward)

  const [confirming, setConfirming] = useState<RewardItem | null>(null)
  const [lastRecord, setLastRecord] = useState<RedeemRecord | null>(null)
  const [addOpen, setAddOpen] = useState(false)
  const [form, setForm] = useState({ name: '', cost: '', emoji: '🌟' })

  const rewards = [...DEFAULT_REWARDS, ...customRewards]
  const pendingCount = redeemLog.filter((r) => !r.fulfilled).length

  const doRedeem = () => {
    if (!confirming) return
    const ok = redeemReward(confirming.id)
    if (ok) {
      sfx.coin()
      setLastRecord(useGame.getState().redeemLog[0] ?? null)
    }
    setConfirming(null)
  }

  const submitCustom = () => {
    const cost = parseInt(form.cost, 10)
    if (!form.name.trim() || !Number.isFinite(cost) || cost <= 0) return
    addCustomReward({ name: form.name, emoji: form.emoji, cost })
    sfx.coin()
    setForm({ name: '', cost: '', emoji: '🌟' })
    setAddOpen(false)
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-24 pt-4">
      {/* 礼物屋英雄区 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border-2 border-violet-300 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50 p-5 text-center shadow-[0_8px_0_0_rgba(139,92,246,0.3)]"
      >
        <motion.p
          animate={{ rotate: [0, -8, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="text-6xl"
        >
          🎁
        </motion.p>
        <h2 className="mt-1 text-xl font-black text-violet-700 sm:text-2xl">礼物屋</h2>
        <p className="mt-1 text-xs font-bold text-violet-500 sm:text-sm">
          攒金币 → 换奖励 → 请爸爸妈妈兑现，说到做到哦！
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-black">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-amber-600 shadow-sm">🪙 我的金币：{coins}</span>
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-violet-600 shadow-sm">🎫 待兑现：{pendingCount} 张</span>
        </div>
      </motion.section>

      {/* 可兑换奖励 */}
      <h3 className="mb-3 mt-6 flex items-center gap-2 text-base font-black text-gray-800 sm:text-lg">
        <span className="text-xl">🛍️</span> 可兑换的亲子奖励
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {rewards.map((r, i) => {
          const enough = coins >= r.cost
          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i }}
              className="relative rounded-3xl border-2 border-violet-200 bg-white p-4 shadow-[0_5px_0_0_rgba(139,92,246,0.18)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-4xl">
                  {r.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-black text-gray-800">{r.name}</p>
                  <p className="mt-0.5 truncate text-xs font-bold text-gray-400">{r.desc}</p>
                  <p className="mt-1 text-sm font-black text-amber-600">🪙 {r.cost}</p>
                </div>
              </div>
              {r.custom && (
                <button
                  aria-label="删除自定义奖励"
                  onClick={() => {
                    sfx.click()
                    removeCustomReward(r.id)
                  }}
                  className="absolute right-3 top-3 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-black text-gray-400 transition-transform active:scale-90"
                >
                  🗑 删除
                </button>
              )}
              <Button
                disabled={!enough}
                onClick={() => {
                  sfx.click()
                  setConfirming(r)
                }}
                className={`mt-3 w-full rounded-2xl py-3 font-black text-white ${
                  enough
                    ? 'bg-gradient-to-b from-violet-400 to-violet-500 shadow-[0_4px_0_0_rgba(109,40,217,0.45)] hover:from-violet-500 hover:to-violet-600'
                    : 'bg-gray-200 text-gray-400 shadow-none'
                }`}
              >
                {enough ? '用金币兑换 🎫' : `还差 ${r.cost - coins} 🪙`}
              </Button>
            </motion.div>
          )
        })}
      </div>

      {/* 家长自定义 */}
      <div className="mt-4 text-center">
        <Button
          variant="outline"
          onClick={() => {
            sfx.click()
            setAddOpen(true)
          }}
          className="rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50/60 px-6 py-4 font-black text-violet-600"
        >
          ＋ 家长添加自定义奖励
        </Button>
      </div>

      {/* 我的券包 */}
      <h3 className="mb-3 mt-6 flex items-center gap-2 text-base font-black text-gray-800 sm:text-lg">
        <span className="text-xl">🎫</span> 我的券包
        {pendingCount > 0 && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-black text-amber-600">{pendingCount} 张待兑现</span>
        )}
      </h3>
      {redeemLog.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-white/70 p-6 text-center">
          <p className="text-4xl">🪙</p>
          <p className="mt-2 text-sm font-bold text-gray-400">
            还没有兑换记录～闯关攒够金币，就来换心仪的奖励吧！
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {redeemLog.slice(0, 15).map((record) =>
            record.fulfilled ? (
              <CouponTicket key={record.id} record={record} />
            ) : (
              <motion.div key={record.id} className="rounded-2xl border-2 border-amber-200 bg-white p-4 shadow-[0_5px_0_0_rgba(251,191,36,0.2)]">
                <CouponTicketInner record={record} onFulfill={() => markRedeemFulfilled(record.id)} />
              </motion.div>
            )
          )}
        </div>
      )}
      {redeemLog.length > 0 && (
        <p className="mt-3 text-center text-[11px] font-bold text-gray-300">
          兑换后请爸爸妈妈尽快兑现，并在这里点「已兑现」～最多保留最近 60 条记录
        </p>
      )}

      {/* 兑换确认弹窗 */}
      <Dialog open={!!confirming} onOpenChange={(o) => !o && setConfirming(null)}>
        <DialogContent className="max-w-xs rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-black">确认兑换？</DialogTitle>
            <DialogDescription className="text-center text-sm font-bold leading-relaxed">
              {confirming?.emoji} {confirming?.name}
              <br />
              将花费 <span className="font-black text-amber-600">{confirming?.cost} 金币</span>
              ，兑换后余额 <span className="font-black text-amber-600">{coins - (confirming?.cost ?? 0)}</span> 金币
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setConfirming(null)} className="flex-1 rounded-2xl border-2 py-3 font-black">
              再想想
            </Button>
            <Button onClick={doRedeem} className="flex-1 rounded-2xl bg-violet-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(109,40,217,0.45)] hover:bg-violet-600">
              确定兑换！
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 兑换成功弹窗 */}
      <Dialog open={!!lastRecord} onOpenChange={(o) => !o && setLastRecord(null)}>
        <DialogContent className="max-w-xs rounded-3xl bg-gradient-to-b from-violet-50 to-fuchsia-50">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-black text-violet-700">🎉 兑换成功！</DialogTitle>
            <DialogDescription asChild>
              <div className="mt-1 text-left">
                {lastRecord && <CouponTicket record={lastRecord} />}
                <p className="mt-3 text-center text-xs font-bold text-violet-500">
                  把这张券给爸爸妈妈看，让愿望快点实现吧！
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              sfx.click()
              setLastRecord(null)
            }}
            className="w-full rounded-2xl bg-violet-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(109,40,217,0.45)] hover:bg-violet-600"
          >
            太棒了，收好券！
          </Button>
        </DialogContent>
      </Dialog>

      {/* 家长自定义弹窗 */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-sm rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-black">➕ 添加自定义奖励</DialogTitle>
            <DialogDescription className="text-sm font-bold">
              由家长设置奖励内容和所需金币，和孩子约定好再发布哦。
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <label htmlFor="reward-name" className="mb-1 block text-xs font-black text-gray-500">奖励名称</label>
              <Input
                id="reward-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="例如：周末野餐一次"
                maxLength={12}
                className="rounded-xl border-2 font-bold"
              />
            </div>
            <div>
              <label htmlFor="reward-cost" className="mb-1 block text-xs font-black text-gray-500">所需金币</label>
              <Input
                id="reward-cost"
                type="number"
                min={1}
                max={9999}
                value={form.cost}
                onChange={(e) => setForm({ ...form, cost: e.target.value })}
                placeholder="例如：150"
                className="rounded-xl border-2 font-bold"
              />
            </div>
            <div>
              <p className="mb-1 text-xs font-black text-gray-500">选择图标</p>
              <div className="flex flex-wrap gap-1.5">
                {EMOJI_CHOICES.map((e) => (
                  <button
                    key={e}
                    onClick={() => setForm({ ...form, emoji: e })}
                    aria-label={`选择图标 ${e}`}
                    className={`h-9 w-9 rounded-xl text-xl transition-transform ${
                      form.emoji === e ? 'scale-110 bg-violet-100 ring-2 ring-violet-400' : 'bg-gray-50 active:scale-90'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
            <Button onClick={submitCustom} className="w-full rounded-2xl bg-violet-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(109,40,217,0.45)] hover:bg-violet-600">
              发布奖励 ✨
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function CouponTicketInner({ record, onFulfill }: { record: RedeemRecord; onFulfill: () => void }) {
  return (
    <div>
      <CouponTicket record={record} />
      <Button
        onClick={() => {
          sfx.click()
          onFulfill()
        }}
        className="mt-2 w-full rounded-2xl bg-emerald-500 py-2.5 text-sm font-black text-white shadow-[0_3px_0_0_rgba(5,150,105,0.4)] hover:bg-emerald-600"
      >
        👨‍👩‍👧 爸爸妈妈已兑现 ✓
      </Button>
    </div>
  )
}
