<template>
  <section class="text-column-block">
    <div class="container grid grid-cols-1 sm:grid-cols-3 gap-y-[100px] sm:gap-[40px] md:gap-[60px]">
      <template v-for="(block, key) in textBlocks">
        <div :key="key">
          <Heading :level="3" class="mb-2.5 relative">
            <span class="relative z-1">
              {{ block.title }}
            </span>
            <Shape5 class="absolute left-0 top-[-27px] z-0 w-[31px] h-[55px] fill-current text-white opacity-20" />
          </Heading>
          <div class="text-column-content" v-html="block.text" />
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import Heading from '~/components/UI/Heading';
import Shape5 from '~/static/shapes/main/img-shape-5.svg?inline';

export default {
  name: 'TextColumnBlock',
  components: { Heading, Shape5 },
  props: {
    textBlocks: {
      required: true,
      type: Array
    }
  }
};
</script>

<style lang="scss">
  .text-column-block {
    @apply bg-big-blue
    text-white
    my-mobile-xx-lg
    sm:my-tablet-xx-lg
    lg:my-desktop-xx-lg
    py-mobile-x-lg
    sm:py-tablet-x-lg
    lg:py-desktop-x-lg;
  }
  .text-column-content {
    p:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>