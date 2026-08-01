'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// CSS portado EXATAMENTE do <style> inline do fonte (public/up2/index.html).
// Nao reescrever em Tailwind, nao alterar valores.
const STYLE = `
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }

:root {
  --bg:        #07070A;
  --surface:   #0E0E14;
  --surface2:  #141420;
  --surface3:  #1A1A28;
  --border:    rgba(255,255,255,0.06);
  --border2:   rgba(255,255,255,0.1);
  --green:     #05D17A;
  --green2:    #00FF94;
  --green-bg:  rgba(5,209,122,0.08);
  --green-bd:  rgba(5,209,122,0.2);
  --amber:     #FFAA00;
  --amber-bg:  rgba(255,170,0,0.08);
  --red:       #FF3B3B;
  --purple:    #A78BFA;
  --blue:      #60A5FA;
  --text:      #EEEEF2;
  --text2:     #AAAAB8;
  --text3:     #55556A;
  --r:         20px;
  --w:         min(390px, 100vw);
}

html, body {
  width:100%; min-height:100vh;
  background: var(--bg);
  font-family: 'Inter', sans-serif;
  display:flex; flex-direction:column; align-items:center;
  overscroll-behavior: none;
}

/* ===========================
   STATUS BAR
=========================== */
.status-bar {
  width: var(--w);
  display:flex; justify-content:space-between; align-items:center;
  padding: 15px 24px 8px;
  position:sticky; top:0; z-index:60;
  background: var(--bg);
  backdrop-filter: blur(20px);
}

.st-time { font-size:15px; font-weight:700; color:var(--text); letter-spacing:0.2px; }

.st-right { display:flex; align-items:center; gap:7px; }
.st-right svg { width:15px; height:15px; }
.st-batt { display:flex; align-items:center; gap:2px; }
.st-batt-body {
  width:24px; height:12px; border:1.5px solid rgba(255,255,255,0.6);
  border-radius:3px; padding:1.5px; display:flex; align-items:center;
}
.st-batt-fill { height:100%; width:80%; background:#fff; border-radius:1.5px; }
.st-batt-tip {
  width:2px; height:5px; background:rgba(255,255,255,0.5); border-radius:0 1px 1px 0; margin-left:1px;
}

/* ===========================
   TOP NAV
=========================== */
.top-nav {
  width: var(--w);
  display:flex; align-items:center; justify-content:space-between;
  padding: 4px 20px 14px;
  position:sticky; top:42px; z-index:60;
  background: var(--bg);
}

.tn-left { display:flex; align-items:center; gap:10px; }

.tn-avatar {
  width:36px; height:36px; border-radius:11px;
  background: linear-gradient(135deg, #1A2E40 0%, #0D1F2D 100%);
  border: 1px solid rgba(5,209,122,0.3);
  display:flex; align-items:center; justify-content:center;
  font-size:16px; font-weight:800; color:var(--green);
  flex-shrink:0;
}

.tn-name { font-size:15px; font-weight:700; color:var(--text); }
.tn-online {
  font-size:10px; font-weight:600; color:var(--green);
  display:flex; align-items:center; gap:4px; margin-top:1px;
}
.tn-online::before {
  content:''; width:5px; height:5px; border-radius:50%;
  background:var(--green);
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot {
  0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(5,209,122,0.5); }
  50%      { opacity:.8; box-shadow: 0 0 0 4px rgba(5,209,122,0); }
}

.tn-right { display:flex; gap:8px; }

.tn-btn {
  width:36px; height:36px; border-radius:11px;
  background: var(--surface2); border: 1px solid var(--border);
  display:flex; align-items:center; justify-content:center;
  font-size:16px; cursor:pointer; position:relative;
}

.tn-badge {
  position:absolute; top:5px; right:5px;
  width:7px; height:7px; border-radius:50%;
  background:var(--red); border:1.5px solid var(--bg);
}

/* ===========================
   CONTENT
=========================== */
.content {
  width: var(--w);
  padding: 0 16px 140px;
  display:flex; flex-direction:column; gap:12px;
}

/* ===========================
   SALDO HERO - GLASSMORPHISM
=========================== */
.saldo-hero {
  border-radius: var(--r);
  position:relative; overflow:hidden;
  padding: 1px; /* border trick */
  background: linear-gradient(135deg, rgba(5,209,122,0.3) 0%, rgba(5,209,122,0.05) 50%, rgba(100,60,200,0.15) 100%);
}

.saldo-hero-inner {
  background: linear-gradient(160deg, #0A1D13 0%, #0C1920 40%, #0A0A14 100%);
  border-radius: calc(var(--r) - 1px);
  padding: 26px 22px 20px;
  position:relative; overflow:hidden;
}

/* ambient glow top-right */
.saldo-hero-inner::before {
  content:'';
  position:absolute; top:-80px; right:-60px;
  width:260px; height:260px;
  background: radial-gradient(circle, rgba(5,209,122,0.14) 0%, transparent 65%);
  pointer-events:none;
}

/* ambient glow bottom-left */
.saldo-hero-inner::after {
  content:'';
  position:absolute; bottom:-60px; left:-40px;
  width:200px; height:200px;
  background: radial-gradient(circle, rgba(100,60,200,0.1) 0%, transparent 65%);
  pointer-events:none;
}

.sh-top {
  display:flex; justify-content:space-between; align-items:flex-start;
  margin-bottom:4px; position:relative; z-index:1;
}

.sh-label {
  font-size:11px; font-weight:600; letter-spacing:1.2px;
  text-transform:uppercase; color:rgba(5,209,122,0.65);
}

.sh-eye {
  font-size:18px; cursor:pointer; opacity:0.5;
}

.sh-value {
  font-size:46px; font-weight:900; color:var(--text);
  letter-spacing:-2px; line-height:1;
  font-variant-numeric: tabular-nums;
  margin-bottom:6px; position:relative; z-index:1;
}

.sh-value .sh-curr {
  font-size:18px; font-weight:600; color:var(--text2);
  vertical-align:super; letter-spacing:0; margin-right:3px;
}

.sh-value .sh-cents {
  font-size:24px; font-weight:700; color:var(--text2); letter-spacing:0;
}

.sh-change {
  display:inline-flex; align-items:center; gap:5px;
  background: rgba(5,209,122,0.1);
  border: 1px solid rgba(5,209,122,0.2);
  color:var(--green); font-size:12px; font-weight:700;
  padding:4px 12px; border-radius:100px;
  margin-bottom:22px; position:relative; z-index:1;
  opacity:0; transition: opacity 0.4s;
}

.sh-change.show { opacity:1; }

/* action row */
.sh-actions { display:grid; grid-template-columns:1fr 1fr; gap:10px; position:relative; z-index:1; }

.sh-action {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius:14px; padding:13px 14px;
  display:flex; align-items:center; gap:10px;
  cursor:pointer; transition: background 0.2s, border-color 0.2s;
}

.sh-action:hover { background: rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.14); }

.sh-action.primary {
  background: rgba(5,209,122,0.1);
  border-color: rgba(5,209,122,0.25);
}

.sh-action.primary:hover { background: rgba(5,209,122,0.16); }

.sh-action-icon {
  width:32px; height:32px; border-radius:9px; flex-shrink:0;
  display:flex; align-items:center; justify-content:center; font-size:15px;
}

.sh-action.primary .sh-action-icon { background: rgba(5,209,122,0.15); }
.sh-action:not(.primary) .sh-action-icon { background: rgba(255,255,255,0.06); }

.sh-action-text {}
.sh-action-label { font-size:13px; font-weight:700; color:var(--text); }
.sh-action-sub   { font-size:10px; color:var(--text3); margin-top:1px; }

/* ===========================
   MINI STATS ROW
=========================== */
.stats-row {
  display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;
}

.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius:16px; padding:14px 14px 12px;
  display:flex; flex-direction:column; gap:4px;
}

.stat-icon { font-size:18px; margin-bottom:2px; }
.stat-val  { font-size:17px; font-weight:800; color:var(--text); letter-spacing:-0.5px; }
.stat-lbl  { font-size:10px; color:var(--text3); font-weight:500; text-transform:uppercase; letter-spacing:0.5px; }
.stat-val.green  { color:var(--green); }
.stat-val.amber  { color:var(--amber); }

/* ===========================
   SECTION HEADER
=========================== */
.section-hd {
  display:flex; justify-content:space-between; align-items:center;
  padding: 4px 2px;
}

.section-hd-title { font-size:13px; font-weight:700; color:var(--text2); text-transform:uppercase; letter-spacing:0.8px; }
.section-hd-badge {
  font-size:11px; font-weight:700; color:var(--green);
  background: var(--green-bg); border:1px solid var(--green-bd);
  padding:2px 10px; border-radius:100px;
}

/* ===========================
   NOTIFICATION CARDS
=========================== */
.notif-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius:18px; padding:15px 15px 15px 15px;
  display:flex; align-items:flex-start; gap:12px;
  opacity:0; transform:translateY(10px) scale(0.99);
  transition: opacity 0.38s ease, transform 0.38s ease;
  position:relative; overflow:hidden;
}

.notif-card.in { opacity:1; transform:translateY(0) scale(1); }

/* left accent line */
.notif-card::before {
  content:''; position:absolute; left:0; top:12px; bottom:12px;
  width:3px; border-radius:0 3px 3px 0;
  background: var(--accent-color, transparent);
}

.notif-card.c-green  { --accent-color: var(--green); border-color: rgba(5,209,122,0.15); }
.notif-card.c-amber  { --accent-color: var(--amber); border-color: rgba(255,170,0,0.15); }
.notif-card.c-purple { --accent-color: var(--purple); border-color: rgba(167,139,250,0.15); }
.notif-card.c-red    { --accent-color: var(--red);   border-color: rgba(255,59,59,0.18);
                        background: linear-gradient(135deg, #150808, var(--surface)); }

.notif-icon {
  width:40px; height:40px; border-radius:12px; flex-shrink:0;
  display:flex; align-items:center; justify-content:center; font-size:18px;
}

.notif-icon.c-green  { background: rgba(5,209,122,0.1); }
.notif-icon.c-amber  { background: rgba(255,170,0,0.1); }
.notif-icon.c-purple { background: rgba(167,139,250,0.1); }
.notif-icon.c-red    { background: rgba(255,59,59,0.1); }

.notif-body-wrap { flex:1; min-width:0; }

.notif-meta {
  display:flex; justify-content:space-between; align-items:center;
  margin-bottom:3px;
}

.notif-source { font-size:10.5px; font-weight:700; color:var(--text3); text-transform:uppercase; letter-spacing:0.7px; }
.notif-ts     { font-size:10.5px; color:var(--text3); }

.notif-title { font-size:14px; font-weight:700; color:var(--text); line-height:1.3; margin-bottom:3px; }
.notif-desc  { font-size:13px; color:var(--text2); line-height:1.5; }
.notif-desc b { color:var(--text); font-weight:600; }
.notif-desc .hi-green  { color:var(--green); font-weight:700; }
.notif-desc .hi-amber  { color:var(--amber); font-weight:700; }
.notif-desc .hi-red    { color:var(--red); font-weight:700; }

.notif-unread {
  width:7px; height:7px; border-radius:50%; flex-shrink:0; margin-top:6px;
}
.notif-unread.green  { background:var(--green); }
.notif-unread.amber  { background:var(--amber); }
.notif-unread.dimmed { background:var(--text3); }

/* ===========================
   UNLOCK GATE
=========================== */
.unlock-gate {
  border-radius: var(--r);
  position:relative; overflow:hidden;
  opacity:0; transform:translateY(16px);
  transition: opacity 0.55s ease, transform 0.55s ease;
  padding: 1px;
  background: linear-gradient(135deg, rgba(5,209,122,0.35), rgba(5,209,122,0.05) 50%, rgba(255,170,0,0.2));
}

.unlock-gate.in { opacity:1; transform:translateY(0); }

.ug-inner {
  background: linear-gradient(160deg, #0B1E14 0%, #0E0E18 60%, #0A0A14 100%);
  border-radius: calc(var(--r) - 1px);
  padding: 26px 20px 22px;
  position:relative; overflow:hidden;
  text-align:center;
}

/* ambient glow */
.ug-inner::before {
  content:'';
  position:absolute; top:-80px; left:50%; transform:translateX(-50%);
  width:340px; height:200px;
  background: radial-gradient(ellipse, rgba(5,209,122,0.1) 0%, transparent 70%);
  pointer-events:none;
}

/* progress bar */
.ug-prog-wrap {
  background: var(--surface3);
  border-radius:100px; height:6px;
  overflow:hidden; margin-bottom:5px;
}

.ug-prog-fill {
  height:100%; width:0%; border-radius:100px;
  background: linear-gradient(90deg, var(--green), var(--green2));
  transition: width 1.4s cubic-bezier(0.4,0,0.2,1);
  position:relative;
}

.ug-prog-fill::after {
  content:''; position:absolute; right:0; inset-block:0; width:28px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5));
  animation: shimmer 1.6s infinite;
}

@keyframes shimmer { 0%{opacity:0;} 50%{opacity:1;} 100%{opacity:0;} }

.ug-prog-labels {
  display:flex; justify-content:space-between;
  font-size:10.5px; margin-bottom:24px;
  color:var(--text3);
}

.ug-prog-labels .locked-lbl { color:var(--amber); font-weight:700; }

/* lock icon */
.ug-lock {
  width:54px; height:54px; border-radius:16px;
  background: linear-gradient(135deg, #1A1400, #110E00);
  border: 1px solid rgba(255,170,0,0.25);
  display:flex; align-items:center; justify-content:center;
  font-size:24px; margin:0 auto 16px;
  box-shadow: 0 4px 20px rgba(255,170,0,0.1);
}

.ug-title {
  font-size:20px; font-weight:800; color:var(--text);
  line-height:1.25; margin-bottom:10px;
  letter-spacing:-0.3px;
}

.ug-title span { color:var(--green); }

.ug-desc {
  font-size:14px; color:var(--text2); line-height:1.7;
  margin-bottom:22px; max-width:320px; margin-left:auto; margin-right:auto;
}

.ug-desc b { color:var(--text); font-weight:600; }

/* feature grid */
.ug-features {
  display:grid; grid-template-columns:1fr 1fr; gap:8px;
  margin-bottom:24px; text-align:left;
}

.ug-feat {
  background: var(--surface3);
  border: 1px solid var(--border);
  border-radius:12px; padding:11px 12px;
  display:flex; align-items:center; gap:8px;
  font-size:12.5px; font-weight:600;
}

.ug-feat.on  { color:var(--green); border-color: rgba(5,209,122,0.2); background:rgba(5,209,122,0.06); }
.ug-feat.off { color:var(--text3); }

.ug-feat-dot {
  width:7px; height:7px; border-radius:50%; flex-shrink:0;
}
.ug-feat.on  .ug-feat-dot { background:var(--green); }
.ug-feat.off .ug-feat-dot { background:var(--text3); }

/* divider */
.ug-divider {
  height:1px; background:var(--border); margin:20px 0;
}

/* price */
.ug-price-wrap { margin-bottom:4px; }

.ug-old-price {
  font-size:14px; color:var(--text3); text-decoration:line-through;
  margin-bottom:2px;
}

.ug-price-row { display:flex; align-items:baseline; justify-content:center; gap:4px; }

.ug-price-curr { font-size:18px; font-weight:700; color:var(--text2); }

.ug-price-val {
  font-size:52px; font-weight:900; color:var(--text);
  letter-spacing:-2px; line-height:1;
}

.ug-price-note { font-size:12px; color:var(--text3); margin-top:4px; margin-bottom:22px; }

/* CTA */
.btn-unlock {
  display:block; width:100%;
  background: linear-gradient(135deg, #05D17A, #00B865);
  color:#000;
  font-family:'Inter',sans-serif;
  font-size:15px; font-weight:800;
  padding:19px 20px;
  border-radius:15px; border:none; cursor:pointer;
  text-transform:uppercase; letter-spacing:0.8px;
  text-decoration:none; text-align:center; line-height:1.3;
  position:relative; overflow:hidden;
  transition: transform 0.15s, opacity 0.15s;
}

.btn-unlock::before {
  content:'';
  position:absolute; inset:0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
}

@keyframes unlock-pulse {
  0%,100% { box-shadow: 0 4px 20px rgba(5,209,122,0.3), 0 0 0 0 rgba(5,209,122,0.25); }
  50%      { box-shadow: 0 4px 30px rgba(5,209,122,0.5), 0 0 0 8px rgba(5,209,122,0); }
}

.btn-unlock { animation: unlock-pulse 2.2s ease infinite; }
.btn-unlock:hover { transform:translateY(-1px); opacity:0.93; }
.btn-unlock:active { transform:scale(0.98); }

.btn-unlock small {
  display:block; font-size:11px; font-weight:500;
  text-transform:none; letter-spacing:0; opacity:0.65; margin-top:4px;
}

/* timer */
.ug-timer {
  display:flex; align-items:center; justify-content:center; gap:6px;
  font-size:12px; color:var(--text3); margin-top:14px;
}

.ug-timer-val {
  color:var(--red); font-weight:800; font-size:14px;
  font-variant-numeric:tabular-nums;
}

/* security */
.ug-security {
  display:flex; justify-content:center; gap:18px;
  flex-wrap:wrap; margin-top:14px;
}

.ug-sec-item { font-size:11px; color:var(--text3); display:flex; align-items:center; gap:4px; }

/* skip */
.skip-btn {
  display:none; margin-top:18px;
  font-size:11px; color:var(--text3); cursor:pointer;
  background:none; border:none; font-family:'Inter',sans-serif;
  text-decoration:underline; text-underline-offset:3px;
  transition:color 0.2s;
}

.skip-btn:hover { color:var(--text2); }
`

