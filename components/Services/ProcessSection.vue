<template>
  <section class="process-section">
    <div class="process-section-inner">
      <div class="container relative z-1">
        <div class="text-center mx-auto max-w-[780px]">
          <div class="uppercase text-p-all-small font-medium mb-mobile-sm sm:mb-desktop-sm">
            {{ process.subtitle }}
          </div>
          <Heading :level="2" class="mb-2.5">
            {{ process.title }}
          </Heading>
          <p v-if="process.description" class="font-light mb-2.5">
            {{ process.description }}
          </p>
        </div>
        <div class="process-list">
          <div v-for="(block, index) in process.text_block" :key="index" class="process-list-item">
            <Heading :level="3" class="mb-2.5">
              {{ block.title }}
            </Heading>
            <div v-html="block.text" />
          </div>
        </div>
      </div>
      <ShapeHero class="shape shape-center " />
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex';
import ShapeHero from '~/static/shapes/main/img-shape-our-process.svg?inline';

export default {
  name: 'ProcessSection',
  components: {
    ShapeHero
  },
  computed: {
    ...mapGetters('services', ['process'])
  }
};
</script>

<style lang="scss" scoped>
.process-section {
  @apply
  bg-skona
  overflow-hidden
  lg:py-desktop-lg
  lg:min-h-screen;

  &-inner {
    @apply relative
    flex
    items-center
    justify-center
    py-mobile-xx-lg
    sm:py-tablet-xx-lg
    lg:py-desktop-xx-lg;
  }
}
.shape {
  @apply hidden
  sm:block
  fill-current
  text-white
  opacity-25
  max-h-full
  max-w-full
  sm:h-[600px]
  lg:h-[700px];
}
.shape-center {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
.process-list {
  @apply grid
  grid-cols-12
  gap-y-mobile-x-lg
  sm:gap-desktop-lg
  mt-mobile-x-lg
  sm:mt-tablet-x-lg
  lg:mt-desktop-x-lg;

  &-item {
    @apply col-span-12 sm:col-span-6 lg:col-span-3 relative;

    @include mobile {
      min-height: 143px;
      padding-left: 90px;

      &::after {
        content: '';
        width: 143px;
        height: 143px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: rgba(255,255,255,0.25);
        -webkit-mask-image:  url('/shapes/main/img-shape-our-process-list-1.svg');
        mask-image: url('/shapes/main/img-shape-our-process-list-1.svg');
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: 50%;
        mask-position: 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
      }

      &:nth-child(2)::after {
        -webkit-mask-image:  url('/shapes/main/img-shape-our-process-list-2.svg');
        mask-image: url('/shapes/main/img-shape-our-process-list-2.svg');
      }
      &:nth-child(3)::after {
        -webkit-mask-image:  url('/shapes/main/img-shape-our-process-list-3.svg');
        mask-image: url('/shapes/main/img-shape-our-process-list-3.svg');
      }
      &:nth-child(4)::after {
        -webkit-mask-image:  url('/shapes/main/img-shape-our-process-list-4.svg');
        mask-image: url('/shapes/main/img-shape-our-process-list-4.svg');
      }
    }
  }
}
</style>