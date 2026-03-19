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
export const dogImages = [
  '/assets/images/bean/bean.jpeg',
  '/assets/images/bean/IMG_2045.jpeg',
  '/assets/images/bean/IMG_6290.jpeg',
  '/assets/images/bean/IMG_7747.jpeg'
]

export const currentDogImage = computed(() => dogImages[currentDogImageIndex.value])

export const copyEmailToClipboard = () => {
  const email = 'ryanburketv@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  })
}

export const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/assets/resume/RyanBurkeResume.pdf'
  link.download = 'RyanBurkeResume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
