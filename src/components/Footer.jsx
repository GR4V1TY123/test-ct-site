import { useState, useRef, useEffect } from 'react';

const FOOTER_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Comic+Neue:wght@700&display=swap');

:root {
  --ft-bg: #0a0a0a;
  --ft-orange: #ff8c00;
  --ft-yellow: #ffe000;
  --ft-red: #e8001d;
  --ft-cyan: #00d4ff;
  --ft-white: #f5f0e8;
  --ft-ink: #0a0806;
  --ft-max: 1280px;
}

.ft-root {
  position: relative;
  background: var(--ft-bg);
  overflow: hidden;
  cursor: crosshair;
  user-select: none;
  font-family: 'Bebas Neue', cursive;
  width: 100%;
  box-sizing: border-box;
}

.ft-scanlines {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.18) 4px, rgba(0,0,0,0.18) 5px);
  pointer-events: none; z-index: 1;
}

.ft-corner {
  position: absolute; width: 60px; height: 60px;
  border-color: var(--ft-orange); border-style: solid; opacity: 0.8; z-index: 3;
}
.ft-corner--tl { top:14px; left:14px; border-width:4px 0 0 4px; box-shadow:-2px -2px 0 var(--ft-ink); }
.ft-corner--tr { top:14px; right:14px; border-width:4px 4px 0 0; box-shadow:2px -2px 0 var(--ft-ink); }

.ft-ghost {
  position: absolute;
  font-family: 'Bangers', cursive;
  font-size: clamp(4rem,9vw,9rem);
  letter-spacing: 8px;
  color: var(--ft-orange);
  opacity: 0.04;
  pointer-events: none; z-index: 0;
  -webkit-text-stroke: 2px rgba(255,140,0,0.1);
}
.ft-ghost--1 { top:4%; left:-1%; animation: ftGhost1 12s ease-in-out infinite; }
.ft-ghost--2 { top:38%; right:-1%; animation: ftGhost2 14s ease-in-out infinite; }
.ft-ghost--3 { bottom:10%; left:32%; animation: ftGhost3 16s ease-in-out infinite; }
@keyframes ftGhost1 { 0%,100%{transform:translateY(0) rotate(-12deg);opacity:0.04} 50%{transform:translateY(-20px) rotate(-8deg);opacity:0.08} }
@keyframes ftGhost2 { 0%,100%{transform:translateY(0) rotate(8deg);opacity:0.04} 50%{transform:translateY(-16px) rotate(12deg);opacity:0.08} }
@keyframes ftGhost3 { 0%,100%{transform:translateY(0) rotate(-3deg);opacity:0.03} 50%{transform:translateY(-14px) rotate(2deg);opacity:0.07} }

.ft-speech-bubble {
  position: absolute;
  background: var(--ft-yellow); border: 3px solid var(--ft-ink);
  border-radius: 18px; padding: 6px 14px;
  font-family: 'Bangers', cursive; font-size: 0.9rem; letter-spacing: 2px;
  color: var(--ft-ink); pointer-events: none; z-index: 6;
  white-space: nowrap; box-shadow: 3px 3px 0 var(--ft-ink);
}
.ft-speech-bubble::after {
  content:''; position:absolute; bottom:-14px; left:20px;
  width:0; height:0;
  border-left:8px solid transparent; border-right:5px solid transparent;
  border-top:14px solid var(--ft-ink);
}
.ft-speech-bubble::before {
  content:''; position:absolute; bottom:-10px; left:21px;
  width:0; height:0;
  border-left:7px solid transparent; border-right:4px solid transparent;
  border-top:12px solid var(--ft-yellow); z-index:1;
}
.ft-bubble-1 { top:22px; right:120px; animation: ftBubbleBob 5s ease-in-out infinite; }
@keyframes ftBubbleBob { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-10px) rotate(2deg)} }

