<template>
  <section v-if="relatedPosts.length > 0" class="related-posts">
    <div class="container">
      <Heading :level="2" class="text-center mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg">
        Related Posts
      </Heading>
      <div class="post-list">
        <post-card
          v-for="(post, index) in relatedPosts"
          :key="index"
          :slug="post.post_name"
          :post-date="post.formatted_post_date"
          :headline="post.post_title"
          :categories="post.categories"
          :scope="post.categories"
          class="post-list-item"
          :image="post.acf.thumbnail"
          content-position="bottom"
          :title-variant="3"
          :cat-color="post.categories[0].color" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RelatedPostsSection',
  computed: {
    ...mapState('blog', ['post']),
    relatedPosts() {
      return this.post.acf.related_posts;
    }
  }
};
</script>

<style lang="scss" scoped>
.related-posts{
  @apply bg-karl
  py-mobile-xx-lg
  sm:py-tablet-xx-lg
  lg:py-desktop-xx-lg;
}
.post-list{
  @apply mx-auto max-w-[500px] md:max-w-full md:grid sm:grid-cols-12 md:gap-x-mobile-sm lg:gap-x-desktop-lg;

  &-item{
    @apply md:col-span-4 mb-mobile-x-lg md:mb-0 last:mb-0;
  }
}
</style>