#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
全身动画宠物形象生成器（小狗/小猫 × 4 成长阶段）——public/pet 与 miniprogram/images/pet 资产的源画稿
- Web 端：动画 SVG（内嵌 CSS keyframes：呼吸/摇尾/眨眼/耳朵抖动/传说期星光）→ public/pet/{kind}-s{n}.svg
- 小程序端：同一画稿逐帧渲染 → 合成循环 GIF → miniprogram/images/pet/{kind}-s{n}.gif
依赖：pip install cairosvg pillow；用法：python3 tools/gen_pet_art.py
"""
import io, math, os
import cairosvg
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_SVG = os.path.join(ROOT, 'public/pet')
OUT_GIF = os.path.join(ROOT, 'miniprogram/images/pet')
PREVIEW = os.path.join(ROOT, 'tools/preview')

N_FRAMES = 16
FRAME_MS = 130
GIF_SIZE = 200
RENDER_SCALE = 2
GIF_COLORS = 64

PAL = {
    'dog': dict(main='#F6C875', line='#8C5A2B', cream='#FFF3DC', ear_in='#E89B7C',
                blush='#F9A8A0', nose='#5B4030', patch='#EDAF55', ink='#3D2B1F'),
    'cat': dict(main='#FDF3E3', line='#B98A5A', cream='#FFFFFF', ear_in='#F7B7C4',
                blush='#F9A8A8', nose='#E88098', patch='#F9B24E', ink='#4A3728'),
}
ACCENT = dict(bandana='#E8604C', bandana_d='#B24434', collar='#63ADF2', collar_d='#3E7CBF',
              bell='#FFD34D', bell_d='#C9962B', cap='#3FA46A', cap_d='#2E7D4F',
              crown='#FFC93C', crown_d='#D9A02B', gem='#E8604C',
              cape='#8A6BD1', cape_d='#5C3F99', spark='#FFE28A')

STAGE_TRANSFORM = {1: 'translate(10,12) scale(0.90)', 2: 'translate(5,6) scale(0.955)',
                   3: 'translate(0,1) scale(0.985)', 4: ''}


def star4(cx, cy, r, fill):
    k = 0.22 * r
    return (f'<path d="M{cx},{cy - r} Q{cx + k},{cy - k} {cx + r},{cy} Q{cx + k},{cy + k} '
            f'{cx},{cy + r} Q{cx - k},{cy + k} {cx - r},{cy} Q{cx - k},{cy - k} {cx},{cy - r} Z" '
            f'fill="{fill}" stroke="none"/>')


def pose_at(t):
    tail = -8 + 20 * (0.5 + 0.5 * math.sin(4 * math.pi * t))
    sx = 1 + 0.012 * math.sin(2 * math.pi * t)
    sy = 1 - 0.018 * math.sin(2 * math.pi * t)
    blink = 0.1 if 0.86 <= t < 0.96 else 1.0
    if 0.42 <= t < 0.48: ear = -7
    elif 0.48 <= t < 0.54: ear = 4
    else: ear = 0
    bob = -2 * (0.5 - 0.5 * math.cos(2 * math.pi * t))
    spark = 0.25 + 0.75 * (0.5 + 0.5 * math.sin(6 * math.pi * t))
    cape = 3 * math.sin(2 * math.pi * t)
    return dict(tail=tail, sx=sx, sy=sy, blink=blink, ear=ear, bob=bob, spark=spark, cape=cape)


CSS_ANIM = """
.p-breathe{animation:p-br 2.6s ease-in-out infinite}
@keyframes p-br{0%,100%{transform:scale(1,1)}50%{transform:scale(1.012,.982)}}
.p-tail{animation:p-tl 1.3s ease-in-out infinite}
@keyframes p-tl{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(12deg)}}
.p-head{animation:p-hd 2.6s ease-in-out infinite}
@keyframes p-hd{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.p-eye{animation:p-bl 3.4s linear infinite}
@keyframes p-bl{0%,90%,100%{transform:scaleY(1)}93%,95%{transform:scaleY(.1)}}
.p-ear{animation:p-er 4.2s ease-in-out infinite}
@keyframes p-er{0%,88%,100%{transform:rotate(0)}91%{transform:rotate(-7deg)}95%{transform:rotate(4deg)}}
.p-spark{animation:p-sp 1.8s ease-in-out infinite}
.p-spark2{animation-delay:.9s}
@keyframes p-sp{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.12)}}
.p-cape{animation:p-cp 2.6s ease-in-out infinite}
@keyframes p-cp{0%,100%{transform:skewX(0deg)}50%{transform:skewX(3deg)}}
"""


def pet_svg(kind, stage, pose=None, animated=False):
    p = pose or dict(tail=2, sx=1, sy=1, blink=1, ear=0, bob=0, spark=1, cape=0)
    C, A = PAL[kind], ACCENT
    cls = (lambda name, origin=None: f'class="{name}"' + (f' style="transform-origin:{origin}"' if origin else '')) if animated else (lambda name, origin=None: '')
    tr = (lambda name: f'transform="{name}"') if not animated else (lambda name: '')
    s = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">']
    if animated:
        s.append(f'<style>{CSS_ANIM}</style>')
    st_tr = STAGE_TRANSFORM[stage]
    s.append(f'<g transform="{st_tr}">' if st_tr else '<g>')
    s.append('<ellipse cx="100" cy="176" rx="44" ry="8" fill="#3B2B1A" opacity="0.12" stroke="none"/>')
    if stage == 4:
        s.append(f'<g {cls("p-cape", "100px 150px")} {tr("translate(0,150) skewX(%.2f) translate(0,-150)" % p["cape"])}>'
                 f'<path d="M58,106 Q44,150 62,172 Q100,162 138,172 Q156,150 142,106 Q100,118 58,106 Z" '
                 f'fill="{A["cape"]}" stroke="{A["cape_d"]}" stroke-width="3" stroke-linejoin="round"/></g>')
    s.append(f'<g {cls("p-tail", "138px 142px")} {tr("rotate(%.2f 138 142)" % p["tail"])}>')
    if kind == 'dog':
        s.append(f'<circle cx="146" cy="128" r="15" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3"/>'
                 f'<circle cx="148" cy="124" r="7" fill="{C["cream"]}" stroke="none"/>')
    else:
        s.append(f'<path d="M136,150 Q168,142 162,104" fill="none" stroke="{C["line"]}" stroke-width="18" stroke-linecap="round"/>'
                 f'<path d="M136,150 Q168,142 162,104" fill="none" stroke="{C["main"]}" stroke-width="12" stroke-linecap="round"/>'
                 f'<path d="M153,133 L165,127" stroke="{C["patch"]}" stroke-width="5" stroke-linecap="round"/>'
                 f'<path d="M156,119 L167,113" stroke="{C["patch"]}" stroke-width="5" stroke-linecap="round"/>'
                 f'<circle cx="161" cy="106" r="6.5" fill="{C["cream"]}" stroke="none"/>')
    s.append('</g>')
    s.append(f'<g {cls("p-breathe", "100px 170px")} '
             f'{tr("translate(100,170) scale(%.4f,%.4f) translate(-100,-170)" % (p["sx"], p["sy"]))}>')
    s.append(f'<circle cx="70" cy="146" r="17" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3"/>'
             f'<circle cx="130" cy="146" r="17" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3"/>'
             f'<ellipse cx="100" cy="140" rx="36" ry="30" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3"/>'
             f'<ellipse cx="100" cy="147" rx="21" ry="18" fill="{C["cream"]}" stroke="none"/>'
             f'<ellipse cx="76" cy="167" rx="12" ry="7" fill="{C["cream"]}" stroke="{C["line"]}" stroke-width="2.5"/>'
             f'<ellipse cx="124" cy="167" rx="12" ry="7" fill="{C["cream"]}" stroke="{C["line"]}" stroke-width="2.5"/>'
             f'<ellipse cx="86" cy="146" rx="8" ry="20" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3"/>'
             f'<ellipse cx="114" cy="146" rx="8" ry="20" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3"/>'
             f'<ellipse cx="86" cy="165" rx="8.5" ry="5.5" fill="{C["cream"]}" stroke="{C["line"]}" stroke-width="2.5"/>'
             f'<ellipse cx="114" cy="165" rx="8.5" ry="5.5" fill="{C["cream"]}" stroke="{C["line"]}" stroke-width="2.5"/>')
    if stage == 3:
        s.append(f'<path d="M74,118 L126,148" stroke="{C["line"]}" stroke-width="7" stroke-linecap="round"/>'
                 f'<rect x="114" y="142" width="20" height="16" rx="5" fill="#C98A4B" stroke="{C["line"]}" stroke-width="2.5"/>'
                 f'<circle cx="124" cy="150" r="2.2" fill="{A["bell"]}" stroke="none"/>')
    s.append('</g>')
    s.append(f'<g {cls("p-head")} {tr("translate(0,%.2f)" % p["bob"])}>')
    if kind == 'dog':
        s.append(f'<g {cls("p-ear", "66px 52px")} {tr("rotate(%.2f 66 52)" % p["ear"])}>'
                 f'<path d="M64,50 Q46,58 50,84 Q60,94 72,80 Q68,60 64,50 Z" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3" stroke-linejoin="round"/>'
                 f'<path d="M62,58 Q52,64 55,80 Q61,86 68,76 Q66,64 62,58 Z" fill="{C["ear_in"]}" stroke="none"/></g>')
        s.append(f'<path d="M136,50 Q154,58 150,84 Q140,94 128,80 Q132,60 136,50 Z" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3" stroke-linejoin="round"/>'
                 f'<path d="M138,58 Q148,64 145,80 Q139,86 132,76 Q134,64 138,58 Z" fill="{C["ear_in"]}" stroke="none"/>')
    else:
        s.append(f'<g {cls("p-ear", "64px 52px")} {tr("rotate(%.2f 64 52)" % p["ear"])}>'
                 f'<path d="M62,58 L54,16 L92,38 Z" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3" stroke-linejoin="round"/>'
                 f'<path d="M64,50 L58,26 L82,40 Z" fill="{C["ear_in"]}" stroke="none"/></g>')
        s.append(f'<path d="M138,58 L146,16 L108,38 Z" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3" stroke-linejoin="round"/>'
                 f'<path d="M136,50 L142,26 L118,40 Z" fill="{C["ear_in"]}" stroke="none"/>')
    s.append(f'<circle cx="100" cy="82" r="44" fill="{C["main"]}" stroke="{C["line"]}" stroke-width="3.5"/>')
    if kind == 'cat':
        s.append(f'<path d="M92,44 L92,55 M100,42 L100,54 M108,44 L108,55" stroke="{C["patch"]}" stroke-width="4" stroke-linecap="round"/>')
    if kind == 'dog':
        s.append(f'<ellipse cx="100" cy="98" rx="17" ry="12" fill="{C["cream"]}" stroke="none"/>')
    for ex, exo in ((82, -2), (118, 2)):
        s.append(f'<g {cls("p-eye", f"{ex}px 78px")} {tr("translate(%d,78) scale(1,%.2f) translate(%d,-78)" % (ex, p["blink"], -ex))}>'
                 f'<circle cx="{ex}" cy="78" r="6.5" fill="{C["ink"]}" stroke="none"/>'
                 f'<circle cx="{ex + exo}" cy="75.5" r="2.2" fill="#FFFFFF" stroke="none"/></g>')
    s.append(f'<ellipse cx="68" cy="92" rx="8" ry="5" fill="{C["blush"]}" opacity="0.75" stroke="none"/>'
             f'<ellipse cx="132" cy="92" rx="8" ry="5" fill="{C["blush"]}" opacity="0.75" stroke="none"/>')
    if kind == 'dog':
        s.append(f'<ellipse cx="100" cy="92" rx="6" ry="4.5" fill="{C["nose"]}" stroke="none"/>'
                 f'<path d="M92,101 Q96,106 100,101 Q104,106 108,101" fill="none" stroke="{C["ink"]}" stroke-width="2.5" stroke-linecap="round"/>')
    else:
        s.append(f'<path d="M95,92 L105,92 L100,99 Z" fill="{C["nose"]}" stroke="none"/>'
                 f'<path d="M92,103 Q96,108 100,103 Q104,108 108,103" fill="none" stroke="{C["ink"]}" stroke-width="2.5" stroke-linecap="round"/>'
                 f'<path d="M52,88 L30,84 M52,96 L30,98 M148,88 L170,84 M148,96 L170,98" stroke="#D9B98C" stroke-width="2" stroke-linecap="round"/>')
    if stage == 1:
        s.append(f'<path d="M76,116 Q100,128 124,116" fill="none" stroke="{A["collar_d"]}" stroke-width="12" stroke-linecap="round"/>'
                 f'<path d="M76,116 Q100,128 124,116" fill="none" stroke="{A["collar"]}" stroke-width="8" stroke-linecap="round"/>'
                 f'<circle cx="100" cy="129" r="5.5" fill="{A["bell"]}" stroke="{A["bell_d"]}" stroke-width="2"/>'
                 f'<path d="M97,131 L103,131" stroke="{A["bell_d"]}" stroke-width="1.6" stroke-linecap="round"/>')
    elif stage == 2:
        s.append(f'<path d="M78,114 L122,114 L100,140 Z" fill="{A["bandana"]}" stroke="{A["bandana_d"]}" stroke-width="2.5" stroke-linejoin="round"/>'
                 f'<circle cx="79" cy="114" r="4.5" fill="{A["bandana"]}" stroke="{A["bandana_d"]}" stroke-width="2"/>'
                 f'<circle cx="121" cy="114" r="4.5" fill="{A["bandana"]}" stroke="{A["bandana_d"]}" stroke-width="2"/>')
    if stage == 3:
        s.append(f'<path d="M70,54 Q74,24 100,24 Q126,24 130,54 Q100,64 70,54 Z" fill="{A["cap"]}" stroke="{A["cap_d"]}" stroke-width="3" stroke-linejoin="round"/>'
                 f'<ellipse cx="100" cy="56" rx="32" ry="7" fill="{A["cap_d"]}" stroke="none"/>'
                 f'<circle cx="100" cy="40" r="5.5" fill="{A["bell"]}" stroke="{A["bell_d"]}" stroke-width="2"/>')
    elif stage == 4:
        s.append(f'<g {tr("rotate(-3 100 30)")}>'
                 f'<path d="M76,42 L74,14 L90,28 L100,10 L110,28 L126,14 L124,42 Q100,52 76,42 Z" '
                 f'fill="{A["crown"]}" stroke="{A["crown_d"]}" stroke-width="3" stroke-linejoin="round"/>'
                 f'<circle cx="100" cy="34" r="4.5" fill="{A["gem"]}" stroke="none"/>'
                 f'<circle cx="82" cy="34" r="2.5" fill="{A["bell"]}" stroke="none"/>'
                 f'<circle cx="118" cy="34" r="2.5" fill="{A["bell"]}" stroke="none"/></g>')
    s.append('</g>')
    if stage == 4:
        if animated:
            s.append(f'<g {cls("p-spark", "42px 64px")}>{star4(42, 64, 9, A["spark"])}</g>')
            s.append(f'<g {cls("p-spark p-spark2", "162px 58px")}>{star4(162, 58, 7, "#FFFFFF")}</g>')
            s.append(f'<g {cls("p-spark", "166px 120px")}>{star4(166, 120, 6, A["spark"])}</g>')
        else:
            s.append(f'<g opacity="%.2f">{star4(42, 64, 9, A["spark"])}</g>' % p['spark'])
            s.append(f'<g opacity="%.2f">{star4(162, 58, 7, "#FFFFFF")}</g>' % min(1, p['spark'] + 0.2))
            s.append(f'<g opacity="%.2f">{star4(166, 120, 6, A["spark"])}</g>' % max(0.15, 1 - p['spark']))
    s.append('</g></svg>')
    return ''.join(s)


def write_outputs():
    os.makedirs(OUT_SVG, exist_ok=True)
    os.makedirs(OUT_GIF, exist_ok=True)
    os.makedirs(PREVIEW, exist_ok=True)
    for kind in ('dog', 'cat'):
        for stage in (1, 2, 3, 4):
            with open(os.path.join(OUT_SVG, f'{kind}-s{stage}.svg'), 'w') as f:
                f.write(pet_svg(kind, stage, animated=True))
    total = 0
    for kind in ('dog', 'cat'):
        for stage in (1, 2, 3, 4):
            frames = []
            for i in range(N_FRAMES):
                svg = pet_svg(kind, stage, pose=pose_at(i / N_FRAMES), animated=False)
                png = cairosvg.svg2png(bytestring=svg.encode(), output_width=GIF_SIZE * RENDER_SCALE,
                                       output_height=GIF_SIZE * RENDER_SCALE)
                img = Image.open(io.BytesIO(png)).convert('RGBA').resize((GIF_SIZE, GIF_SIZE), Image.LANCZOS)
                mask = img.getchannel('A').point(lambda v: 255 if v > 110 else 0)
                rgb = Image.new('RGBA', img.size, (255, 0, 255, 255))
                rgb.paste(img, (0, 0), mask)
                frames.append(rgb.convert('RGB'))
            strip = Image.new('RGB', (GIF_SIZE, GIF_SIZE * len(frames)), (255, 255, 255))
            for i, fr in enumerate(frames):
                strip.paste(fr, (0, i * GIF_SIZE))
            gpal = strip.quantize(colors=GIF_COLORS, method=Image.MEDIANCUT)
            magic_idx = min(range(256), key=lambda i: sum(abs(c - m) for c, m in zip(gpal.getpalette()[i * 3:i * 3 + 3], (255, 0, 255))))
            qf = [fr.quantize(palette=gpal, dither=Image.NONE) for fr in frames]
            out = os.path.join(OUT_GIF, f'{kind}-s{stage}.gif')
            qf[0].save(out, save_all=True, append_images=qf[1:], loop=0, duration=FRAME_MS,
                       transparency=magic_idx, disposal=2, optimize=False)
            total += os.path.getsize(out)
    print(f'OK, GIF total {total / 1024:.0f}KB')


if __name__ == '__main__':
    write_outputs()
