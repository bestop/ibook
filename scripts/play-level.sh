#!/bin/bash
# 自动答完当前关卡（用于 E2E 验证 2026 新版题库第一单元）
# 用 JS 直接派发 click，避免 Playwright 遮挡/滚动检测的不稳定

PAIRS=(
  '《落花生》的作者|许地山'
  '《桂花雨》的作者|琦君'
  '「浸」怎么读|jìn'
  '「榨油」的「榨」|zhà'
  '「种花生」的「种」|zhòng、zhǒng'
  '书写完全正确|爱慕'
  '"体面"是什么意思|（相貌、样子）好看、有气派'
  '借花生告诉我们|像花生一样朴实无华、对别人有用的人'
  '"美好的境界"指什么|人与鸟互相信任、和睦相处'
  '摇桂花|√ 对'
)

read_q() {
  agent-browser eval "document.querySelector('p.text-lg')?.textContent||''" 2>/dev/null | sed 's/^"//;s/"$//;s/\\\"/"/g'
}

js_click_next() {
  agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.includes('下一题')||x.textContent.includes('完成'));if(b){b.click();return true}return false})()" 2>/dev/null | rg -q true
}

js_click_opt() {
  local opt="$1"
  agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>!x.disabled&&x.textContent.includes(\"$opt\"));if(b){b.click();return true}return false})()" 2>/dev/null | rg -q true
}

for step in $(seq 1 14); do
  # 关闭可能弹出的成就弹窗（遮挡不影响 JS 点击，但避免干扰快照）
  agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.includes('收下'));if(b){b.click();return true}return false})()" >/dev/null 2>&1 || true

  # 若上一题已答（存在下一题/完成按钮），先推进
  if agent-browser eval "[...document.querySelectorAll('button')].some(x=>x.textContent.includes('下一题')||x.textContent.includes('完成'))" 2>/dev/null | rg -q true; then
    js_click_next || true
    sleep 0.7
  fi

  Q=$(read_q)
  if [ -z "$Q" ]; then
    echo "[step $step] 已离开答题视图（结果页）"
    break
  fi
  echo "[step $step] 题目: $Q"

  OPT=""
  for p in "${PAIRS[@]}"; do
    pat="${p%%|*}"; opt="${p##*|}"
    if [[ "$Q" == *"$pat"* ]]; then OPT="$opt"; break; fi
  done
  if [ -z "$OPT" ]; then
    echo "  !! 未匹配到答案：$Q"
    exit 1
  fi
  echo "  -> 选: $OPT"

  ok=0
  for try in 1 2 3; do
    if js_click_opt "$OPT"; then ok=1; break; fi
    js_click_next || true
    sleep 0.7
    Q=$(read_q)
    [ -z "$Q" ] && break
  done
  [ "$ok" = "1" ] || { echo "  !! 选项点击失败"; exit 1; }
  sleep 0.6
done

agent-browser wait 1000
echo "=== 当前页面快照 ==="
agent-browser snapshot -c 2>&1 | head -40
