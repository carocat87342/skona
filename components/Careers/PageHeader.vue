<template lang="html">
  <div class="page-header">
    <div class="mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg mb-mobile-xx-lg sm:mb-tablet-xx-lg lg:mb-desktop-xx-lg">
      <div class="container">
        <Heading :level="1" class="mb-2.5 mx-auto max-w-[500px] md:max-w-[800px]">
          {{ pageDataAcf.hero_title }}
        </Heading>
        <p class="text-subheader">
          {{ pageDataAcf.hero_description }}
        </p>
      </div>
    </div>

    <div class="image-photo-block">
      <div class="container">
        <div class="image-photo-block-inner">
          <template v-for="(item, index) in heroImages">
            <img :key="item.image + index" class="image-photo" :src="item.image" alt="">
          </template>

          <Shape7 class="shape shape-1" />
          <Shape41 class="shape shape-2" />
          <Shape1 class="shape shape-3" />
        </div>
      </div>
    </div>

    <div class="mt-mobile-x-lg sm:mt-tablet-x-lg lg:mt-desktop-x-lg">
      <div class="container">
        <cta-btn
          class="btn-wise-sage"
          type="primary"
          v-bind="{...attrs }"
          @click="scrollToCta">
          {{ heroCta.title }}
        </cta-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Shape1 from '~/static/shapes/main/img-shape-1.svg?inline';
import Shape7 from '~/static/shapes/main/img-shape-7.svg?inline';
import Shape41 from '~/static/shapes/main/img-shape-4-1.svg?inline';

export default {
  name: 'PageHeader',
  components: {
    Shape1,
    Shape7,
    Shape41
  },
  computed: {
    ...mapGetters('careers', ['pageDataAcf', 'heroCta', 'heroImages']),
    attrs() {
      const attrs = {};
      if (this.heroCta.target) {
        attrs.target = this.heroCta.target;
      }
      if (this.heroCta.url && !this.heroCta.url.includes('#')) {
        attrs.to = this.heroCta.url;
      }
      return attrs;
    }
  },
  methods: {
    scrollToCta() {
      return this.$emit('scroll-to-cta');
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  @apply relative text-center py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg;
}
.image-photo-block {
  @apply overflow-hidden;

  &-inner {
    @apply h-[300px] sm:h-[690px] relative;

    @include mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
.image-photo {
  @apply max-h-full block z-1 relative sm:absolute opacity-100 transition-opacity;

  @include tablet {
    max-width: 400px;
  }
  @include mobile {
    display: none;
  }

  &:nth-child(2) {
    display: block;
  }

  &:nth-child(1),
  &:nth-child(6n+8) {
    @include desktop-tablet {
      top: 0;
      left: 0;
    }
  }
  &:nth-child(2),
  &:nth-child(9n) {
    @include tablet {
      right: 0;
      bottom: 0;
    }
    @include desktop {
      right: 10%;
      bottom: 0;
    }
  }
  &:nth-child(3),
  &:nth-child(10n) {
    @include desktop-tablet {
      top: 30%;
      left: 33%;
    }
  }
  &:nth-child(4),
  &:nth-child(5n) {
    @include desktop-tablet {
      top: 5%;
      right: 5%;
    }
  }
  &:nth-child(5),
  &:nth-child(11n) {
    @include desktop-tablet {
      right: 40%;
      bottom: 0;
    }
  }
  &:nth-child(6),
  &:nth-child(12n) {
    @include desktop-tablet {
      top: 40%;
      left: 50%;
    }
  }
  &:nth-child(7),
  &:nth-child(15n) {
    @include desktop-tablet {
      left: 5%;
      bottom: 0;
    }
  }
}
.shape {
  @apply fill-current text-wise-sage absolute z-0;

  &-1 {
    @apply w-[140px] sm:w-[270px] md:w-[375px] bottom-0 left-0 ml-[-12%];
  }
  &-2 {
    @apply w-[180px] sm:w-[360px] md:w-[465px] text-white opacity-20 top-0 right-0 mr-[-12%] sm:mr-0;
  }
  &-3 {
    @apply w-[65px] sm:w-[165px] top-[20px] sm:top-[20%] right-[-30px] sm:right-0 sm:mr-[-12%];
  }
}
</style>