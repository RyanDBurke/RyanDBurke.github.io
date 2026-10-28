<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// A miniature copy of the intro screen on rburke.dev (IntroSection, NavBar and ScrollCue there).
// It's laid out at a fixed screen size and scaled down to fit, so it keeps the real proportions.
// On phones it copies the site's phone layout instead of the desktop one.
const desktopWidth = 1440
const phoneWidth = 390

const box = ref<HTMLElement>()
const scale = ref(0)
const phone = ref(false)
const phoneQuery = window.matchMedia('(max-width: 767px)')
let observer: ResizeObserver | undefined

function update() {
  phone.value = phoneQuery.matches
  scale.value = box.value!.clientWidth / (phone.value ? phoneWidth : desktopWidth)
}

onMounted(() => {
  update()
  phoneQuery.addEventListener('change', update)
  observer = new ResizeObserver(update)
  observer.observe(box.value!)
})

onUnmounted(() => {
  phoneQuery.removeEventListener('change', update)
  observer?.disconnect()
})
</script>

<template>
  <div ref="box" class="preview" :class="{ phone }" aria-hidden="true" inert>
    <div class="frame" :style="{ transform: `scale(${scale})` }">
      <div class="nav">
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
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #7d2011;
  color: #FDFBD4;
  font-family: 'Playfair Display', Georgia, serif;
  text-align: center;
}

.frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 1440px;
  height: 900px;
  transform-origin: top left;
}

.nav {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 360px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 8px 16px;
  background: rgba(24, 5, 1, 0.2);
  border: 1px solid rgba(253, 251, 212, 0.25);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 20px rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(3px) saturate(1.5);
  backdrop-filter: blur(3px) saturate(1.5);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.logo {
  grid-column: 2;
  font-size: 20px;
  font-weight: 700;
}

.menu-button {
  grid-column: 3;
  justify-self: end;
  display: grid;
  gap: 4px;
  padding: 8px;
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
  padding: 16px;
}

h1 {
  margin: 0;
  font-size: 112px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.roles {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  font-size: 28px;
  line-height: 1.4;
  text-align: left;
}

.roles li {
  opacity: 0.9;
  animation: fade-in 1.2s ease 0.4s backwards;
}

/* The site's phone layout, drawn on a 390×844 screen: a wider nav and the 14vw title. */
.phone {
  aspect-ratio: 390 / 844;
}
.phone .frame {
  width: 390px;
  height: 844px;
}
.phone .nav {
  width: 312px;
}
.phone h1 {
  font-size: 54.6px;
}
.phone .roles {
  font-size: 22px;
}

@keyframes fade-in {
  from { opacity: 0; }
}

.scroll-cue {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
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
