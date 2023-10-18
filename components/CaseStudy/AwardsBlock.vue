<template>
  <section class="awards-block">
    <div class="container">
      <Heading :level="2" class="mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg">
        {{ title }}
      </Heading>
      <div class="flex items-center justify-center flex-wrap gap-8 sm:gap-12 md:gap-20 lg:gap-24">
        <template v-for="(logo, index) in logos">
          <img
            :key="logo.image + index"
            class="block min-w-[50px] max-w-[77px] lg:max-w-[150px] hover:opacity-80"
            :src="logo.image"
            alt="">
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AwardsBlock',
  props: {
    title: {
      required: true,
      type: String,
      default: () => []
    },
    logos: {
      required: true,
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
 .awards-block {
   @apply text-center my-mobile-xx-lg sm:my-tablet-xx-lg lg:my-desktop-xx-lg;
 }
</style>