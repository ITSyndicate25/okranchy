# Okra Chip Particle Effect — Design Spec

## Summary

A global ambient particle animation injected into all pages via `main.js`. A fixed `<canvas>` layer emits small green (raw okra) and golden (fried) chip fragments that float upward and fade, mimicking the crunchy burst of biting an okra chip. Zero HTML changes per page.

## Trigger

Ambient continuous — particles spawn continuously at viewport bottom edges, drift upward, and fade out. No user interaction required.

## Visual Style

- **Green chips** (`#33aa29`): irregular 5-vertex polygons, 4-8px, raw okra fragment look
- **Golden chips** (`#FAA019`): rounder shards, 3-6px, fried crunch look
- Mixed spawn (random choice per particle). Opacity 0.7 → 0 over lifespan

## Architecture

```
main.js DOMContentLoaded
  └─ initParticleCanvas()
       └─ gameloop (requestAnimationFrame)
            ├─ spawnParticle()   — 1-3 particles every 300-800ms
            ├─ updateParticles() — drift up, sway, rotate, age
            └─ renderParticles() — canvas 2D polygon draw
```

### Data: Particle Object

```ts
{
  x, y: number        // position (viewport coords)
  vx, vy: number      // velocity (drift up, slight horizontal sway)
  size: number        // 3-8px base
  rotation: number    // current rotation angle
  rotSpeed: number    // -2° to +2° per frame
  opacity: number     // 0.0-0.7
  life: number        // frames lived
  maxLife: number     // 480-900 frames (8-15s at 60fps)
  color: string       // #33aa29 or #FAA019
  verts: number[][]    // 5 vertex offsets for irregular polygon shape
}
```

### Physics

|Property|Value|
|---|---|
|Spawn rate|1-3 particles every 300-800ms|
|Spawn zone|Bottom 30% of viewport, random X|
|Max particles|40 (oldest recycled)|
|Vertical drift|-0.3 to -0.8 px/frame (upward)|
|Horizontal sway|Sine oscillation ±0.3px|
|Rotation|-2° to +2° per frame|
|Lifespan|8-15 seconds random|
|Opacity curve|Peak at birth (0.7), linear fade after 60% life|

### Canvas Element

- `position: fixed; inset: 0; pointer-events: none; z-index: 999`
- Full viewport size, resized on `window.resize`
- Class name: `okr-particle-canvas`

## Injection

Appended to `main.js` DOMContentLoaded block. No HTML or per-page changes.

## SCSS

New partial `assets/scss/sections/_particles.scss` imported at end of `style.scss`:

```scss
.okr-particle-canvas {
  position: fixed;
  inset: 0;
  z-index: 999;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
}
```

## Performance

- Canvas rendering, no DOM reflow
- `visibilitychange` listener stops loop when tab hidden
- `devicePixelRatio` clamping for HiDPI
- 40 particle cap prevents unbounded growth

## Files Changed

1. `assets/js/main.js` — append `initParticleCanvas()` call
2. `assets/scss/sections/_particles.scss` — new file, canvas positioning
3. `assets/scss/style.scss` — add `@import "sections/particles";`
4. `assets/css/style.css` — recompile (or hand-add compiled block)