.ft-starburst { position:absolute; pointer-events:none; z-index:2; animation: ftStarSpin 20s linear infinite; }
.ft-starburst svg { width:70px; height:70px; opacity:0.1; }
.ft-starburst--1 { bottom:30px; right:30px; }
.ft-starburst--2 { top:40px; left:50%; animation-direction:reverse; }
@keyframes ftStarSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

.ft-burst {
  position:absolute;
  font-family:'Bangers',cursive; font-size:2.4rem; letter-spacing:2px;
  color:var(--ft-yellow);
  text-shadow:-2px -2px 0 var(--ft-ink),2px -2px 0 var(--ft-ink),-2px 2px 0 var(--ft-ink),2px 2px 0 var(--ft-ink),4px 4px 0 var(--ft-red);
  pointer-events:none; z-index:200; white-space:nowrap;
  transform:translate(-50%,-50%) scale(0) rotate(-20deg);
  animation: ftBurst 0.85s cubic-bezier(0.68,-0.55,0.265,1.55) forwards;
}
@keyframes ftBurst {
  0%{transform:translate(-50%,-50%) scale(0) rotate(-20deg);opacity:1}
  50%{transform:translate(-50%,-100%) scale(1.8) rotate(8deg);opacity:1}
  100%{transform:translate(-50%,-160%) scale(0.9) rotate(0deg);opacity:0}
}

.ft-inner {
  max-width:var(--ft-max); margin:0 auto;
  padding:5rem 2.5rem 3.5rem;
  display:grid; grid-template-columns:2fr 1fr 1fr 1.5fr;
  column-gap:3.5rem; position:relative; z-index:5;
}

.ft-brand { display:flex; flex-direction:column; gap:1.6rem; padding-right:2rem; min-width:0; }

/* ── Logo: overflow visible so badge glow isn't clipped,
         but the logo row itself doesn't grow ── */
.ft-logo {
  display:flex; align-items:center; gap:1.1rem;
  overflow: visible;
}

/* Badge animates on its own GPU layer — scale/rotate stays within its
   reserved 76×76 space because flex-shrink:0 + fixed size hold it */
.ft-logo-badge {
  position:relative;
  width:76px; height:76px; flex-shrink:0;
  background:#211f1e;
  border:4px solid var(--ft-ink); border-radius:14px;
  display:flex; align-items:center; justify-content:center;
  box-shadow:4px 4px 0 var(--ft-ink),0 0 0 2px var(--ft-orange),8px 8px 0 var(--ft-ink);
  animation: ftBadgePulse 3.5s ease-in-out infinite;
  will-change: transform;
  transform-origin: center center;
}
.ft-logo-badge::before {
  content:'★'; position:absolute; top:-12px; right:-12px;
  font-size:1.2rem; color:var(--ft-yellow); text-shadow:1px 1px 0 var(--ft-ink);
  animation: ftStarPop 2s ease-in-out infinite; z-index:10;
}
@keyframes ftStarPop { 0%,100%{transform:scale(1) rotate(0deg)} 50%{transform:scale(1.3) rotate(20deg)} }


.ft-logo-ct {
  font-family:'Bangers',cursive; font-size:2.4rem; color:var(--ft-white); letter-spacing:2px;
  text-shadow:-1px -1px 0 var(--ft-ink),1px -1px 0 var(--ft-ink),-1px 1px 0 var(--ft-ink),1px 1px 0 var(--ft-ink),3px 3px 0 var(--ft-ink);
  position:relative; z-index:1;
}

/* Badge pulse: rotate+scale but since the element has a fixed size in the flex
   row, the layout box doesn't change — only the visual paint moves */
@keyframes ftBadgePulse {
  0%,100%{
    transform:rotate(-3deg);
    box-shadow:4px 4px 0 var(--ft-ink),0 0 0 2px var(--ft-orange),8px 8px 0 var(--ft-ink);
  }
  50%{
    transform:rotate(2deg) scale(1.05);
    box-shadow:4px 4px 0 var(--ft-ink),0 0 0 3px var(--ft-orange),8px 8px 0 var(--ft-ink),0 0 30px rgba(255,140,0,0.4);
  }
}

