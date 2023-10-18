<template>
  <div class="quotes-container py-mobile-xx-lg md:py-tablet-xx-lg lg:py-desktop-xx-lg relative coastal-default">
    <div class="container z-10 relative">
      <div class="swiper-slider h-full">
        <!-- Slider component -->
        <Slider v-if="quotes.length > 0" :slider-items="quotes" :type="'text-slider'" :from="'quotes'" />
        <!-- Quotes slider thumbs -->
        <div
          class="swiper gallery-thumbs lg:mt-desktop-x-lg sm:mt-tablet-x-lg mt-mobile-x-lg flex justify-center items-center flex-wrap gap-y-16 md:gap-y-20">
          <div
            v-for="(item, index) in quotes"
            :key="index"
            class="logos cursor-pointer"
            @click="switchSlide(index)">
            <img :src="item.acf.logo" :alt="item.acf.attribution">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText.js';

gsap.registerPlugin(SplitText);
export default {
  name: 'Quotes',
  title: 'Quotes',
  props: {
    quotes: {
      require: true,
      type: Array,
      default: () => []
    }
  },
  methods: {
    switchSlide(index) {
      this.$children[0].$refs.swiperTop.$swiper.slideTo(index);
    }
  }
};
</script>