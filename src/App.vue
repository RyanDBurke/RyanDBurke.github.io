<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-links">
        <a href="https://github.com/RyanDBurke" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="/assets/images/github-icon.png" alt="GitHub" class="icon" />
        </a>
        <a href="https://www.linkedin.com/in/ryanburke77/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="/assets/images/linkedin-icon.png" alt="LinkedIn" class="icon linkedin-icon" />
        </a>
        <a href="#" @click.prevent="showResumeModal = true" title="Resume">
          <img src="/assets/images/resume-icon.png" alt="Resume" class="icon resume-icon" />
        </a>
        <a href="#" @click.prevent="showEmailModal = true" title="Email">
          <img src="/assets/images/email-icon.png" alt="Email" class="icon email-icon" />
        </a>
        <a href="#" @click.prevent="showDogModal = true" title="click here to see my dog">
          <img src="/assets/images/dog-icon.png" alt="click here to see my dog" class="icon dog-icon" />
        </a>
      </div>
    </nav>

    <div v-if="showResumeModal" class="modal-overlay" @click="showResumeModal = false">
      <div class="modal-content resume-modal" @click.stop>
        <button class="modal-close-btn" @click="showResumeModal = false" title="Close">✕</button>
        <div class="modal-text-content">
          <div class="resume-header">
            <img src="/assets/images/resume.png" alt="Ryan Burke Resume" class="resume-image" @click="downloadResume" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="showEmailModal" class="modal-overlay" @click="showEmailModal = false">
      <div class="modal-content email-modal" @click.stop>
        <button class="modal-close-btn" @click="showEmailModal = false" title="Close">✕</button>
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
        <button class="modal-close-btn" @click="showDogModal = false" title="Close">✕</button>
        <div class="modal-text-content">
          <h2 class="dog-modal-title">my dog, bean</h2>
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
        <h1>{{ displayedName }}<span v-if="showCursor" class="typing-cursor">|</span></h1>
        <h3>
        senior software engineer who likes building cool things for cool people
        </h3>
      </header>
    
    <section class="work-section">
      <h2 class="work-title">stuff I'm doing, stuff I've done</h2>
    </section>

    <main>
      <div class="square tile-base dealeron" @click="showDealerOnModal = true">
        <span class="tile-label">DealerOn</span>
        <span class="tile-subtitle">Senior Software Engineer</span>
      </div>
      <div class="square tile-base tech" @click="showTechModal = true">
        <span class="tile-label">University of Maryland, IT</span>
        <span class="tile-subtitle">IT Technician</span>
      </div>
      <div class="square tile-base covid-project" @click="showCovidProjectModal = true">
        <span class="tile-label">Covid Genome Variant</span>
        <span class="tile-subtitle">Project</span>
      </div>
      <div class="square tile-base lebit" @click="showLeBitModal = true">
        <span class="tile-label">LeBit</span>
        <span class="tile-subtitle">Project</span>
      </div>
    </main>

    <ProjectModal
      :is-open="showDealerOnModal"
      title="DealerOn"
      subtitle="Senior Software Engineer"
      skills=".NET | C# | Azure | SQL Server | RabbitMq | Redis | Copilot"
      modal-class="dealeron-modal"
      @close="showDealerOnModal = false"
    >
      <template #icon>
        <a href="https://www.dealeron.com/" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="View DealerOn">
          <img src="/assets/images/dealeron-icon.png" alt="DealerOn" class="project-github-icon" />
        </a>
      </template>
      Programming, architectural planning, debugging, code-reviews, guiding other engineers, and general problem-solving for a suite of SaaS products for enterprise car dealerships.
    </ProjectModal>

    <ProjectModal
      :is-open="showTechModal"
      title="University of Maryland, Division of IT"
      subtitle="IT Technician"
      skills="Problem-solving | Documentation | Remote Tooling | Windows | Linux | MacOS"
      modal-class="tech-modal"
      @close="showTechModal = false"
    >
      <template #icon>
        <a href="https://it.umd.edu/" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="View UMD IT">
          <img src="/assets/images/umd-icon.png" alt="University of Maryland" class="project-github-icon umd-icon" />
        </a>
      </template>
      Installed, diagnosed, and repaired hardware/software for students and staff.
    </ProjectModal>

    <ProjectModal
      :is-open="showCovidProjectModal"
      title="Covid Genome Variant"
      subtitle="Project"
      skills="C | Bioinformatics | Data Analysis"
      modal-class="covid-project-modal"
      @close="showCovidProjectModal = false"
    >
      <template #icon>
        <a href="https://github.com/RyanDBurke/coronavirus-genome-variant" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="View on GitHub">
          <img src="/assets/images/github-icon.jpg" alt="GitHub" class="project-github-icon" />
        </a>
      </template>
      A seed-search alignment tool to compare read-variants to the nCov-19 virus genome using Burrows-Wheeler transform, suffix arrays, the FM-Index, and core dynamic programming principles. Kinda cool.
    </ProjectModal>

    <ProjectModal
      :is-open="showLeBitModal"
      title="LeBit"
      subtitle="Project"
      skills="Python | PyQt | PostgreSQL"
      modal-class="lebit-modal"
      @close="showLeBitModal = false"
    >
      <template #icon>
        <div class="project-icon-link" title="Still a work in progress" @click="triggerWipAnimation">
          <img src="/assets/images/work-in-progress.png" alt="Work in Progress" :class="{ 'wip-animating': wipAnimating }" class="project-github-icon" />
        </div>
      </template>
      An in-progress project to build a 8-bit themed desktop app for sport fantasy teams
    </ProjectModal>

    <footer>
      <p>&copy; 2026 Ryan Burke</p>
    </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import './styles/App.css'
import ProjectModal from './components/ProjectModal.vue'
import {
  showDealerOnModal,
  showTechModal,
  showCovidProjectModal,
  showLeBitModal,
  showResumeModal,
  showEmailModal,
  showDogModal,
  emailCopied,
  currentDogImageIndex,
  dogImages,
  currentDogImage,
  copyEmailToClipboard,
  downloadResume,
  wipAnimating,
  triggerWipAnimation,
  handleDogImageKeyboard,
  displayedName,
  showCursor,
  startNameAnimation,
} from './appSetup'

onMounted(() => {
  window.addEventListener('keydown', handleDogImageKeyboard)
  startNameAnimation()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleDogImageKeyboard)
})
</script>
