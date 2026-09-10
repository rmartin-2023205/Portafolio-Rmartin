<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import EducationSection from '~/components/sections/EducationSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import ContactForm from '~/components/sections/ContactForm.vue'
import { portfolioData } from '~/data/portfolio'

useSeoMeta({
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  ogTitle: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: portfolioData.personal.description,
  ogDescription: portfolioData.personal.description,
  ogType: 'profile',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection>
      <ContactForm />
    </ContactSection>
  </main>
</template>
