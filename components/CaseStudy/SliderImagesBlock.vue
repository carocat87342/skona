<template>
  <section class="slider-images-block">
    <div class="container overflow-visible">
      <swiper-images class="overflow-visible" :images="images" />
    </div>
  </section>
</template>

<script>
import SwiperImages from '~/components/UI/SwiperImages';

export default {
  name: 'SliderImagesBlock',
  components: { SwiperImages },
  props: {
    images: {
      required: true,
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
 .slider-images-block {
   @apply overflow-hidden max-w-1920 mx-auto my-mobile-xx-lg sm:my-tablet-xx-lg lg:my-desktop-xx-lg;
   .swiper-container {
     overflow: visible !important;
   }
 }
</style>