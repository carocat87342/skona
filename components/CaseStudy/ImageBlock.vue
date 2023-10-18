<template>
  <section class="my-mobile-lg sm:my-tablet-lg lg:my-desktop-lg">
    <div class="container">
      <div :class="`img-position-${imagePosition}`">
        <img class="block" :src="image" :alt="imageCaption">
        <div v-if="imageCaption" class="mt-mobile-sm sm:mt-tablet-sm text-left">
          {{ imageCaption }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    image: {
      required: true,
      type: String,
      default: () => ({})
    },
    imagePosition: {
      required: false,
      type: String,
      enum: ['center', 'right', 'left'],
      default: () => 'center'
    },
    imageCaption: {
      required: false,
      type: String,
      default: () => ''
    }
  }
};
</script>

<style lang="scss" scoped>
.img-position {
  &-center {
    @apply mx-auto;
  }
  &-left {
    @apply sm:mr-auto sm:w-3/4;
  }
  &-right {
    @apply sm:ml-auto sm:w-3/4;
  }
}
</style>