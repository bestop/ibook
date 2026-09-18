#!/bin/bash
# 自动通关验证脚本 v3：reload 后重新进入关卡，动态读取当前题目的正确答案
set +e

click_option() {
  local L="$1"
  local SNAP REF OUT
  SNAP=$(agent-browser snapshot -i 2>&1)
  REF=$(echo "$SNAP" | grep -E "button \"$L" | grep -oE 'e[0-9]+' | head -1)
  if [ -z "$REF" ]; then echo "ERROR: button $L not found"; echo "$SNAP" | head -8; exit 1; fi
  OUT=$(agent-browser click @$REF 2>&1)
  if echo "$OUT" | grep -q "covered"; then
    # 用坐标点击兜底
    local BOX X Y W H CX CY
    BOX=$(agent-browser get box @$REF 2>&1)
    X=$(echo "$BOX" | grep -oE 'x:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
    Y=$(echo "$BOX" | grep -oE 'y:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
    W=$(echo "$BOX" | grep -oE 'width:\s+[0-9.]+' | grep -oE '[0-9.]+')
    H=$(echo "$BOX" | grep -oE 'height:\s+[0-9.]+' | grep -oE '[0-9.]+')
    CX=$(python3 -c "print(float('$X')+float('$W')/2)")
    CY=$(python3 -c "print(float('$Y')+float('$H')/2)")
    agent-browser mouse move "$CX" "$CY" > /dev/null 2>&1
    agent-browser mouse down left > /dev/null 2>&1
    agent-browser mouse up left > /dev/null 2>&1
    echo "clicked $L via mouse ($CX,$CY)"
  else
    echo "clicked $L via ref"
  fi
}

# 1. reload
agent-browser reload > /dev/null 2>&1
sleep 3

# 2. 进入第一关（滚动+坐标点击）
REF=$(agent-browser snapshot -i 2>&1 | grep -E 'button "挑战"' | grep -oE 'e[0-9]+' | head -1)
agent-browser scrollintoview @$REF > /dev/null 2>&1
sleep 1
BOX=$(agent-browser get box @$REF 2>&1)
X=$(echo "$BOX" | grep -oE 'x:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
Y=$(echo "$BOX" | grep -oE 'y:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
W=$(echo "$BOX" | grep -oE 'width:\s+[0-9.]+' | grep -oE '[0-9.]+')
H=$(echo "$BOX" | grep -oE 'height:\s+[0-9.]+' | grep -oE '[0-9.]+')
CX=$(python3 -c "print(float('$X')+float('$W')/2)")
CY=$(python3 -c "print(float('$Y')+float('$H')/2)")
agent-browser mouse move "$CX" "$CY" > /dev/null 2>&1
agent-browser mouse down left > /dev/null 2>&1
agent-browser mouse up left > /dev/null 2>&1
sleep 2
echo "entered level 1"

LETTERS=("A" "B" "C" "D" "√" "×")

for IDX in 0 1 2 3 4 5 6 7 8 9; do
  sleep 0.8
  # 3. 动态读取当前题目正确答案
  ANS=$(agent-browser eval "(() => { const btns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim().match(/^(A|B|C|D|√|×)/)); if (!btns.length) return 'ERR'; const k = Object.keys(btns[0]).find(k => k.startsWith('__reactFiber\$')); let f = btns[0][k]; let items = null; while (f) { const p = f.memoizedProps; if (p && p.items && Array.isArray(p.items) && p.items.length && p.items[0] && p.items[0].question) { items = p.items; break; } f = f.return; } if (!items) return 'ERR'; return JSON.stringify(items.map(it => it.answer)); })()" 2>&1 | tr -d '"')
  if [[ "$ANS" == ERR* || -z "$ANS" ]]; then echo "eval failed at question $IDX"; exit 1; fi
  A=$(echo "$ANS" | python3 -c "import sys,json; print(json.load(sys.stdin)[$IDX])")
  L="${LETTERS[$A]}"
  echo "Q$((IDX+1)): answer=$A ($L)"
  click_option "$L"
  sleep 1.5
  # 4. 点击下一题
  SNAP2=$(agent-browser snapshot -i 2>&1)
  NEXT=$(echo "$SNAP2" | grep -E 'button "(下一题|查看结果|完成)' | grep -oE 'e[0-9]+' | head -1)
  if [ -z "$NEXT" ]; then echo "WARN: next not found"; echo "$SNAP2" | head -10; exit 1; fi
  OUTN=$(agent-browser click @$NEXT 2>&1)
  if echo "$OUTN" | grep -q "covered"; then
    BOX2=$(agent-browser get box @$NEXT 2>&1)
    X2=$(echo "$BOX2" | grep -oE 'x:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
    Y2=$(echo "$BOX2" | grep -oE 'y:\s+-?[0-9.]+' | grep -oE -- '-?[0-9.]+')
    W2=$(echo "$BOX2" | grep -oE 'width:\s+[0-9.]+' | grep -oE '[0-9.]+')
    H2=$(echo "$BOX2" | grep -oE 'height:\s+[0-9.]+' | grep -oE '[0-9.]+')
    CX2=$(python3 -c "print(float('$X2')+float('$W2')/2)")
    CY2=$(python3 -c "print(float('$Y2')+float('$H2')/2)")
    agent-browser mouse move "$CX2" "$CY2" > /dev/null 2>&1
    agent-browser mouse down left > /dev/null 2>&1
    agent-browser mouse up left > /dev/null 2>&1
    echo "next via mouse"
  else
    echo "next via ref"
  fi
  sleep 1.2
done

sleep 2
agent-browser screenshot /home/z/my-project/download/win-result.png
echo "=== done ==="
