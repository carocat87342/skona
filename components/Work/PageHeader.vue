<template>
  <div class="page-header">
    <div class="container relative an-el-container">
      <Heading :level="1" as="h1" class="mb-6 mx-auto max-w-[500px] md:max-w-[800px]">
        {{ heroTitle }}
      </Heading>
      <p class="text-subheader">
        {{ heroDescription }}
      </p>
    </div>
    <svg class="shape shape-center w-[316px] md:w-[517px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path class="an-el-shape" d="M80,80V47.28L49.59,0H0V15.1L39.13,80Z" />
    </svg>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { mapGetters } from 'vuex';

export default {
  name: 'PageHeader',
  computed: {
    ...mapGetters('work', ['heroTitle', 'heroDescription'])
  },
  mounted() {
    this.simpleFade();
  },
  methods: {
    simpleFade() {
      const tl = gsap.timeline();
      tl.fromTo('.an-el-header', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.an-el-container', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.6 }, '0')
        .from('.an-el-shape', { scale: 0, transformOrigin: '100% 100%', duration: 0.6 }, '-=0.7');
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  @apply relative text-center min-h-screen bg-bi-coastal text-white py-16 md:py-24 flex items-center justify-center;
}
.shape {
  @apply fill-current text-white opacity-10;
}
.shape-center {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
.an-el-header, .an-el-container {
  animation: 0.6s, easeOutQuint cubic-bezier(0.22, 1, 0.36, 1);
}
.an-el-shape {
  animation: 0.6s, easeInQuint cubic-bezier(0.64, 0, 0.78, 0);
}
</style>