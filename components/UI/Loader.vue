<template>
  <div class="loader z-40 fixed top-0 left-0 w-full h-full flex justify-center items-center">
    <div class="loading z-30 fixed top-0 left-0 w-full h-full" />
    <img id="logo" :src="logo.logo_dark" class="z-40 relative">
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { TweenMax } from 'gsap';
import { Power1 } from 'gsap/gsap-core';

export default {
  computed: {
    ...mapState(['logo'])
  },
  mounted() {
    this.$nuxt.$on('loading-start', this.start);
    this.$nuxt.$on('loading-finish', this.finish);
  },
  methods: {
    start() {
      TweenMax.to('.loader', 0.3, { display: 'flex', ease: Power1.easeOut });
      TweenMax.to('.loading', 0, { opacity: 0.5, ease: Power1.easeOut });
      TweenMax.to('.loading', 0.3, { opacity: 1, ease: Power1.easeOut });
    },
    finish() {
      TweenMax.to('.loading', 0, { opacity: 0.5, ease: Power1.easeOut });
      TweenMax.to('.loading', 0.3, { opacity: 0, ease: Power1.easeOut });
      TweenMax.to('.loader', 0.3, { display: 'none', ease: Power1.easeOut });
    }
  }
};
</script>
<style lang="scss" scoped>
.loader {
  display: none;
  .loading {
    background: #fff;
    opacity: 0;
  }
  #logo {
    animation-name: fadeInBottom;
    animation-duration: 2s;
    // animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
}
@keyframes fadeInBottom {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    25% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    75% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}
</style>