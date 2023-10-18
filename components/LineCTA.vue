<template>
  <div id="banner-cta-block" class="banner-cta-block mt-2 opacity-0 absolute right-0 bottom-0 w-full md:w-4/6 duration-1000" @mouseleave="mouseLeave" @mouseover="mouseOver">
    <a href="/" class="w-full flex justify-end uppercase">
      <div class="cta-line w-1/2 md:w-2/3 relative mt-3 h-0.5" />
      <img src="/icons/rectangle.svg" class="mr-2 cta-icon mt-0.5 -ml-2.5">Snowflake case Study
    </a>
  </div>
</template>

<script>
import { gsap } from 'gsap';
// import { Power4 } from 'gsap/gsap-core'
export default {
  methods: {
    mouseOver() {
      gsap.fromTo('#banner-cta-block .cta-line', { width: '66.666667%' }, {
        width: '40%',
        duration: 0.3
      });
    },
    mouseLeave() {
      gsap.fromTo('#banner-cta-block .cta-line', { width: '40%' }, {
        width: '66.666667%',
        duration: 0.3
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-cta-block {
  .cta-line {
    background: #343434;
    z-index: 1;
    transition: background 0.3s ease-out;

    &:before {
      background: #91a5f4;
      background: -moz-linear-gradient(-45deg, #91a5f4 0%, #b08cf9 86%);
      background: -webkit-linear-gradient(-45deg, #91a5f4 0%, #b08cf9 86%);
      background: linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#91a5f4', endColorstr='#b08cf9', GradientType=1);
      content: "";
      width: 75%;
      height: 100%;
      right: 0;
      position: absolute;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
  }
}
</style>