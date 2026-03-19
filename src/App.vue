<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-links">
        <a href="https://github.com/RyanDBurke" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="/assets/images/github-icon.jpg" alt="GitHub" class="icon" />
        </a>
        <a href="https://www.linkedin.com/in/ryanburke77/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="/assets/images/linkedin-icon.jpg" alt="LinkedIn" class="icon linkedin-icon" />
        </a>
        <a href="#" @click.prevent="showResumeModal = true" title="Resume">
          <img src="/assets/images/resume-icon.jpg" alt="Resume" class="icon resume-icon" />
        </a>
        <a href="#" @click.prevent="showEmailModal = true" title="Email">
          <img src="/assets/images/email-icon.jpg" alt="Email" class="icon email-icon" />
        </a>
        <a href="#" @click.prevent="showDogModal = true" title="click here to see my dog">
          <img src="/assets/images/dog-icon.jpg" alt="click here to see my dog" class="icon dog-icon" />
        </a>
      </div>
    </nav>

    <div v-if="showResumeModal" class="modal-overlay" @click="showResumeModal = false">
      <div class="modal-content resume-modal" @click.stop>
        <div class="modal-text-content">
          <div class="resume-header">
            <img src="/assets/images/resume.png" alt="Ryan Burke Resume" class="resume-image" />
            <button @click="downloadResume" class="download-button" title="Download resume">
              📥
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showEmailModal" class="modal-overlay" @click="showEmailModal = false">
      <div class="modal-content email-modal" @click.stop>
        <div class="modal-text-content">
          <div class="email-container">
            <p class="email-display">ryanburketv@gmail.com</p>
            <button @click="copyEmailToClipboard" class="copy-button" :class="{ copied: emailCopied }" :title="emailCopied ? 'Copied!' : 'Copy email'">
              <span v-if="!emailCopied">📋</span>
              <span v-else>✓</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showDogModal" class="modal-overlay" @click="showDogModal = false">
      <div class="modal-content dog-modal" @click.stop>
        <div class="modal-text-content">
          <h2 class="dog-modal-title">bean</h2>
          <div class="carousel-container">
            <img :src="currentDogImage" alt="Bean" class="dog-image" />
          </div>
          <div class="carousel-indicators">
            <span v-for="(img, index) in dogImages" :key="index" class="indicator" :class="{ active: index === currentDogImageIndex }" @click="currentDogImageIndex = index"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <header>
        <h1>Ryan Burke</h1>
        <p>
        Software engineer, film photographer, enjoyer of the NBA, amateur cook, oil-pastel artist
        </p>
      </header>
    
    <main>
      <div class="square dealeron" @click="showDealerOnModal = true">
        <span class="dealeron-label">DealerOn</span>
        <span class="dealeron-subtitle">Software Engineer</span>
      </div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </main>

    <div v-if="showDealerOnModal" class="modal-overlay" @click="showDealerOnModal = false">
      <div class="modal-content dealeron-modal" @click.stop>
        <div class="modal-text-content">
          <div class="modal-header">
            <p class="modal-title">DealerOn</p>
              <h3 class="modal-subtitle">Software Engineer</h3>
              <span class="modal-techstack">.NET | C# | Azure | SQL Server | RabbitMq | Redis | Copilot</span>
          </div>
          <p class="modal-description">
          Programming, architectural planning, debugging, code-reviews, guiding other engineers, and smiling in meetings
          <br>
          </p>
          <em class="disclaimer">[read my resume if you want a professional description]</em>
        </div>
      </div>
    </div>


    <footer>
      <p>&copy; 2026 Ryan Burke</p>
    </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showDealerOnModal = ref(false)
const showResumeModal = ref(false)
const showEmailModal = ref(false)
const showDogModal = ref(false)
const emailCopied = ref(false)
const currentDogImageIndex = ref(0)
const dogImages = [
  '/assets/images/bean/bean.jpeg',
  '/assets/images/bean/IMG_2045.jpeg',
  '/assets/images/bean/IMG_6290.jpeg',
  '/assets/images/bean/IMG_7747.jpeg'
]