export default function RecompensasApp() {
  useEffect(() => {
    document.title = 'App Recompensas'

    const timeouts: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []
    let animFrame = 0

    // -- CLOCK --
    const clockEl = document.getElementById('clockEl')
    const tickClock = () => {
      if (!clockEl) return
      const d = new Date()
      clockEl.textContent =
        String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0')
    }
    tickClock()
    intervals.push(setInterval(tickClock, 30000))

    // -- SALDO ANIMATION --
    let currentSaldo = 0

    function animateSaldo(target: number, duration: number) {
      const startVal = currentSaldo
      const start = performance.now()
      const intEl = document.getElementById('saldoInt')!
      const ctEl = document.getElementById('saldoCents')!
      const chEl = document.getElementById('shChange')!
      const chVal = document.getElementById('shChangeVal')!

      chEl.classList.add('show')

      cancelAnimationFrame(animFrame)

      function tick(now: number) {
        const t = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - t, 3)
        const val = startVal + (target - startVal) * ease
        currentSaldo = val

        const full = val.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        const parts = full.split(',')
        intEl.textContent = parts[0]
        ctEl.textContent = ',' + (parts[1] || '00')
        chVal.textContent =
          '+R$ ' +
          val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) +
          ' hoje'

        if (t < 1) animFrame = requestAnimationFrame(tick)
      }
      animFrame = requestAnimationFrame(tick)
    }

    // -- COUNTER STATS --
    function animateCounter(id: string, target: number, duration: number) {
      const el = document.getElementById(id)
      if (!el) return
      const start = performance.now()
      function tick(now: number) {
        const t = Math.min((now - start) / duration, 1)
        el!.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 2))))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    // NOTIF SEQUENCE
    type Step = {
      id: string
      delay: number
      saldo?: number
      statTarefas?: number
      statIndicados?: number
    }
    const seq: Step[] = [
      { id: 'n1', delay: 600 },
      { id: 'n2', delay: 1500, saldo: 12.4, statTarefas: 1 },
      { id: 'n3', delay: 2600 },
      { id: 'n4', delay: 3800 },
      { id: 'n5', delay: 5000, saldo: 1835.0, statTarefas: 7, statIndicados: 0 },
    ]

    seq.forEach((s) => {
      timeouts.push(
        setTimeout(() => {
          document.getElementById(s.id)?.classList.add('in')
          if (s.saldo) animateSaldo(s.saldo, s.id === 'n5' ? 1400 : 900)
          if (s.statTarefas) animateCounter('statTarefas', s.statTarefas, 600)
          if (s.statIndicados !== undefined) animateCounter('statIndicados', s.statIndicados, 400)
        }, s.delay)
      )
    })

    // TIMER
    let timerStarted = false
    function startTimer(secs: number) {
      if (timerStarted) return
      timerStarted = true
      const el = document.getElementById('timerEl')
      const iv = setInterval(() => {
        if (secs <= 0) {
          clearInterval(iv)
          if (el) el.textContent = '00:00'
          return
        }
        secs--
        if (el)
          el.textContent =
            String(Math.floor(secs / 60)).padStart(2, '0') +
            ':' +
            String(secs % 60).padStart(2, '0')
      }, 1000)
      intervals.push(iv)
    }

    // Navegacao interna do funil -> rota Next equivalente, preservando query params
    function goToBasicFlow() {
      const target = new URL('/confirm/index.html', window.location.href)
      target.search = window.location.search
      window.location.href = target.toString()
    }

    // SHOW GATE
    timeouts.push(
      setTimeout(() => {
        const gate = document.getElementById('unlockGate')
        if (!gate) return
        gate.classList.add('in')
        timeouts.push(
          setTimeout(() => {
            const p = document.getElementById('ugProg')
            if (p) p.style.width = '45%'
          }, 200)
        )
        timeouts.push(
          setTimeout(() => {
            gate.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 400)
        )
        startTimer(14 * 60 + 59)
        timeouts.push(
          setTimeout(() => {
            const sb = document.getElementById('skipBtn')
            if (sb) sb.style.display = 'block'
          }, 15000)
        )
      }, 6400)
    )

    // SACAR BUTTON
    const btnSacar = document.getElementById('btnSacar')
    const onSacar = () => {
      const gate = document.getElementById('unlockGate')
      if (!gate) return
      if (gate.classList.contains('in')) {
        gate.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        gate.classList.add('in')
        timeouts.push(
          setTimeout(() => {
            const p = document.getElementById('ugProg')
            if (p) p.style.width = '45%'
          }, 100)
        )
        startTimer(14 * 60 + 59)
        timeouts.push(
          setTimeout(() => {
            gate.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 200)
        )
        timeouts.push(
          setTimeout(() => {
            const sb = document.getElementById('skipBtn')
            if (sb) sb.style.display = 'block'
          }, 15000)
        )
      }
    }
    btnSacar?.addEventListener('click', onSacar)

    // SKIP BUTTON (original usava onclick="goToBasicFlow()")
    const skipBtn = document.getElementById('skipBtn')
    skipBtn?.addEventListener('click', goToBasicFlow)

    return () => {
      timeouts.forEach(clearTimeout)
      intervals.forEach(clearInterval)
      cancelAnimationFrame(animFrame)
      btnSacar?.removeEventListener('click', onSacar)
      skipBtn?.removeEventListener('click', goToBasicFlow)
    }
  }, [])

  return (
    <>
      {/* ==== HEAD: titulo, favicons, fontes ==== */}
      <title>App Recompensas</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/cropped-1384060-192x192.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* ==== CSS inline preservado byte-a-byte ==== */}
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      {/* ==== UTMIFY: pixel inline (preservado) ==== */}
      <Script id="utmify-pixel" strategy="afterInteractive">
        {`
  window.pixelId = "6a22e9983c66ac1b9c986167";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
`}
      </Script>

      {/* ==== UTMIFY: UTMs latest.js (preservado, com data-attrs, async/defer) ==== */}
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        async
        defer
        strategy="afterInteractive"
      />

      {/* STATUS BAR */}
      <div className="status-bar">
        <span className="st-time" id="clockEl">
          09:41
        </span>
        <div className="st-right">
          {/* signal bars */}
          <svg viewBox="0 0 17 12" fill="none">
            <rect x="0" y="7" width="3" height="5" rx="1" fill="white" />
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="1" fill="white" />
            <rect x="9" y="2" width="3" height="10" rx="1" fill="white" />
            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="white" opacity=".3" />
          </svg>
          {/* wifi */}
          <svg viewBox="0 0 16 12" fill="none">
            <path
              d="M0.5 4C4 0.5 10 0.5 13.5 4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity=".4"
            />
            <path
              d="M2.5 6.5C4.5 4.5 9.5 4.5 11.5 6.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 9C5.8 8.2 8.2 8.2 9 9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="7" cy="11.5" r="1" fill="white" />
          </svg>
          {/* battery */}
          <div className="st-batt">
            <div className="st-batt-body">
              <div className="st-batt-fill"></div>
            </div>
            <div className="st-batt-tip"></div>
          </div>
        </div>
      </div>

      {/* TOP NAV */}
      <div className="top-nav">
        <div className="tn-left">
          <div className="tn-avatar">R</div>
          <div>
            <div className="tn-name">App Recompensas</div>
            <div className="tn-online">Online agora</div>
          </div>
        </div>
        <div className="tn-right">
          <div className="tn-btn">⚙️</div>
          <div className="tn-btn">
            🔔
            <div className="tn-badge"></div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        {/* SALDO HERO */}
        <div className="saldo-hero">
          <div className="saldo-hero-inner">
            <div className="sh-top">
              <span className="sh-label">Saldo disponível</span>
              <span className="sh-eye">👁</span>
            </div>
            <div className="sh-value">
              <span className="sh-curr">R$</span>
              <span id="saldoInt">0</span>
              <span className="sh-cents" id="saldoCents">
                ,00
              </span>
            </div>
            <div className="sh-change" id="shChange">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 8V2M5 2L2 5M5 2L8 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span id="shChangeVal">+R$ 0,00 hoje</span>
            </div>
            <div className="sh-actions">
              <div className="sh-action primary" id="btnSacar">
                <div className="sh-action-icon">💸</div>
                <div className="sh-action-text">
                  <div className="sh-action-label">Sacar</div>
                  <div className="sh-action-sub">Disponível</div>
                </div>
              </div>
              <div className="sh-action">
                <div className="sh-action-icon">📊</div>
                <div className="sh-action-text">
                  <div className="sh-action-label">Histórico</div>
                  <div className="sh-action-sub">Ver tudo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MINI STATS */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-val green" id="statTarefas">
              0
            </div>
            <div className="stat-lbl">Tarefas</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-val" id="statIndicados">
              0
            </div>
            <div className="stat-lbl">Indicados</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏅</div>
            <div className="stat-val amber">Básico</div>
            <div className="stat-lbl">Nível</div>
          </div>
        </div>

        {/* SECTION HEADER */}
        <div className="section-hd">
          <span className="section-hd-title">Atividade</span>
          <span className="section-hd-badge" id="notifBadge">
            5 novas
          </span>
        </div>

        {/* NOTIF 1 */}
        <div className="notif-card c-green" id="n1">
          <div className="notif-icon c-green">✅</div>
          <div className="notif-body-wrap">
            <div className="notif-meta">
              <span className="notif-source">App Recompensas</span>
              <span className="notif-ts">agora</span>
            </div>
            <div className="notif-title">Acesso ativado com sucesso</div>
            <div className="notif-desc">
              Seu cadastro foi confirmado. <b>Bem-vindo(a) à plataforma.</b>
            </div>
          </div>
          <div className="notif-unread green"></div>
        </div>

        {/* NOTIF 2 */}
        <div className="notif-card c-green" id="n2">
          <div className="notif-icon c-green">💰</div>
          <div className="notif-body-wrap">
            <div className="notif-meta">
              <span className="notif-source">Recompensas</span>
              <span className="notif-ts">1 min atrás</span>
            </div>
            <div className="notif-title">Primeira tarefa liberada</div>
            <div className="notif-desc">
              Você já pode começar a ganhar. Recompensa inicial:{' '}
              <span className="hi-green">+R$ 12,40</span>
            </div>
          </div>
          <div className="notif-unread green"></div>
        </div>

        {/* NOTIF 3 */}
        <div className="notif-card c-amber" id="n3">
          <div className="notif-icon c-amber">⚡</div>
          <div className="notif-body-wrap">
            <div className="notif-meta">
              <span className="notif-source">Comparativo</span>
              <span className="notif-ts">2 min atrás</span>
            </div>
            <div className="notif-title">Outros usuários ganham mais</div>
            <div className="notif-desc">
              Membros avançados recebem em média{' '}
              <span className="hi-amber">7× mais por tarefa</span> do que o nível básico.
            </div>
          </div>
          <div className="notif-unread amber"></div>
        </div>

        {/* NOTIF 4 */}
        <div className="notif-card c-purple" id="n4">
          <div className="notif-icon c-purple">🔗</div>
          <div className="notif-body-wrap">
            <div className="notif-meta">
              <span className="notif-source">Rede</span>
              <span className="notif-ts">3 min atrás</span>
            </div>
            <div className="notif-title">Ganhos em cascata detectados</div>
            <div className="notif-desc">
              Membros do <b>Círculo Fechado</b> estão gerando renda sobre indicações.{' '}
              <span className="hi-amber">Seu link ainda não está ativo.</span>
            </div>
          </div>
          <div className="notif-unread dimmed"></div>
        </div>

        {/* NOTIF 5 */}
        <div className="notif-card c-red" id="n5">
          <div className="notif-icon c-red">🔒</div>
          <div className="notif-body-wrap">
            <div className="notif-meta">
              <span className="notif-source">Sistema</span>
              <span className="notif-ts">agora</span>
            </div>
            <div className="notif-title">Nível avançado — acesso bloqueado</div>
            <div className="notif-desc">
              Você está no nível básico.{' '}
              <span className="hi-red">
                R$ 1.835,00 em ganhos potenciais estão bloqueados.
              </span>{' '}
              Desbloqueie o Círculo Fechado.
            </div>
          </div>
          <div className="notif-unread amber"></div>
        </div>

        {/* UNLOCK GATE */}
        <div className="unlock-gate" id="unlockGate">
          <div className="ug-inner">
            <div className="ug-prog-wrap">
              <div className="ug-prog-fill" id="ugProg"></div>
            </div>
            <div className="ug-prog-labels">
              <span>Nível básico · ativo</span>
              <span className="locked-lbl">🔒 Nível avançado</span>
            </div>

            <div className="ug-lock">🔒</div>

            <div className="ug-title">
              Desbloqueie o<br />
              <span>Círculo Fechado</span>
            </div>

            <p className="ug-desc">
              Você já tem o acesso. Agora ative o nível que faz os outros ganharem{' '}
              <b>até 7× mais</b> — rede de indicação, 4 fontes extras e proteção total dos seus
              ganhos.
            </p>

            <div className="ug-features">
              <div className="ug-feat on">
                <div className="ug-feat-dot"></div>Tarefas básicas
              </div>
              <div className="ug-feat on">
                <div className="ug-feat-dot"></div>Saque disponível
              </div>
              <div className="ug-feat off">
                <div className="ug-feat-dot"></div>Rede de indicação
              </div>
              <div className="ug-feat off">
                <div className="ug-feat-dot"></div>Ganhos em cascata
              </div>
              <div className="ug-feat off">
                <div className="ug-feat-dot"></div>4 fontes extras
              </div>
              <div className="ug-feat off">
                <div className="ug-feat-dot"></div>Nível avançado
              </div>
            </div>

            <div className="ug-divider"></div>

            <div className="ug-price-wrap">
              <div className="ug-old-price">De R$ 197,00</div>
              <div className="ug-price-row">
                <span className="ug-price-curr">R$</span>
                <span className="ug-price-val">47</span>
              </div>
              <div className="ug-price-note">pagamento único · acesso permanente</div>
            </div>

            <a href="https://go.perfectpay.com.br/PPU38CQCRRS" className="btn-unlock">
              DESBLOQUEAR AGORA
              <small>Acesso imediato · Garantia de 7 dias</small>
            </a>

            <div className="ug-timer">
              Oferta expira em:{' '}
              <span className="ug-timer-val" id="timerEl">
                14:59
              </span>
            </div>

            <div className="ug-security">
              <span className="ug-sec-item">Compra segura</span>
              <span className="ug-sec-item">Acesso na hora</span>
              <span className="ug-sec-item">Garantia 7 dias</span>
            </div>

            <button className="skip-btn" id="skipBtn">
              Não, prefiro ficar no nível básico
            </button>
          </div>
        </div>
      </div>
      {/* /content */}
    </>
  )
}
