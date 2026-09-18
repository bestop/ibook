#!/bin/bash
# 确定性自动通关：数学第一关「符号表示数」
# 每题严格两步：点正确选项 → 点「下一题」，避免重试逻辑串题

PAIRS=(
  '□ + 7 = 15|8'
  '☆ × 6 = 42|7'
  '△ ÷ 4 = 12|48'
  '○ − 9 = 20|38'
  '一个数加上 15|减法'
  '0.25 + □ = 1|0.75'
  '10 − ☆ = 4.5|5.5'
  '☆ + ☆ + ☆ = 18|6'
  '同一个符号只能表示同一个数|√ 对'
  '不用管题目里的等量关系|× 错'
)

read_q() {
  agent-browser eval "document.querySelector('p.text-lg')?.textContent||''" 2>/dev/null | sed 's/^"//;s/"$//;s/\\\"/"/g'
}

js_click_opt() {
  local opt="$1"
  agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>!x.disabled&&x.textContent.includes(\"$opt\"));if(b){b.click();return 'OKCLICK'}return 'NOBTN'})()" 2>/dev/null | rg -q OKCLICK
}

js_click_next() {
  agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>!x.disabled&&(x.textContent.includes('下一题')||x.textContent.includes('完成')));if(b){b.click();return 'OKNEXT'}return 'NONEXT'})()" 2>/dev/null | rg -q OKNEXT
}

for step in $(seq 1 12); do
  Q=$(read_q)
  if [ -z "$Q" ]; then
    echo "[step $step] 无题目文本（应已到结算页）"
    break
  fi
  echo "[step $step] $Q"

  OPT=""
  for p in "${PAIRS[@]}"; do
    pat="${p%%|*}"; opt="${p##*|}"
    if [[ "$Q" == *"$pat"* ]]; then OPT="$opt"; break; fi
  done
  if [ -z "$OPT" ]; then
    echo "  !! 未匹配到答案"
    exit 1
  fi
  echo "  -> 选: $OPT"

  ok=0
  for try in 1 2 3; do
    if js_click_opt "$OPT"; then ok=1; break; fi
    sleep 0.5
  done
  [ "$ok" = "1" ] || { echo "  !! 选项点击失败"; agent-browser eval "(()=>[...document.querySelectorAll('button')].map(b=>b.textContent.trim().slice(0,15)+'(dis='+b.disabled+')').join(' | '))()"; exit 1; }

  # 点下一题（重试等待出现）
  nxt=0
  for try in 1 2 3 4 5; do
    if js_click_next; then nxt=1; break; fi
    sleep 0.4
  done
  [ "$nxt" = "1" ] || { echo "  !! 下一题点击失败（可能是最后一题/查看结果）"; }
  sleep 0.5
done

agent-browser wait 1200
echo ""
echo "=== 结算页快照 ==="
agent-browser snapshot -c 2>&1 | head -25
