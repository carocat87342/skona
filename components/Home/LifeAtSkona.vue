<template lang="html">
  <div class="life-at-skona lg:py-desktop-xx-lg md:py-tablet-xx-lg py-mobile-xx-lg relative">
    <img src="/images/life-at-skona-bg.svg" class="life-at-skona-bg lg:hidden block">
    <div class="container">
      <div class="grid grid-cols-12 relative">
        <div class="lg:col-span-7 md:col-span-6 sm:col-span-5 col-span-12 pt-mobile-xx-lg sm:pt-0">
          <div class="w-full life-at-skona-slider">
            <img src="/images/life-at-skona-bg.svg" class="life-at-skona-bg lg:block hidden">
            <!-- Slider Componet -->
            <Slider :slider-items="lifeAtSkonaImages" :type="'image-slider'" :from="'life-at-skona'" />
          </div>
        </div>
        <div
          class="lg:col-span-4 md:col-span-6 sm:col-span-7 col-span-12 sm:order-none order-first lg:pl-tablet-md sm:pl-desktop-lg">
          <h2 class="lg:text-h2-desk sm:text-h2-tab text-h2-mob lg:leading-h2-desk sm:leading-h2-tab leading-h2-mob mb-desktop-x-sm">
            {{ lifeAtSkonaTitle }}
          </h2>
          <div class="mb-desktop-lg" v-html="lifeAtSkonaDescription" />
          <cta-btn :to="lifeAtSkonaCta.url" :target="lifeAtSkonaCta.target" class="skona-button btn-default">
            {{ lifeAtSkonaCta.title }}
          </cta-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeAtSkona',
  title: 'Progress pagination',
  props: {
    lifeAtSkonaTitle: {
      required: false,
      type: String,
      default: () => ''
    },
    lifeAtSkonaDescription: {
      required: false,
      type: String,
      default: () => ''
    },
    lifeAtSkonaCta: {
      required: false,
      type: Object,
      default: () => ({
        title: '',
        url: '',
        target: ''
      })
    },
    lifeAtSkonaImages: {
      required: false,
      type: Array,
      default: () => []
    }
  }
};

</script>

<style lang="scss" scoped>
.life-at-skona {
  @apply bg-skona-300 ;
  .slider-container {
    position: relative;
  }

  .life-at-skona-slider {
    @include xlarge {
      padding-left: 106px;
    }
  }

  .life-at-skona-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 92%;
    @include xlarge {
      bottom: auto;
      top: -120px;
      left: 0;
      max-width: 100%;
      max-height: unset;
    }
    @include mobile {
      max-width: 70%;
    }
  }

  .skona-button {
    &:before {
      background-image: url(/shapes/cta-primary-karl-highlight.svg);
    }
  }
}
</style>