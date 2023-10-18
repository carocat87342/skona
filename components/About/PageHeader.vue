<template lang="html">
  <div class="page-header">
    <div class="text-center mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg">
      <div class="container">
        <Heading :level="1" class="mb-2.5">
          {{ heroTitle }}
        </Heading>
        <div class="text-subheader mx-auto max-w-780">
          {{ heroDescription }}
        </div>
      </div>
    </div>

    <div class="image-photo-block">
      <div class="container">
        <div class="image-photo-block-inner">
          <template v-for="(item, index) in heroImages">
            <img :key="item.image + index" class="image-photo" :src="item.image" alt="">
          </template>

          <Shape7 class="shape shape-1" />
          <Shape1 class="shape shape-2" />
        </div>
      </div>
    </div>

    <div class="page-header-footer">
      <div class="container">
        <div class=" relative z-1 max-w-[990px] mx-auto sm:pb-[30px]">
          <div class="max-w-780 sm:mr-[15%]">
            <Heading :level="2" class="mb-2.5">
              {{ bottomTitle }}
            </Heading>
            <p class="font-light">
              {{ bottomText }}
            </p>
            <div class="mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg">
              <cta-btn
                type="secondary"
                color="white"
                :target="heroCta.target"
                :to="heroCta.url">
                {{ heroCta.title }}
              </cta-btn>
              <Shape41 class="shape" />
            </div>
          </div>
        </div>
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
    ...mapGetters('about', ['hero']),
    heroCta() {
      return this.hero?.cta;
    },
    heroTitle() {
      return this.hero?.title;
    },
    bottomTitle() {
      return this.hero?.bottom_title;
    },
    bottomText() {
      return this.hero?.bottom_text;
    },
    heroDescription() {
      return this.hero?.description;
    },
    heroImages() {
      return this.hero?.images;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  @apply relative
  bg-big-blue
  text-white
  py-mobile-xx-lg
  sm:py-tablet-xx-lg
  lg:py-desktop-xx-lg;

  &-footer {
    .shape {
      @apply hidden sm:block text-white opacity-20 top-0 right-0 h-full max-h-[380px];
    }
  }
}

.image-photo-block {
  @apply overflow-hidden
  my-mobile-xx-lg
  sm:my-tablet-xx-lg
  lg:my-desktop-xx-lg;

  &-inner {
    @apply relative
    z-1
    min-h-[670px]
    lg:min-h-[870px]
    flex
    items-start
    justify-between
    flex-col
    sm:flex-row
    sm:mx-[-30px]
    pb-[45px]
    sm:pb-0;
  }
}
.image-photo {
  @apply min-w-[230px] w-1/2 sm:px-[30px] block;

  &:nth-child(2) {
    @apply ml-auto mt-[50px] sm:mt-auto;
  }
}
.shape {
  @apply fill-current text-skona absolute -z-1;

  &-1 {
    @apply min-w-[269px]
    w-[55vw]
    sm:w-[450px]
    lg:w-[585px]
    bottom-0
    left-[-30px]
    sm:left-0
    sm:ml-[-15%];
  }
  &-2 {
    @apply text-oh-baby
    min-w-[230px]
    w-[55vw]
    sm:w-[400px]
    lg:w-[585px]
    top-[40px]
    sm:top-0
    right-[-30px]
    sm:right-0
    sm:mr-[-15%];
  }
}
</style>