.ft-logo-words {
  display:flex; flex-direction:column; gap:0; line-height:1; min-width:0;
}
.ft-logo-sub {
  font-family:'Bebas Neue',cursive; font-size:0.7rem; letter-spacing:6px;
  color:rgba(255,255,255,0.4); text-transform:uppercase;
}

/* CODETANTRA text: animates scale on its own layer, origin pinned left
   so it "breathes" rightward and never pushes the badge */
.ft-logo-main {
  font-family:'Bangers',cursive; font-size:2.3rem; letter-spacing:3px;
  color:var(--ft-yellow);
  text-shadow:-2px -2px 0 var(--ft-ink),2px -2px 0 var(--ft-ink),
              -2px  2px 0 var(--ft-ink),2px  2px 0 var(--ft-ink),
               4px  4px 0 var(--ft-orange);
  display:inline-block;
  transform-origin: left center;
  will-change: transform;
  animation: ftTextPulse 3s ease-in-out infinite;
}
@keyframes ftTextPulse {
  0%,100% { transform: scaleX(1)    scaleY(1);    text-shadow:-2px -2px 0 var(--ft-ink),2px -2px 0 var(--ft-ink),-2px 2px 0 var(--ft-ink),2px 2px 0 var(--ft-ink),4px 4px 0 var(--ft-orange); }
  50%      { transform: scaleX(1.04) scaleY(1.06); text-shadow:-2px -2px 0 var(--ft-ink),2px -2px 0 var(--ft-ink),-2px 2px 0 var(--ft-ink),2px 2px 0 var(--ft-ink),4px 4px 0 var(--ft-orange),0 0 18px rgba(255,224,0,0.6); }
}

.ft-tagline {
  margin:0; font-size:0.88rem; line-height:1.9; color:rgba(245,240,232,0.6);
  font-family:'Comic Neue',cursive; font-weight:700;
  background:rgba(255,140,0,0.07); border-left:5px solid var(--ft-orange);
  border-bottom:2px solid rgba(255,140,0,0.3);
  padding:0.8rem 1rem; border-radius:0 6px 6px 0;
}

