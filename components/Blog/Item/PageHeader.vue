<template>
  <div class="page-header">
    <div class="page-header-inner">
      <div class="container w-full relative z-1">
        <div class="sm:flex items-center justify-between">
          <div class="max-w-[675px] sm:pr-7">
            <div class="page-header-category">
              {{ getCategories(post.categories) }} | {{ post.formatted_post_date }}
            </div>
            <Heading :level="2">
              {{ post.post_title }}
            </Heading>
            <div class="mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg">
              <cta-btn
                type="secondary"
                size="sm"
                arrow-direction="left"
                to="/blog">
                Blog
              </cta-btn>
            </div>
          </div>
          <div class="page-header-image">
            <img :src="post.acf.thumbnail" :alt="post.post_title" class="object-cover w-full h-full">
          </div>
        </div>
      </div>
      <ShapeHero class="shape" :style="{ color }" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getCategories } from '~/services/post';
import ShapeHero from '~/static/shapes/main/img-shape-hero-post.svg?inline';

export default {
  name: 'PageHeader',
  components: {
    ShapeHero
  },
  computed: {
    ...mapState('blog', ['post']),
    color() {
      return this.post.categories && this.post.categories.length > 0
        ? this.post.categories[0].color
        : '';
    }
  },
  methods: {
    getCategories
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  @apply bg-karl;

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
  &-category {
    @apply uppercase font-medium text-p-all-small leading-p-all-small tracking-1 mb-mobile-sm sm:mb-tablet-sm;
  }
  &-image {
    @apply sm:min-w-[300px]
    sm:w-[300px]
    md:min-w-[360px]
    md:w-[360px]
    sm:h-[200px]
    md:h-[250px];

    @include mobile {
      @apply max-w-[500px] h-[250px] mt-mobile-x-lg mx-auto;
    }
  }
}
.shape {
  @apply fill-current absolute bottom-0 right-0 z-0 sm:top-0 h-[40%] sm:h-full;
}
</style>