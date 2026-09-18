#!/bin/bash
# 答题循环 v2（假设已在答题页）：自适应题号，点击后验证生效
set +e
LETTERS=("A" "B" "C" "D" "√" "×")

mouse_click_ref() {
  local REF="$1"
  local BOX X Y W H CX CY
  BOX=$(agent-browser get box @$REF 2>&1)
  X=$(echo "$BOX" | grep -oE 'x:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
  Y=$(echo "$BOX" | grep -oE 'y:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
  W=$(echo "$BOX" | grep -oE 'width:\s+[0-9.]+' | grep -oE '[0-9.]+')
  H=$(echo "$BOX" | grep -oE 'height:\s+[0-9.]+' | grep -oE '[0-9.]+')
  if [ -z "$X" ] || [ -z "$Y" ]; then echo "box fail"; return 1; fi
  CX=$(python3 -c "print(int(float('$X')+float('$W')/2))")
  CY=$(python3 -c "print(int(float('$Y')+float('$H')/2))")
  agent-browser mouse move "$CX" "$CY" > /dev/null 2>&1
  sleep 0.3
  agent-browser mouse down left > /dev/null 2>&1
  sleep 0.15
  agent-browser mouse up left > /dev/null 2>&1
  echo "clicked@$CX,$CY"
}

get_state() {
  agent-browser eval "(() => { const btns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim().match(/^(A|B|C|D|√|×)/)); if (!btns.length) return 'ERR_ITEMS'; const k = Object.keys(btns[0]).find(k => k.startsWith('__reactFiber\$')); let f = btns[0][k]; let items = null; let hookFiber = null; while (f) { const p = f.memoizedProps; if (p && p.items && Array.isArray(p.items) && p.items.length && p.items[0] && p.items[0].question) { items = p.items; hookFiber = f; break; } f = f.return; } if (!items) return 'ERR_ITEMS'; let hs = hookFiber.memoizedState; let idx = null; while (hs) { if (typeof hs.memoizedState === 'number') { idx = hs.memoizedState; break; } hs = hs.next; } if (idx === null) return 'ERR_IDX'; return JSON.stringify({idx, a: items[idx].answer}); })()" 2>&1
}

for ROUND in $(seq 1 16); do
  sleep 1
  SNAP=$(agent-browser snapshot -i 2>&1)
  # 结算页检测
  if echo "$SNAP" | grep -qE '挑战失败|闯关成功|复习完成|挑战完成'; then
    echo "=== 结算页出现 ==="
    agent-browser screenshot /home/z/my-project/download/win-result.png
    exit 0
  fi
  NEXT=$(echo "$SNAP" | grep -E 'button "(下一题|查看结果|完成)' | grep -oE 'e[0-9]+' | head -1)
  if [ -n "$NEXT" ]; then
    echo "R$ROUND: go next"
    mouse_click_ref "$NEXT"
    continue
  fi
  STATE=$(get_state)
  if [[ "$STATE" == ERR* || -z "$STATE" ]]; then echo "state fail: $STATE"; continue; fi
  read -r IDX A <<< "$(echo "$STATE" | python3 -c "
import sys, json
s = sys.stdin.read().strip()
try:
    s = json.loads(s)
except Exception:
    pass
d = json.loads(s)
print(d['idx'], d['a'])
")"
  if [ -z "$IDX" ]; then echo "parse fail: $STATE"; continue; fi
  L="${LETTERS[$A]}"
  echo "R$ROUND: Q$((IDX+1)) answer=$A ($L)"
  SNAP2=$(agent-browser snapshot -i 2>&1)
  REF=$(echo "$SNAP2" | grep -E "button \"$L" | grep -oE 'e[0-9]+' | head -1)
  if [ -z "$REF" ]; then echo "option $L not found"; continue; fi
  mouse_click_ref "$REF"
done

echo "=== 未检测到结算页，截图当前状态 ==="
agent-browser screenshot /home/z/my-project/download/win-result.png
