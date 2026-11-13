import type { ReactNode } from 'react'

export type IconTone = 'green' | 'amber' | 'orange' | 'red' | 'pink' | 'sky' | 'violet' | 'teal' | 'gray'
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface IconChipProps {
  children: ReactNode
  tone?: IconTone
  size?: IconSize
  round?: boolean
  className?: string
}

/**
 * 统一图标芯片：彩色扁平 + 轻微拟物光泽。
 * 与小程序端 app.wxss 的 .ico-chip 同构同名（tone/size/round 三要素一致），
 * 全站 emoji 图标一律经此芯片呈现，保证图标风格统一。
 * 需要非标尺寸（英雄区/科目岛大贴片）时用 className 传 Tailwind 尺寸覆盖。
 */
export default function IconChip({ children, tone = 'green', size = 'md', round = false, className = '' }: IconChipProps) {
  return (
    <span className={`ico-chip ico-${tone} ico-${size}${round ? ' ico-round' : ''}${className ? ` ${className}` : ''}`}>
      <span className="ico-chip-glyph">{children}</span>
    </span>
  )
}
