<template>
  <section class="values-section">
    <div class="container">
      <div class="text-center max-w-780 mx-auto mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg">
        <Heading :level="2" class="mb-2.5">
          {{ values.title }}
        </Heading>
        <p>
          {{ values.description }}
        </p>
      </div>
      <div class="values-list">
        <div v-for="(item, index) in values.item" :key="index" class="values-list-item">
          <div class="values-image">
            <img :src="item.image" class="w-full h-full" alt="">
          </div>
          <Heading :level="3" class="values-title">
            {{ item.title }}
          </Heading>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SkonaValuesSection',
  computed: {
    ...mapGetters('about', ['values'])
  }
};
</script>

<style lang="scss" scoped>
.values-section {
 @apply bg-white py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg;
}

.values-list {
  @apply sm:grid sm:grid-cols-12 sm:gap-mobile-md md:gap-mobile-lg lg:gap-desktop-lg;

  &-item {
    @apply sm:col-span-4
    lg:col-span-3
    mt-[75px]
    first:mt-0
    sm:mt-0
    mx-auto
    sm:mx-0
    max-w-[400px]
    sm:max-w-[255px];
  }
}
.values-image {
  @apply bg-karl;
}
.values-title {
  @apply mt-mobile-sm sm:mt-tablet-sm lg:mt-desktop-sm;
}
</style>