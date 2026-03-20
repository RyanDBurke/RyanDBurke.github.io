import { ref, computed, type Ref, type ComputedRef } from 'vue'

export const showDealerOnModal: Ref<boolean> = ref(false)
export const showTechModal: Ref<boolean> = ref(false)
export const showCovidProjectModal: Ref<boolean> = ref(false)
export const showLeBitModal: Ref<boolean> = ref(false)
export const showResumeModal: Ref<boolean> = ref(false)
export const showEmailModal: Ref<boolean> = ref(false)
export const showDogModal: Ref<boolean> = ref(false)
export const emailCopied: Ref<boolean> = ref(false)
export const currentDogImageIndex: Ref<number> = ref(0)
export const wipAnimating: Ref<boolean> = ref(false)

export const dogImages: string[] = [
  '/assets/images/bean/bean.jpeg',
  '/assets/images/bean/IMG_2045.jpeg',
  '/assets/images/bean/IMG_6290.jpeg',
  '/assets/images/bean/IMG_7747.jpeg'
]

export const currentDogImage: ComputedRef<string> = computed(() => dogImages[currentDogImageIndex.value])

export const copyEmailToClipboard = (): void => {
  const email = 'ryanburketv@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  })
}

export const downloadResume = (): void => {
  const link = document.createElement('a')
  link.href = '/assets/resume/RyanBurkeResume.pdf'
  link.download = 'RyanBurkeResume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const triggerWipAnimation = (): void => {
  wipAnimating.value = true
  setTimeout(() => {
    wipAnimating.value = false
  }, 1500)
}

export const handleDogImageKeyboard = (event: KeyboardEvent): void => {
  if (!showDogModal.value) return
  
  if (event.key === 'ArrowLeft') {
    currentDogImageIndex.value = (currentDogImageIndex.value - 1 + dogImages.length) % dogImages.length
  } else if (event.key === 'ArrowRight') {
    currentDogImageIndex.value = (currentDogImageIndex.value + 1) % dogImages.length
  }
}
