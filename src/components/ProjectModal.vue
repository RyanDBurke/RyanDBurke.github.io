<template>
  <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content modal-base" :class="modalClass" @click.stop>
      <button class="modal-close-btn" @click="$emit('close')" title="Close">✕</button>
      <div class="modal-text-content">
        <div class="modal-header">
          <div v-if="$slots.icon" class="modal-title-container">
            <p class="modal-title">{{ title }}</p>
            <slot name="icon"></slot>
          </div>
          <p v-else class="modal-title">{{ title }}</p>
          <h3 class="modal-subtitle">{{ subtitle }}</h3>
          <div class="modal-techstack">
            <span v-for="tech in techItems" :key="tech" class="techstack-tag">{{ tech }}</span>
          </div>
        </div>
        <p class="modal-description">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
  title: string
  subtitle: string
  skills: string
  modalClass: string
}>()

defineEmits<{
  close: []
}>()

const techItems = computed(() =>
  props.skills.split('|').map(t => t.trim()).filter(Boolean)
)
</script>
