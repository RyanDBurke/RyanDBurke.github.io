<script setup lang="ts">
import { onMounted, ref } from 'vue'
import IntroPreview from './components/IntroPreview.vue'

// Same glass as the nav on rburke.dev. Only Chromium can warp what's behind the pane
// with an SVG filter; Safari and Firefox would draw nothing, so they keep the plain frosted glass.
const warp = ref(false)
onMounted(() => {
  warp.value = 'userAgentData' in navigator
})
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
    <div class="preview">
      <IntroPreview />
      <!-- A pane of glass laid over the miniature rburke.dev; the whole pane is the link. -->
      <a class="glass-pane" :class="{ warp }" href="https://rburke.dev/" aria-label="Ryan Burke, visit rburke.dev"></a>
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview {
  position: relative;
  width: min(90vw, 960px);
  /* Lifts the miniature off the page, which is the same red. */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* The whole miniature grows with the glass so they stay lined up. */
.preview:hover,
.preview:has(.glass-pane:focus-visible) {
  transform: scale(1.04);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5);
}

/* On phones the miniature is a tall phone screen, so it is sized to fit the height too. */
@media (max-width: 767px) {
  .preview {
    width: min(75vw, calc(85svh * 390 / 844));
  }
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
