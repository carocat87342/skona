<template lang="html">
  <div class="page-header">
    <div class="page-header-inner">
      <div class="container w-full">
        <div class="page-header-location">
          {{ locations }}
        </div>
        <Heading class="max-w-[520px]" :level="2">
          {{ acf.hero_title }}
        </Heading>
        <div class="mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg">
          <cta-btn
            type="secondary"
            size="sm"
            color="white"
            arrow-direction="left"
            to="/careers">
            Careers
          </cta-btn>
        </div>
      </div>
      <Shape1 class="shape" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { getCategories } from '~/services/post';
import Shape1 from '~/static/shapes/main/img-shape-1.svg?inline';

export default {
  name: 'PageHeader',
  components: {
    Shape1
  },
  computed: {
    ...mapState('job', ['job']),
    ...mapGetters('job', ['acf']),
    locations() {
      return getCategories(this.job.locations);
    },
    id() {
      return this.job.ID;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  @apply bg-bi-coastal text-white;

  &-inner {
    @apply relative
    max-w-1920
    mx-auto
    flex
    justify-end
    flex-col
    min-h-[410px]
    sm:min-h-[544px]
    py-mobile-x-lg
    sm:py-tablet-x-lg
    lg:py-desktop-x-lg;
  }
  &-location {
    @apply uppercase font-medium text-p-all-small mb-mobile-sm sm:mb-tablet-sm;
  }
}
.shape {
  @apply fill-current text-white opacity-5 absolute inset-y-0 right-0 z-0 h-full max-w-none;
}
</style>