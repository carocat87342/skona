<template>
  <section class="awards-block">
    <div class="container">
      <Heading :level="2" class="mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg">
        {{ awards.title }}
      </Heading>
      <div class="flex items-center justify-between flex-wrap gap-mobile-lg sm:gap-tablet-lg lg:gap-desktop-lg">
        <template v-for="(image, index) in awards.image">
          <img
            :key="image.image_item + index"
            class="block min-w-[50px] max-w-[150px] sm:max-w-[230px]"
            :src="image.image_item"
            :alt="awards.title">
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AwardsSection',
  computed: {
    ...mapGetters('about', ['awards'])
  }
};
</script>

<style lang="scss" scoped>
.awards-block {
  @apply text-center bg-white py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg;
}
</style>