.ft-socials { display:flex; gap:0.65rem; flex-wrap:wrap; }
.ft-social {
  position:relative; width:46px; height:46px; background:#1a1a1a;
  border:3px solid var(--ft-ink); border-radius:10px;
  display:flex; align-items:center; justify-content:center;
  color:rgba(255,255,255,0.5); text-decoration:none;
  transition:all 0.2s cubic-bezier(0.34,1.56,0.64,1);
  overflow:visible; box-shadow:3px 3px 0 var(--ft-ink);
}
.ft-social svg { width:18px; height:18px; position:relative; z-index:1; transition:transform 0.2s ease; }
.ft-social::after {
  content:''; position:absolute; inset:0; border-radius:7px;
  background:linear-gradient(135deg,var(--ft-orange),var(--ft-red));
  opacity:0; transition:opacity 0.2s ease; z-index:0;
}
.ft-social:hover { color:#fff; border-color:var(--ft-orange); transform:translateY(-6px) rotate(-5deg) scale(1.15); box-shadow:4px 4px 0 var(--ft-yellow),6px 6px 0 var(--ft-ink); }
.ft-social:hover::after { opacity:1; }
.ft-social:hover svg { transform:scale(1.2); }
.ft-social-tip {
  position:absolute; bottom:calc(100% + 11px); left:50%; transform:translateX(-50%);
  font-family:'Bangers',cursive; font-size:0.75rem; letter-spacing:1.5px;
  color:var(--ft-ink); white-space:nowrap; opacity:0; pointer-events:none;
  background:var(--ft-yellow); border:2px solid var(--ft-ink);
  padding:2px 8px; border-radius:5px; box-shadow:2px 2px 0 var(--ft-ink);
  transition:opacity 0.16s ease; z-index:100;
}
.ft-social:hover .ft-social-tip { opacity:1; }

.ft-nfc {
  display:inline-flex; align-items:center; gap:0.6rem;
  background:var(--ft-yellow); color:var(--ft-ink);
  padding:0.6rem 1.1rem; border-radius:8px;
  border:3px solid var(--ft-ink);
  box-shadow:4px 4px 0 var(--ft-ink),6px 6px 0 var(--ft-orange);
  font-family:'Bangers',cursive; font-size:1rem; letter-spacing:2px;
  text-decoration:none; align-self:flex-start;
  transition:all 0.2s cubic-bezier(0.34,1.56,0.64,1);
  animation: ftNFCPulse 2.5s ease-in-out infinite;
  position:relative; overflow:visible;
}
.ft-nfc:hover { transform:translate(-3px,-4px) rotate(-2deg); box-shadow:7px 7px 0 var(--ft-ink),9px 9px 0 var(--ft-orange); background:var(--ft-white); animation:none; }
.ft-nfc-icon { font-size:1.1rem; animation: ftTrophy 1.6s ease-in-out infinite; display:inline-block; }
.ft-nfc-arrow { font-family:'Bebas Neue',cursive; font-size:1rem; margin-left:auto; transition:transform 0.2s ease; }
.ft-nfc:hover .ft-nfc-arrow { transform:translateX(5px); }
@keyframes ftNFCPulse { 0%,100%{box-shadow:4px 4px 0 var(--ft-ink),6px 6px 0 var(--ft-orange)} 50%{box-shadow:4px 4px 0 var(--ft-ink),6px 6px 0 var(--ft-orange),0 0 20px rgba(255,200,0,0.5)} }
@keyframes ftTrophy { 0%,100%{transform:translateY(0) rotate(-8deg)} 50%{transform:translateY(-5px) rotate(8deg)} }

.ft-col { position:relative; padding-left:1.8rem; }
.ft-col::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
  background:linear-gradient(to bottom,transparent,var(--ft-orange) 15%,var(--ft-orange) 85%,transparent);
}
.ft-col--game { padding-left:1rem; }
.ft-col-hd {
  font-family:'Bangers',cursive; font-size:1.4rem; letter-spacing:4px; color:var(--ft-yellow);
  margin:0 0 1.2rem 0; padding-bottom:0.6rem; border-bottom:3px solid var(--ft-orange);
  display:flex; align-items:center; gap:0.6rem;
  text-shadow:-1px -1px 0 var(--ft-ink),1px -1px 0 var(--ft-ink),-1px 1px 0 var(--ft-ink),1px 1px 0 var(--ft-ink),2px 2px 0 var(--ft-orange);
}
.ft-col-hd__bar { display:inline-block; width:4px; height:1.1em; background:var(--ft-orange); flex-shrink:0; clip-path:polygon(0 0,80% 0,100% 50%,80% 100%,0 100%); }

.fnav-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.15rem; }
.fnav-link {
  display:flex; align-items:center; gap:0.55rem; color:rgba(245,240,232,0.6);
  text-decoration:none; font-family:'Bebas Neue',cursive; font-size:1.05rem; letter-spacing:2.5px;
  padding:0.32rem 0.4rem; border-radius:4px;
  transition:all 0.18s cubic-bezier(0.34,1.56,0.64,1); position:relative;
}
.fnav-link::after {
  content:''; position:absolute; inset:0; background:var(--ft-orange); border-radius:4px;
  transform:scaleX(0); transform-origin:left; transition:transform 0.18s ease; z-index:-1; opacity:0.15;
}
.fnav-link:hover { color:var(--ft-yellow); transform:translateX(8px); text-shadow:1px 1px 0 var(--ft-ink); }
.fnav-link:hover::after { transform:scaleX(1); }
.fnav-arrow { font-size:0.55rem; color:var(--ft-orange); flex-shrink:0; transition:transform 0.18s ease,color 0.18s ease; }
.fnav-link:hover .fnav-arrow { transform:translateX(3px); color:var(--ft-yellow); }

