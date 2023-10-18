<template>
  <section class="page-header">
    <div class="container relative z-1 an-el-container">
      <Heading :level="1" class="mb-2.5 mx-auto md:max-w-[950px]">
        {{ heroTitle }}
      </Heading>
      <p v-if="heroDescription" class="text-subheader">
        {{ heroDescription }}
      </p>
    </div>
    <ShapeHero class="shape shape-center an-el-shape" />
  </section>
</template>

<script>

import { gsap } from 'gsap';
import { mapGetters } from 'vuex';
import ShapeHero from '~/static/shapes/main/img-shape-8.svg?inline';

export default {
  name: 'PageHeader',
  components: {
    ShapeHero
  },
  computed: {
    ...mapGetters('services', ['heroTitle', 'heroDescription'])
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
  @apply relative
  text-center
  min-h-screen
  bg-white
  py-mobile-x-lg
  sm:py-tablet-x-lg
  lg:py-desktop-x-lg
  my-desktop-lg
  flex
  items-center
  justify-center
  overflow-hidden;
}
.shape {
  @apply fill-current
  text-skona
  h-[315px]
  sm:h-[495px]
  max-h-full
  max-w-full;
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