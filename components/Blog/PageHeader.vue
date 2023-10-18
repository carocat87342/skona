<template>
  <div class="page-header">
    <div class="container relative z-1 an-el-container">
      <Heading :level="1" class="mb-6 mx-auto max-w-[500px] md:max-w-[800px]">
        {{ title }}
      </Heading>
      <p class="text-subheader">
        {{ description }}
      </p>
    </div>
    <svg class="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440.36 741.43">
      <path class="an-el-shape-1" d="M0,548.32H37.4c103.3,0,202.29,8.63,292.67,38.85,102.62,32.07,193.32,84.66,265.85,154.26H811.41V0H0Z" />
      <path class="an-el-shape-2" d="M812,306.92C812,181,849.3,81.32,909.16,0h531.2V139.51c-74.16,42.21-121.81,89.17-121.81,151.69,0,80.16,51.18,131.45,121.81,158.18V740.5H1031.64C895,639.87,812,492.92,812,306.92Z" />
    </svg>
  </div>
</template>

<script>

import { gsap } from 'gsap';

export default {
  name: 'PageHeader',
  props: {
    title: {
      required: false,
      type: String,
      default: ''
    },
    description: {
      required: false,
      type: String,
      default: ''
    }
  },
  mounted() {
    this.simpleFade();
  },
  methods: {
    simpleFade() {
      const tl = gsap.timeline();
      tl.fromTo('.an-el-header', { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.an-el-container', { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 0.6 }, '0')
        .from('.an-el-shape-1', { scale: 0, transformOrigin: '0 0', duration: 0.6 }, '-=0.7')
        .from('.an-el-shape-2', { scale: 0, transformOrigin: '100% 100%', duration: 0.6 }, '-=0.7');
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  @apply relative text-center min-h-screen bg-karl-300 py-16 md:py-24 flex items-center justify-center overflow-hidden;
}
.shape {
  @apply fill-current text-karl absolute min-h-full min-w-full;
}
</style>