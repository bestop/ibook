'use client'

import type { PetKind } from '@/lib/pet'

// 全身动画宠物形象（画稿由 scripts/gen_pet_art.py 生成，与小程序端 GIF 同源）
// SVG 内嵌 CSS 动画：呼吸 / 摇尾 / 眨眼 / 耳朵抖动 / 传说期星光与披风
// stage: 1 幼年期(铃铛项圈) · 2 少年期(冒险领巾) · 3 成年期(探险帽+挎包) · 4 传说期(皇冠+披风)
export default function PetAvatar({
  kind,
  stage,
  size = 120,
  className = '',
}: {
  kind: PetKind
  stage: number
  size?: number
  className?: string
}) {
  const st = Math.min(4, Math.max(1, Math.round(stage)))
  return (
    <img
      src={`/pet/${kind}-s${st}.svg`}
      alt={kind === 'dog' ? '小狗伙伴全身形象' : '小猫伙伴全身形象'}
      width={size}
      height={size}
      draggable={false}
      className={`inline-block select-none ${className}`}
    />
  )
}
