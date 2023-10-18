<template>
  <div class="swiper-images">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in images" :key="index">
        <img :src="item.image" alt="">
      </swiper-slide>
    </swiper>
    <div class="swiper-arrow-block">
      <div slot="button-prev" class="swiper-arrow swiper-arrow-prev" />
      <div slot="button-next" class="swiper-arrow swiper-arrow-next" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'SwiperImages',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-arrow-next',
          prevEl: '.swiper-arrow-prev'
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  .swiper-arrow-block {
    @apply flex items-center justify-between mt-5 max-w-[880px];
  }
  .swiper-arrow {
    @apply relative h-[10px] w-[55px] md:w-[100px];
    transition: 0.5s ease;
    transition-property: transform;

    &::after {
      @apply absolute top-1/2 w-full border-t border-almost border-solid;
      content: '';
      transition: 0.5s ease;
      transition-property: width;
    }
    &::before {
      @apply absolute top-1/2 mt-[-3px] border-solid border-almost block;
      content: '';
      border-width: 0 1px 1px 0;
      padding: 3px;
    }
    &-next {
      &::before,
      &::after {
        right: 0;
      }
      &::before {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
    &-prev {
      &::before,
      &::after {
        left: 0;
      }
      &::before {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }
    }

    &:not(.swiper-button-disabled):hover {
      &::after {
        width: 90%;
      }
      &.swiper-arrow-next {
        transform: translateX(10px);
      }
      &.swiper-arrow-prev {
        transform: translateX(-10px);
      }
    }
    &.swiper-button-disabled {
      cursor: auto;
    }
  }

  .swiper-slide {
    @apply w-auto max-w-[300px] sm:max-w-[500px] lg:max-w-[880px];

    &:not(:last-child) {
      @apply mr-[30px] md:mr-[60px];
    }
  }
</style>