'use client'

// 基于 Web Audio API 的合成音效（无需外部音频文件）

let ctx: AudioContext | null = null
let soundEnabled = true
const listeners = new Set<() => void>()

export function subscribeSound(cb: () => void) {
  listeners.add(cb)
  return () => {
    listeners.delete(cb)
  }
}

export function getSoundSnapshot() {
  return soundEnabled
}

export function setSoundEnabled(on: boolean) {
  soundEnabled = on
  try {
    localStorage.setItem('yuwen-sound', on ? '1' : '0')
  } catch {
    // ignore
  }
  listeners.forEach((l) => l())
}

export function loadSoundPref(): boolean {
  let v = '1'
  try {
    v = localStorage.getItem('yuwen-sound') ?? '1'
  } catch {
    // ignore
  }
  setSoundEnabled(v !== '0')
  return soundEnabled
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

function tone(freq: number, dur: number, opts?: { type?: OscillatorType; delay?: number; gain?: number; slideTo?: number }) {
  const c = getCtx()
  if (!c || !soundEnabled) return
  const t0 = c.currentTime + (opts?.delay ?? 0)
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = opts?.type ?? 'sine'
  osc.frequency.setValueAtTime(freq, t0)
  if (opts?.slideTo) osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + dur)
  const vol = opts?.gain ?? 0.12
  g.gain.setValueAtTime(0, t0)
  g.gain.linearRampToValueAtTime(vol, t0 + 0.015)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(c.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.05)
}

export const sfx = {
  click() {
    tone(880, 0.06, { type: 'triangle', gain: 0.06 })
  },
  correct() {
    tone(523.25, 0.1, { gain: 0.14 })
    tone(659.25, 0.14, { delay: 0.09, gain: 0.14 })
    tone(783.99, 0.2, { delay: 0.18, gain: 0.14 })
  },
  wrong() {
    tone(311.13, 0.18, { type: 'square', gain: 0.07 })
    tone(233.08, 0.3, { type: 'square', delay: 0.12, gain: 0.07 })
  },
  combo() {
    tone(659.25, 0.08, { gain: 0.1 })
    tone(880, 0.08, { delay: 0.07, gain: 0.1 })
    tone(1174.66, 0.16, { delay: 0.14, gain: 0.1 })
  },
  coin() {
    tone(987.77, 0.07, { type: 'triangle', gain: 0.1 })
    tone(1318.51, 0.14, { type: 'triangle', delay: 0.06, gain: 0.1 })
  },
  win() {
    const notes = [523.25, 659.25, 783.99, 1046.5]
    notes.forEach((n, i) => tone(n, 0.16, { delay: i * 0.13, gain: 0.15 }))
    tone(1318.5, 0.4, { delay: 0.55, gain: 0.15 })
  },
  lose() {
    tone(392, 0.2, { type: 'triangle', gain: 0.1 })
    tone(349.23, 0.2, { type: 'triangle', delay: 0.18, gain: 0.1 })
    tone(261.63, 0.45, { type: 'triangle', delay: 0.36, gain: 0.12 })
  },
  tick() {
    tone(440, 0.04, { type: 'sine', gain: 0.04 })
  },
  star(i: number) {
    tone(659.25 + i * 220, 0.22, { gain: 0.16, delay: i * 0.02 })
  },
}
