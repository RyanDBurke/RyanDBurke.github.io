import { ref, computed } from 'vue'

export const showDealerOnModal = ref(false)
export const showTechModal = ref(false)
export const showCovidProjectModal = ref(false)
export const showLeBitModal = ref(false)
export const showResumeModal = ref(false)
export const showEmailModal = ref(false)
export const showDogModal = ref(false)
export const emailCopied = ref(false)
export const currentDogImageIndex = ref(0)
export const wipAnimating = ref(false)

export const displayedName = ref('')
export const showCursor = ref(true)

export const startNameAnimation = (): void => {
  const typo = 'Ryn Brk'
  const full = 'Ryan Burke'
  const typeSpeed = 120
  const deleteSpeed = 80

  const typeChars = (text: string, index: number, onDone: () => void) => {
    if (index < text.length) {
      displayedName.value += text[index]
      setTimeout(() => typeChars(text, index + 1, onDone), typeSpeed)
    } else {
      onDone()
    }
  }

  const deleteAll = (onDone: () => void) => {
    if (displayedName.value.length > 0) {
      displayedName.value = displayedName.value.slice(0, -1)
      setTimeout(() => deleteAll(onDone), deleteSpeed)
    } else {
      onDone()
    }
  }

  setTimeout(() => {
    typeChars(typo, 0, () => {
      setTimeout(() => {
        deleteAll(() => {
          setTimeout(() => {
            typeChars(full, 0, () => {
              setTimeout(() => {
                showCursor.value = false
              }, 2000)
            })
          }, 300)
        })
      }, 1200)
    })
  }, 800)
}

export const dogImages: string[] = [
  '/assets/images/bean/bean.jpeg',
  '/assets/images/bean/IMG_2045.jpeg',
  '/assets/images/bean/IMG_6290.jpeg',
  '/assets/images/bean/IMG_7747.jpeg'
]

export const currentDogImage = computed(() => dogImages[currentDogImageIndex.value])

export const copyEmailToClipboard = (): void => {
  const email = 'ryanburketv@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  }).catch(() => {
    // Clipboard access denied — fail silently
  })
}

export const downloadResume = (): void => {
  window.open('/assets/resume/RyanBurkeResume.pdf')
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