const currentDogImage = computed(() => dogImages[currentDogImageIndex.value])

const nextDogImage = () => {
  currentDogImageIndex.value = (currentDogImageIndex.value + 1) % dogImages.length
}

const previousDogImage = () => {
  currentDogImageIndex.value = (currentDogImageIndex.value - 1 + dogImages.length) % dogImages.length
}

const copyEmailToClipboard = () => {
  const email = 'ryanburketv@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  })
}

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/assets/resume/RyanBurkeResume.pdf'
  link.download = 'RyanBurkeResume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

.dealeron-modal, .modal-text-content, .modal-header, .modal-title, .modal-subtitle, .modal-description, .app, .navbar, .nav-links, .container, header, main, section, footer, body, html {
  font-family: CircularStd, sans-serif !important;
}
html, body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
/* Resume modal styling */
.resume-modal {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 900px;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background-color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-links {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
  display: flex;
 

align-items: center;
  justify-content: center;
}

.icon {
  width: 50px;
  height: 50px;
}

.linkedin-icon {
  width: 50px;
  height: 50px;
}

.resume-icon {
  width: 50px;
  height: 50px;
}

.email-icon {
  width: 50px;
  height: 50px;
}

.dog-icon {
  width: 50px;
  height: 50px;
}


.nav-links a:hover {
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  flex: 1;
}

header {
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 2rem;
}

header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
}

header p {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  min-height: 800px;
}

.square {
  background-color: #e6e6e6;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.dealeron {
  background-image: url('/assets/images/dealeron.jpg');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.dealeron::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(144, 196, 84, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dealeron:hover::after {
  opacity: 1;
}

.dealeron-label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.dealeron-subtitle {
  position: absolute;
  top: 2.5rem;
  left: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.dealeron:hover .dealeron-label,
.dealeron:hover .dealeron-subtitle {
  opacity: 1;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.dealeron-modal {
  background-color: #e6e6e6;
  background-image: url('/assets/images/dealeron.jpg');
  background-size: 50%;
  background-position: center 9rem;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  height: 80vh;
  width: 80vw;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: flex-end;
}

.dealeron-modal::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(144, 196, 84, 0.8);
  opacity: 0;
  z-index: 0;
}

.dealeron-modal .dealeron-label,
.dealeron-modal .dealeron-subtitle {
  opacity: 1;
  position: relative;
  z-index: 1;
  text-align: left;
}

.modal-description {
  position: relative;
  z-index: 1;
  color: #000000;
  margin: 0;
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.4;
}

.modal-text-content {
  position: relative;
  z-index: 1;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
}

.modal-header {
  margin-bottom: 1rem;
  text-align: left;
}

.modal-title {
  color: #333;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.modal-subtitle {
  color: #000000;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal-content h2 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
}

.modal-content p {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
}

.modal-techstack {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.disclaimer {
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 0.5rem;
}

footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #ddd;
  color: #666;
  font-size: 0.9rem;
}

.resume-image {
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: transform 0.3s ease;
  cursor: zoom-in;
}

.resume-image:hover {
  /* scale 1.7 */
  transform: scale(1); 
}

.resume-header {
  position: relative;
  display: inline-block;
  width: 100%;
}

.download-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #90c454;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.download-button:hover {
  transform: scale(1.1);
  background-color: #90c454;
}
.email-modal {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 3rem 2rem;
  max-width: 500px;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.email-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.email-display {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: 600;
  word-break: break-all;
}

.copy-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease, color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-button:hover {
  transform: scale(1.2);
  color: #90c454;
}

.copy-button.copied {
  color: #4caf50;
}

.dog-modal {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 1200px;
  width: 30vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

.dog-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: transform 0.3s ease;
  cursor: zoom-in;
  object-fit: cover;
}

.dog-image:hover {
  cursor: pointer;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.carousel-button {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #90c454;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.carousel-button:hover {
  transform: scale(1.1);
  background-color: #90c454;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #90c454;
}

.dog-modal-title {
  color: #333;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-align: center;
}</style>