.ft-contact { display:flex; flex-direction:column; gap:1rem; }
.ft-ci {
  display:flex; align-items:flex-start; gap:0.7rem; color:rgba(245,240,232,0.6);
  font-size:0.84rem; text-decoration:none; line-height:1.5;
  font-family:'Comic Neue',cursive; font-weight:700;
}
.ft-ci--email {
  color:var(--ft-yellow); padding:0.4rem 0.6rem;
  background:rgba(255,224,0,0.08); border:2px solid rgba(255,224,0,0.25);
  border-radius:6px; transition:all 0.2s ease;
}
.ft-ci--email:hover { color:var(--ft-ink); background:var(--ft-yellow); border-color:var(--ft-ink); transform:translateX(4px); }
.ft-ci--link { text-decoration:none; transition:color 0.18s ease,transform 0.18s ease; cursor:pointer; }
.ft-ci--link:hover { color:var(--ft-yellow); transform:translateX(4px); }
.ft-ci-icon { width:18px; height:18px; flex-shrink:0; color:var(--ft-orange); margin-top:1px; }
.ft-ci-icon svg { width:100%; height:100%; }

/* ── Quote Wall ── */
.qw-wrap { display:flex; flex-direction:column; gap:0.7rem; user-select:none; }
.qw-header {
  display:flex; align-items:center; justify-content:space-between;
  padding-bottom:0.6rem; border-bottom:3px solid var(--ft-orange);
}
.qw-title {
  font-family:'Bangers',cursive; font-size:1.35rem; letter-spacing:3px; color:var(--ft-yellow); margin:0;
  display:flex; align-items:center; gap:0.5rem;
  text-shadow:-1px -1px 0 var(--ft-ink),1px -1px 0 var(--ft-ink),-1px 1px 0 var(--ft-ink),1px 1px 0 var(--ft-ink),2px 2px 0 var(--ft-orange);
}
.qw-title-bar { display:inline-block; width:4px; height:1.1em; background:var(--ft-orange); flex-shrink:0; clip-path:polygon(0 0,80% 0,100% 50%,80% 100%,0 100%); }
.qw-dots { display:flex; gap:5px; align-items:center; }
.qw-dot {
  width:8px; height:8px; border-radius:50%;
  border:2px solid var(--ft-orange); background:transparent;
  cursor:pointer; transition:all 0.2s ease;
}
.qw-dot--active { background:var(--ft-orange); transform:scale(1.2); }
.qw-card {
  position:relative;
  background:linear-gradient(145deg,#1a1208,#100e06);
  border:3px solid var(--ft-orange);
  border-radius:4px 18px 18px 18px;
  padding:1.1rem 1.1rem 1.3rem;
  box-shadow:5px 5px 0 var(--ft-ink), 0 0 0 1px rgba(255,140,0,0.15);
  min-height:130px;
  display:flex; flex-direction:column; justify-content:space-between; gap:0.8rem;
  overflow:hidden;
}
.qw-card::before {
  content:''; position:absolute; top:0; left:0;
  width:0; height:0;
  border-top:22px solid var(--ft-orange);
  border-right:22px solid transparent;
}
.qw-card::after {
  content:''; position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(circle,rgba(255,140,0,0.07) 1px,transparent 1px);
  background-size:10px 10px;
  border-radius:inherit;
}
.qw-quote-wrap { position:relative; z-index:1; }
.qw-open-quote {
  font-family:'Bangers',cursive; font-size:3rem; line-height:0.6;
  color:var(--ft-orange); opacity:0.35; display:block; margin-bottom:0.3rem;
}
.qw-text {
  font-family:'Comic Neue',cursive; font-weight:700;
  font-size:0.88rem; line-height:1.65; color:rgba(245,240,232,0.88);
  position:relative; z-index:1; margin:0;
  animation: qwFadeSlide 0.5s ease forwards;
}
@keyframes qwFadeSlide {
  from { opacity:0; transform:translateY(10px); }
  to   { opacity:1; transform:translateY(0); }
}
.qw-author-row { display:flex; align-items:center; gap:0.6rem; position:relative; z-index:1; }
.qw-avatar {
  width:32px; height:32px; border-radius:50%;
  background:linear-gradient(135deg,var(--ft-orange),var(--ft-red));
  border:2px solid var(--ft-ink);
  display:flex; align-items:center; justify-content:center;
  font-size:1rem; flex-shrink:0;
  box-shadow:2px 2px 0 var(--ft-ink);
}
.qw-author-info { display:flex; flex-direction:column; gap:0; }
.qw-author-name { font-family:'Bebas Neue',cursive; font-size:0.85rem; letter-spacing:2px; color:var(--ft-yellow); text-shadow:1px 1px 0 var(--ft-ink); }
.qw-author-tag { font-family:'Comic Neue',cursive; font-weight:700; font-size:0.65rem; color:rgba(245,240,232,0.35); letter-spacing:1px; }
.qw-nav { display:flex; justify-content:space-between; align-items:center; gap:0.5rem; }
.qw-nav-btn {
  font-family:'Bangers',cursive; font-size:0.82rem; letter-spacing:2px;
  background:transparent; color:rgba(245,240,232,0.5);
  border:2px solid rgba(255,140,0,0.3); border-radius:6px;
  padding:2px 10px; cursor:pointer;
  transition:all 0.18s cubic-bezier(0.34,1.56,0.64,1);
}
.qw-nav-btn:hover { color:var(--ft-ink); background:var(--ft-yellow); border-color:var(--ft-ink); transform:translateY(-2px); box-shadow:2px 2px 0 var(--ft-ink); }
.qw-counter { font-family:'Bebas Neue',cursive; font-size:0.75rem; letter-spacing:2px; color:rgba(245,240,232,0.3); }
.qw-progress { height:3px; background:rgba(255,140,0,0.15); border-radius:2px; overflow:hidden; }
.qw-progress-fill {
  height:100%; background:var(--ft-orange); border-radius:2px;
  animation: qwProgress var(--qw-duration,6s) linear forwards;
}
@keyframes qwProgress { from{width:0%} to{width:100%} }

/* ── Bottom bar ── */
.ft-bottom { background:var(--ft-orange); border-top:4px solid var(--ft-ink); position:relative; z-index:5; margin-top:3rem; }
.ft-bottom-inner { max-width:var(--ft-max); margin:0 auto; padding:0.85rem 2.5rem; display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap; }
.ft-copy { font-family:'Bangers',cursive; font-size:0.9rem; letter-spacing:2.5px; color:var(--ft-ink); }
.ft-love { font-family:'Bangers',cursive; font-size:0.9rem; letter-spacing:2px; color:var(--ft-ink); flex:1; text-align:center; white-space:nowrap; }
.ft-heart { color:var(--ft-red); display:inline-block; animation: ftHeartbeat 1.2s ease-in-out infinite; -webkit-text-stroke:1px var(--ft-ink); }
@keyframes ftHeartbeat { 0%,100%{transform:scale(1)} 25%{transform:scale(1.6)} 50%{transform:scale(1)} 75%{transform:scale(1.3)} }

/* ── Responsive ── */
@media (max-width:1100px) {
  .ft-inner { grid-template-columns:1fr 1fr; column-gap:0; row-gap:2.5rem; }
  .ft-brand { grid-column:1/-1; padding-right:0; border-bottom:4px solid var(--ft-orange); padding-bottom:2rem; }
}
@media (max-width:640px) {
  .ft-inner { grid-template-columns:1fr; padding:3.5rem 1.25rem 2rem; row-gap:2rem; }
  .ft-brand { padding-right:0; border:none; }
  .ft-col { padding-left:0; }
  .ft-col::before { display:none; }
  .ft-bottom-inner { flex-direction:column; text-align:center; gap:0.6rem; padding:0.9rem 1.25rem; }
  .ft-love { flex:unset; }
  .ft-ghost, .ft-speech-bubble, .ft-starburst { display:none; }
}
`;

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Members', href: '#' },
];

const SOCIALS = [
  {
    label: 'Instagram', abbr: 'IG',
    href: 'https://www.instagram.com/tseccodetantra/?hl=en',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
  },

 

  {
    label: 'Email', abbr: 'EM',
    href: 'mailto:codetantra.tsec@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
];

const QUOTES = [
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler", tag: "Software Engineer", emoji: "🧠" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson", tag: "Programmer", emoji: "💡" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay", tag: "Computer Scientist", emoji: "🚀" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House", tag: "Developer", emoji: "😄" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson", tag: "SICP Author", emoji: "📖" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", tag: "Apple Co-Founder", emoji: "🍎" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck", tag: "TDD Pioneer", emoji: "⚡" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman", tag: "Author", emoji: "✨" },
];
const DURATION = 6000;

function QuoteWall() {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => { clearTimeout(timerRef.current); setIdx(i); setKey(k => k + 1); };
  const next = (e) => { e.stopPropagation(); goTo((idx + 1) % QUOTES.length); };
  const prev = (e) => { e.stopPropagation(); goTo((idx - 1 + QUOTES.length) % QUOTES.length); };

  useEffect(() => {
    timerRef.current = setTimeout(() => { setIdx(i => (i + 1) % QUOTES.length); setKey(k => k + 1); }, DURATION);
    return () => clearTimeout(timerRef.current);
  }, [idx]);

  const q = QUOTES[idx];
  return (
    <div className="qw-wrap" onClick={e => e.stopPropagation()}>
      <div className="qw-header">
        <h3 className="qw-title"><span className="qw-title-bar" />WORDS OF CODE</h3>
        <div className="qw-dots">
          {QUOTES.map((_, i) => (
            <div key={i} className={`qw-dot${i === idx ? ' qw-dot--active' : ''}`}
              onClick={e => { e.stopPropagation(); goTo(i); }} />
          ))}
        </div>
      </div>
      <div className="qw-card">
        <div className="qw-quote-wrap">
          <span className="qw-open-quote">"</span>
          <p key={idx} className="qw-text">{q.text}</p>
        </div>
        <div className="qw-author-row">
          <div className="qw-avatar">{q.emoji}</div>
          <div className="qw-author-info">
            <span className="qw-author-name">{q.author}</span>
            <span className="qw-author-tag">{q.tag}</span>
          </div>
        </div>
      </div>
      <div className="qw-progress">
        <div key={key} className="qw-progress-fill" style={{ '--qw-duration': `${DURATION}ms` }} />
      </div>
      <div className="qw-nav">
        <button className="qw-nav-btn" onClick={prev}>◀ PREV</button>
        <span className="qw-counter">{idx + 1} / {QUOTES.length}</span>
        <button className="qw-nav-btn" onClick={next}>NEXT ▶</button>
      </div>
    </div>
  );
}

function Starburst({ className }) {
  return (
    <div className={`ft-starburst ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="#ff8c00" stroke="#0a0806" strokeWidth="3" />
      </svg>
    </div>
  );
}

