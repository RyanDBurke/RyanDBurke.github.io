<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// A miniature copy of the intro screen on rburke.dev (IntroSection, NavBar and ScrollCue there).
// It's laid out at the size of the visitor's screen with the same CSS as the real intro, then
// scaled down to fit, so at full size it lines up exactly with rburke.dev on that screen.
const box = ref<HTMLElement>()
const frame = ref<HTMLElement>()
const scale = ref(0)
const aspect = ref(16 / 10)
let observer: ResizeObserver | undefined

// Same ribbed glass as the real nav; only Chromium can draw it.
const warp = ref(false)

function update() {
  const f = frame.value!
  aspect.value = f.offsetWidth / f.offsetHeight
  scale.value = box.value!.clientWidth / f.offsetWidth
}

onMounted(() => {
  warp.value = 'userAgentData' in navigator
  update()
  observer = new ResizeObserver(update)
  observer.observe(box.value!)
  observer.observe(frame.value!)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div ref="box" class="preview" :style="{ aspectRatio: aspect }" aria-hidden="true" inert>
    <div ref="frame" class="frame" :style="{ transform: `scale(${scale})` }">
      <div class="nav" :class="{ warp }">
        <span class="logo">RB</span>
        <span class="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div class="stage">
        <div>
          <h1>Ryan Burke</h1>
          <ul class="roles">
            <li>Software Engineer</li>
          </ul>
        </div>
        <span class="scroll-cue">scroll down ↓</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #7d2011;
  color: #FDFBD4;
  font-family: 'Playfair Display', Georgia, serif;
  text-align: center;
}

/* The full-size screen. vw, svh and the media queries below all refer to the real screen,
   just as they do on rburke.dev. */
/* rburke.dev sets this on everything, and the nav's 80% width and the stage's padding depend on it. */
.frame,
.frame * {
  box-sizing: border-box;
}

.frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  transform-origin: top left;
}

.nav {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(24, 5, 1, 0.2);
  border: 1px solid rgba(253, 251, 212, 0.25);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 20px rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(3px) saturate(1.5);
  backdrop-filter: blur(3px) saturate(1.5);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

/* Uses the #button-glass filter in Landing.vue, which matches the real nav's filter. */
.nav.warp {
  backdrop-filter: url(#button-glass) blur(1px) saturate(1.5);
}

@media (min-width: 768px) {
  .nav { width: 25%; }
}

.logo {
  grid-column: 2;
  font-size: 1.25rem;
  font-weight: 700;
}

.menu-button {
  grid-column: 3;
  justify-self: end;
  display: grid;
  gap: 4px;
  padding: 0.5rem;
}

.menu-button span {
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
}

.stage {
  height: 100%;
  display: grid;
  place-items: center;
  padding: 1rem;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 10vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.03em;
}

.roles {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
  font-size: clamp(1.125rem, 3vw, 1.75rem);
  line-height: 1.4;
  text-align: left;
}

@media (max-width: 767px) {
  h1 { font-size: 14vw; }
  .roles { font-size: 1.375rem; }
}

.roles li {
  opacity: 0.9;
  animation: fade-in 1.2s ease 0.4s backwards;
}

@keyframes fade-in {
  from { opacity: 0; }
}

.scroll-cue {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  white-space: nowrap;
  opacity: 0;
  animation: pulse 2s ease-in-out 1.6s infinite backwards;
}

@keyframes pulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
  .roles li { animation: none; }
  .scroll-cue { animation: none; opacity: 0.6; }
}
</style>
