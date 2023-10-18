<template>
  <div class="posts-loader z-40 flex justify-center items-center">
    <img id="logo" :src="logo.logo_dark" class="z-40 absolute mt-[120px]">
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { TweenMax } from 'gsap';
import { Power1 } from 'gsap/gsap-core';

export default {
  name: 'PostsLoader',
  computed: {
    ...mapState(['logo', 'postsLoader'])
  },
  watch: {
    postsLoader(loading) {
      if (loading) {
        this.start();
      } else {
        this.finish();
      }
    }
  },
  methods: {
    start() {
      TweenMax.to('.posts-loader', 0.3, { display: 'flex', ease: Power1.easeOut });
    },
    finish() {
      TweenMax.to('.posts-loader', 0.3, { display: 'none', ease: Power1.easeOut });
    }
  }
};
</script>
<style lang="scss" scoped>
.posts-loader {
  display: none;
  #logo {
    animation-name: fadeInBottom;
    animation-duration: 1s;
    // animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>