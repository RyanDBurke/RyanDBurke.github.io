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
        software engineer | 
        film photographer | 
        enjoyer of the NBA |
        amateur chef |
        oil-pastel artist
        </p>
      </header>
    
    <section class="work-section">
      <h2 class="work-title">work I'm doing, work I've done</h2>
    </section>

    <main>
      <div class="square tile-base dealeron" @click="showDealerOnModal = true">
        <span class="tile-label">DealerOn</span>
        <span class="tile-subtitle">Software Engineer</span>
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

    <div v-if="showDealerOnModal" class="modal-overlay" @click="showDealerOnModal = false">
      <div class="modal-content modal-base dealeron-modal" @click.stop>
        <div class="modal-text-content">
          <div class="modal-header">
            <p class="modal-title">DealerOn</p>
              <h3 class="modal-subtitle">Software Engineer</h3>
              <span class="modal-techstack">.NET | C# | Azure | SQL Server | RabbitMq | Redis | Copilot</span>
          </div>
          <p class="modal-description">
          Programming, architectural planning, debugging, code-reviews, guiding other engineers, and smiling in meetings; 
          I do it all
          <br>
          </p>
          <em class="disclaimer">[read my resume if you want a professional description]</em>
        </div>
      </div>
    </div>

    <div v-if="showTechModal" class="modal-overlay" @click="showTechModal = false">
      <div class="modal-content modal-base tech-modal" @click.stop>
        <div class="modal-text-content">
          <div class="modal-header">
            <p class="modal-title">University of Maryland, Division of IT</p>
              <h3 class="modal-subtitle">IT Technician</h3>
              <span class="modal-techstack">
              Problem-solving | Documentation | Remote Tooling | Windows | Linux | MacOS
</span>
          </div>
          <p class="modal-description">
          Installed, diagnosed, and repaired hardware/software for students and staff.
          <br>
          </p>
        </div>
      </div>
    </div>

    <div v-if="showCovidProjectModal" class="modal-overlay" @click="showCovidProjectModal = false">
      <div class="modal-content modal-base covid-project-modal" @click.stop>
        <div class="modal-text-content">
          <div class="modal-header">
            <div class="modal-title-container">
              <p class="modal-title">Covid Genome Variant</p>
              <a href="https://github.com/RyanDBurke/coronavirus-genome-variant" target="_blank" rel="noopener noreferrer" class="project-github-link" title="View on GitHub">
                <img src="/assets/images/github-icon.jpg" alt="GitHub" class="project-github-icon" />
              </a>
            </div>
              <h3 class="modal-subtitle">Project</h3>
              <span class="modal-techstack">C | Bioinformatics | Data Analysis</span>
          </div>
          <p class="modal-description">
          A basic seed-search alignment tool to compare read-variants to the nCov-19 virus genome using 
          Burrows-Wheeler transform, suffix arrays, the FM-Index, and core dynamic programming principles.
          Kinda cool.
          <br>
          </p>
        </div>
      </div>
    </div>

    <div v-if="showLeBitModal" class="modal-overlay" @click="showLeBitModal = false">
      <div class="modal-content modal-base lebit-modal" @click.stop>
        <div class="modal-text-content">
          <div class="modal-header">
            <p class="modal-title">LeBit</p>
              <h3 class="modal-subtitle">Project</h3>
              <span class="modal-techstack">Python | PyQt | PostgreSQL</span>
          </div>
          <p class="modal-description">
          An in-progress project to build a 8-bit themed desktop app for sport fantasy teams
          <br>
          </p>
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
import '../assets/styles/App.css'
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
  downloadResume
} from './appSetup'
</script>
