<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import IntroPreview from './components/IntroPreview.vue'

// Same glass as the nav on rburke.dev. Only Chromium can warp what's behind the pane
// with an SVG filter; Safari and Firefox would draw nothing, so they keep the plain frosted glass.
const warp = ref(false)

const siteUrl = 'https://rburke.dev/'
const preview = ref<HTMLElement>()
const expanding = ref(false)
const expandTransform = ref('')

// Grows the miniature back to full size, where it lines up with the intro on rburke.dev,
// then goes there. Clicks meant to open a new tab or window are left to the browser.
function expand(event: MouseEvent) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  if (expanding.value) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.location.href = siteUrl
    return
  }

  // The miniature is the screen scaled down, so matching the screen's width brings it back to
  // full size; it ends pinned to the top of the screen like the real intro. offsetWidth/Height
  // ignore the hover scale, which this transform replaces.
  const el = preview.value!
  const rect = el.getBoundingClientRect()
  const scale = window.innerWidth / el.offsetWidth
  const dx = window.innerWidth / 2 - (rect.left + rect.width / 2)
  const dy = (el.offsetHeight * scale) / 2 - (rect.top + rect.height / 2)
  expandTransform.value = `translate(${dx}px, ${dy}px) scale(${scale})`
  expanding.value = true

  let gone = false
  const go = () => {
    if (gone) return
    gone = true
    window.location.href = siteUrl
  }
  el.addEventListener('transitionend', (e) => {
    if (e.target === el && e.propertyName === 'transform') go()
  })
  // In case transitionend never fires (e.g. the tab is in the background).
  setTimeout(go, 1000)
}

// Coming back with the browser's back button can restore the page mid-zoom; reset it.
function reset(event: PageTransitionEvent) {
  if (event.persisted) {
    expanding.value = false
    expandTransform.value = ''
  }
}

onMounted(() => {
  warp.value = 'userAgentData' in navigator
  window.addEventListener('pageshow', reset)
})

onUnmounted(() => window.removeEventListener('pageshow', reset))
</script>

<template>
  <!-- Ribbed-glass distortion for the pane's backdrop: noise that's stretched sideways nudges what's behind it. -->
  <svg class="filters" aria-hidden="true">
    <filter id="button-glass" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.008 0.06" numOctaves="2" seed="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="24" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <div class="landing">
    <div
      ref="preview"
      class="preview"
      :class="{ expanding }"
      :style="expanding ? { transform: expandTransform } : undefined"
    >
      <IntroPreview />
      <!-- A pane of glass laid over the miniature rburke.dev; the whole pane is the link. -->
      <a
        class="glass-pane"
        :class="{ warp }"
        :href="siteUrl"
        aria-label="Ryan Burke, visit rburke.dev"
        @click="expand"
      ></a>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
  background: #7d2011;
}
</style>

<style scoped>
.filters {
  position: absolute;
  width: 0;
  height: 0;
}

.landing {
  min-height: 100vh;
  /* Keeps the zoom-in from adding scrollbars as the miniature grows past the screen. */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview {
  position: relative;
  /* The miniature has the screen's proportions, so this is also 70% of the screen's height. */
  width: min(70vw, 960px);
  /* Lifts the miniature off the page, which is the same red. */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* After a click: grows to cover the screen (see expand), and the glass clears away to leave the page. */
.preview.expanding {
  z-index: 2;
  box-shadow: none;
  transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1), box-shadow 0.8s ease;
}
.preview.expanding .glass-pane {
  opacity: 0;
  transition: opacity 0.6s ease;
}

/* The whole miniature grows with the glass so they stay lined up. */
.preview:hover,
.preview:has(.glass-pane:focus-visible) {
  transform: scale(1.04);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5);
}

.glass-pane {
  position: absolute;
  inset: 0;
  /* A pane of glass: faintly tinted, with a bright top edge, blurring the page behind it. */
  background: rgba(24, 5, 1, 0.2);
  border: 1px solid rgba(253, 251, 212, 0.25);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 20px rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(3px) saturate(1.5);
  backdrop-filter: blur(3px) saturate(1.5);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.glass-pane.warp {
  backdrop-filter: url(#button-glass) blur(1px) saturate(1.5);
}

.glass-pane:hover {
  background: rgba(24, 5, 1, 0.3);
  border-color: rgba(253, 251, 212, 0.45);
}

.glass-pane:focus-visible {
  outline: 2px solid rgba(253, 251, 212, 0.7);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .preview,
  .glass-pane { transition: none; }
}
</style>
