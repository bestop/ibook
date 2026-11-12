#!/usr/bin/env bash
# 服务器一键初始化（ibook 网页端/服务端）：生成 .env → 安装依赖 → 建 5 张表 → 构建
# 用法：在服务器仓库根目录执行  bash scripts/setup-server.sh
#   - .env 已存在时默认沿用（回车跳过），需重配可删除 .env 后重跑或选 r
#   - 微信凭据（WX_APPID/WX_SECRET）取自 mp.weixin.qq.com → 开发管理 → 开发设置
#   - 完成后按提示启动/重启进程，并用 curl 验证 /api/web/qr/create
set -euo pipefail
cd "$(dirname "$0")/.."

C_G=""; C_Y=""; C_R=""; C_B=""; C_0=""
if [ -t 1 ]; then
  C_G="\033[32m"; C_Y="\033[33m"; C_R="\033[31m"; C_B="\033[36m"; C_0="\033[0m"
fi
say()  { printf "%b\n" "$1"; }
die()  { printf "%b\n" "${C_R}✗ $1${C_0}" >&2; exit 1; }
ask()  { # ask 提示 默认值 → 变量名（回车取默认）
  local _v; read -r -p "$1 [$2]: " _v || die "读取输入失败"
  printf -v "$3" '%s' "${_v:-$2}"
}

say "${C_B}== 童学冒险岛 · 服务端一键初始化 ==${C_0}"
say "将依次完成：.env 配置 → bun install → 建表(db:push) → next build"
say ""

# ── 0. 前置检查：bun 与源码 ────────────────────────────────────────
command -v bun >/dev/null 2>&1 || die "未找到 bun。请先安装：curl -fsSL https://bun.sh/install | bash 然后重开终端重试"
[ -f package.json ] && [ -f prisma/schema.prisma ] || die "请在 ibook 仓库根目录执行本脚本"
[ -f .env.example ] || die "缺少 .env.example 模板（请 git pull 到最新版本）"

# ── 1. .env 配置 ──────────────────────────────────────────────────
if [ -f .env ]; then
  say "${C_Y}检测到已存在 .env：${C_0}"
  sed 's/\(WX_SECRET=....\).*/\1****（已脱敏）/' .env
  read -r -p "沿用现有 .env？回车=沿用，输入 r=重新配置 " _reuse
  if [ "${_reuse}" != "r" ]; then
    say "${C_G}✓ 沿用现有 .env${C_0}"
  else
    rm -f .env && say "已删除旧 .env，开始重新配置"
  fi
fi

if [ ! -f .env ]; then
  cp .env.example .env
  say "${C_B}—— 逐项配置（回车 = 用方括号里的默认值）——${C_0}"
  ask "SQLite 数据库路径" "file:/data/ibook.db" DB_URL
  ask "小程序 AppID" "wx4af46626b47c7cb1" WX_APPID_IN
  say "AppSecret：mp.weixin.qq.com → 开发管理 → 开发设置（32 位十六进制；留空=暂不开通微信登录/扫码，其余功能不受影响）"
  read -r -p "小程序 AppSecret []: " WX_SECRET_IN
  say "扫码小程序码版本：release=已发布线上版（默认）/ trial=体验版调试"
  ask "WX_QR_ENV_VERSION" "release" QR_ENV_IN

  sed -i "s|^DATABASE_URL=.*|DATABASE_URL=${DB_URL}|" .env
  sed -i "s|^WX_APPID=.*|WX_APPID=${WX_APPID_IN}|" .env
  sed -i "s|^WX_SECRET=.*|WX_SECRET=${WX_SECRET_IN}|" .env
  # 模板中该变量默认处于注释态，仅在用户显式选择了非默认值时启用
  if [ "${QR_ENV_IN}" != "release" ]; then
    sed -i "s|^# WX_QR_ENV_VERSION=.*|WX_QR_ENV_VERSION=${QR_ENV_IN}|" .env
  fi
  chmod 600 .env
  say "${C_G}✓ .env 已生成（权限 600，勿提交 git）${C_0}"
  if [ -z "${WX_SECRET_IN}" ]; then
    say "${C_Y}  提示：AppSecret 未填，微信登录与扫码登录暂不生效；之后补填进 .env 重启即可${C_0}"
  fi
fi

# ── 2. 数据目录（SQLite 路径的父目录，确保存在且可写）──────────────
DB_PATH="$(sed -n 's/^DATABASE_URL=file://p' .env | head -1)"
if [ -n "${DB_PATH}" ]; then
  mkdir -p "$(dirname "${DB_PATH}")" && say "✓ 数据目录就绪：$(dirname "${DB_PATH}")"
fi

# ── 3. 依赖 + 建表 + 构建 ─────────────────────────────────────────
say "${C_B}—— bun install（首次较慢）——${C_0}"
bun install || die "bun install 失败"
say "${C_B}—— 建表 db:push（幂等，可重复执行）——${C_0}"
bun run db:push || die "建表失败：检查 DATABASE_URL 目录权限"
say "${C_B}—— next build（1-3 分钟）——${C_0}"
bun run build || die "构建失败"

# ── 4. 完成提示 ───────────────────────────────────────────────────
say ""
say "${C_G}== 初始化完成 ==${C_0}"
say "启动（生产模式）：  bun run start        # 首次部署"
say "或按你的进程管理重启：pm2 restart ... / systemctl restart ..."
say ""
say "验证扫码通道（应返回 JSON 且含 token/qrUrl，503=进程未读到 .env）："
say "  curl -X POST http://127.0.0.1:3000/api/web/qr/create"
say ""
say "${C_Y}两个微信侧前置条件：${C_0}"
say "  1) 小程序码默认指向已发布版本（需发布含 pages/web-login 的新版小程序）；调试期 .env 设 WX_QR_ENV_VERSION=trial"
say "  2) 小程序后台若开启服务器 IP 白名单，需加入本服务器出口 IP（否则报 40164）"