function LinkList({ items }) {
  return (
    <ul className="fnav-list">
      {items.map(({ name, href }) => (
        <li key={name}>
          <a href={href} className="fnav-link" onClick={e => e.stopPropagation()}>
            <span className="fnav-arrow" aria-hidden="true">▶</span>
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const [bursts, setBursts] = useState([]);
  const burstId = useRef(0);

  useEffect(() => {
    const id = 'ft-injected-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = FOOTER_CSS;
    document.head.appendChild(style);
  }, []);

  const handleFooterClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.qw-wrap')) return;
    const words = ['POW!', 'ZAP!', 'BOOM!', 'CRACK!', 'WHAM!', 'BAM!', 'KAPOW!', '⚡ WOW!', '💥 YES!'];
    const word = words[Math.floor(Math.random() * words.length)];
    const id = burstId.current++;
    const rect = e.currentTarget.getBoundingClientRect();
    setBursts(prev => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top, word }]);
    setTimeout(() => setBursts(prev => prev.filter(b => b.id !== id)), 900);
  };

  return (
    <footer className="ft-root" onClick={handleFooterClick}>
      <div className="ft-scanlines" aria-hidden="true" />
      <div className="ft-corner ft-corner--tl" aria-hidden="true" />
      <div className="ft-corner ft-corner--tr" aria-hidden="true" />
      <div className="ft-speech-bubble ft-bubble-1" aria-hidden="true">CLICK ANYWHERE! 💥</div>
      <Starburst className="ft-starburst--1" />
      <Starburst className="ft-starburst--2" />
      <span className="ft-ghost ft-ghost--1" aria-hidden="true">CODE</span>
      <span className="ft-ghost ft-ghost--2" aria-hidden="true">BUILD</span>
      <span className="ft-ghost ft-ghost--3" aria-hidden="true">WIN</span>

      {bursts.map(b => (
        <span key={b.id} className="ft-burst" style={{ left: b.x, top: b.y }} aria-hidden="true">
          {b.word}
        </span>
      ))}

      <div className="ft-inner">
        <div className="ft-brand">
          <div className="ft-logo">
            <div className="ft-logo-badge">
              <img src="/codetantra_logo_cleaned.png" alt="CodeTantra Logo" style={{ width: '60px', height: '60px', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
              <div className="ft-logo-glow" aria-hidden="true" />
            </div>
            <div className="ft-logo-words">
              <span className="ft-logo-sub">TSEC</span>
              <span className="ft-logo-main">CODETANTRA</span>
            </div>
          </div>
          <p className="ft-tagline">
            Following our vision is to inculcate programming skills in the minds of students with the help of workshops, hackathons and other competitive events.
          </p>
          <div className="ft-socials">
            {SOCIALS.map(({ label, abbr, href, icon }) => (
              <a key={abbr} href={href} target="_blank" rel="noreferrer"
                className="ft-social" aria-label={label}
                onClick={e => e.stopPropagation()}>
                {icon}
                <span className="ft-social-tip">{label}</span>
              </a>
            ))}
          </div>
          <a href="https://tseccodetantra.com/NFC-4.0/" className="ft-nfc" onClick={e => e.stopPropagation()}>
            <span className="ft-nfc-icon">🏆</span>
            <span>NFC 4.0</span>
            <span className="ft-nfc-arrow">→</span>
          </a>
        </div>

        <div className="ft-col">
          <h3 className="ft-col-hd"><span className="ft-col-hd__bar" />Navigate</h3>
          <LinkList items={NAV_LINKS} />
        </div>

        <div className="ft-col">
          <h3 className="ft-col-hd"><span className="ft-col-hd__bar" />Contact</h3>
          <div className="ft-contact">
            <a href="https://google.com/maps?q=Thadomal+Shahani+Engineering+College+Mumbai"
              target="_blank" rel="noreferrer"
              className="ft-ci ft-ci--link" onClick={e => e.stopPropagation()}>
              <span className="ft-ci-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>TSEC, Bandra (W), Mumbai</span>
            </a>
            <a href="mailto:codetantra.tsec@gmail.com" className="ft-ci ft-ci--email" onClick={e => e.stopPropagation()}>
              <span className="ft-ci-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span>codetantra.tsec@gmail.com</span>
            </a>

          </div>
        </div>

        <div className="ft-col ft-col--game">
          <QuoteWall />
        </div>
      </div>


    </footer>
  );
}