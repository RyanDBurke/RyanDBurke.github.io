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
          <span class="modal-techstack">{{ techstack }}</span>
        </div>
        <p class="modal-description">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  techstack: {
    type: String,
    required: true
  },
  modalClass: {
    type: String,
    required: true
  }
})

defineEmits(['close'])
</script>
