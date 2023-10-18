<template>
  <div :id="`line-cta-${id}`" class="banner-cta-block mt-2  relative duration-1000 btn-md" @mouseleave="mouseLeave" @mouseover="mouseOver">
    <a href="/" class="w-full flex justify-end uppercase">
      <div ref="ctaLine" class="cta-line w-2/3 relative mt-3 h-0.5" />
      <img src="/icons/rectangle.svg" class="mr-2 cta-icon mt-0.5 -ml-2.5"><span class="whitespace-nowrap">Snowflake case Study</span>
    </a>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  name: 'LineCTA',
  props: {
    size: {
      type: String,
      default: 'full',
      enum: ['sm', 'md', 'lg', 'full']
    }
  },
  computed: {
    id() {
      return this._uid;
    }
  },
  methods: {
    mouseOver() {
      let width = window.getComputedStyle(this.$refs.ctaLine).width;
      width = parseFloat(width);

      const fromWidth = width + 'px';
      const toWidth = (width * 0.30) + 'px';
      gsap.fromTo(`#line-cta-${this.id} .cta-line`, { width: fromWidth }, {
        width: toWidth,
        duration: 0.3
      });
    },
    mouseLeave() {
      gsap.fromTo(`#line-cta-${this.id} .cta-line`, { width: '40%' }, {
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

.btn-sm{
  width: 250px;
}

.btn-md{
  width: 330px;
}

.btn-lg{
  width: 440px;
}

.btn-full{
  width: 100%;
}
</style>