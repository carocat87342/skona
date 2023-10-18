<template lang="html">
  <div class="loc-card">
    <div class="loc-card-image">
      <img class="w-full h-full object-cover" :src="image" alt="">
    </div>

    <div class="loc-card-content">
      <div class="loc-card-city">
        {{ city }}
      </div>
      <Heading :level="3" class="mb-2.5">
        {{ title }}
      </Heading>
      <div v-html="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: {
    city: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.loc-card {
  @apply sm:flex sm:items-start;

  &-image {
    @apply sm:min-w-[350px] md:min-w-[465px] md:h-[600px] relative;

    &::after {
      @apply absolute top-[40px] md:top-[60px] left-1/2 -translate-x-1/2 w-[80%] h-[60%] z-1 bg-white opacity-40;
      content: '';
      -webkit-mask-image: url('/shapes/main/img-shape-1.svg');
      mask-image: url('/shapes/main/img-shape-1.svg');
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: 50%;
      mask-position: 50%;
      -webkit-mask-size: contain;
      mask-size: contain;
    }
  }
  &-content {
    @apply font-light mt-mobile-lg md:mt-desktop-lg sm:ml-tablet-lg md:ml-mobile-x-lg lg:ml-[165px] lg:mr-[105px];
  }
  &-city {
    @apply uppercase text-p-all-small leading-4 font-medium mb-mobile-sm sm:mb-tablet-sm;
  }

  &.loc-card-revert {
    .loc-card-image {
      @apply sm:order-last;

      &::after {
        -webkit-mask-image: url('/shapes/main/img-shape-4-1.svg');
        mask-image: url('/shapes/main/img-shape-4-1.svg');
      }
    }
    .loc-card-content {
      @apply ml-0 lg:ml-[105px] sm:mr-tablet-lg md:mr-mobile-x-lg lg:mr-[165px];
    }
  }
}
</style>