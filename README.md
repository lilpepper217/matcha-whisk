# Matcha Whisk 🍵

A browser-based matcha-whisking game. Pick a tin, scoop, pour water, and whisk toward
a hidden froth target — by feel, not by numbers.

**Play it:** https://lilpepper217.github.io/matcha-whisk/

## Modes

- **Calm Whisk** — No time pressure. Pick a tin, scoop matcha, pour water, and whisk
  toward a hidden froth target (55–90 range). Tap "This Feels Right" when it looks
  done. Your result is compared against the target, and on success you can continue
  into a **Matcha Latte** flow: pick a syrup, pour matcha over it in a glass, and get
  a finished-drink screen.
- **Order Rush** — A 40-second arcade mode. Random orders (tin + syrup + hidden froth
  target) queue up one after another; whisk and pour as many as you can correctly
  before time runs out. Best score is saved locally.

## Tech

This is a static, dependency-free site — no build step, no backend.

- `index.html` — the app: a `<x-dc>` template block plus a `Component extends DCLogic`
  class containing all game logic (state, rendering, sound).
- `support.js` — the runtime that loads React/ReactDOM/Babel from a CDN, parses the
  template and script blocks in `index.html`, and mounts the app.
- `sw.js` — a kill-switch service worker that clears out caches left behind by an
  older, offline-capable version of this app. It does not add offline support itself.
- `uploads/` — game artwork (tins, syrups, UI elements).
- Sound effects are fully synthesized at runtime via the Web Audio API — there are no
  audio files.

## Running locally

Since GitHub Pages serves this as a static site, any static file server works:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the local URL in a browser. (Opening `index.html` directly via `file://`
will not work — the app needs to be served over HTTP.)

## Deployment

- `main` is the branch GitHub Pages publishes from.
- `dev` is the staging branch — changes land there first and get verified before
  being merged into `main`.
