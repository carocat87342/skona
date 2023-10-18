<template>
  <div>
    <div class="post-list">
      <template v-for="(post, index) in posts">
        <post-card
          :key="index"
          :slug="post.post_name"
          :post-date="post.formatted_post_date"
          :headline="post.post_title"
          :categories="post.categories"
          :scope="post.categories"
          class="col-span-12 sm:col-span-6 lg:col-span-4"
          :image="post.acf.thumbnail"
          content-position="bottom"
          :title-variant="3"
          :cat-color="post.categories[0].color" />
      </template>
    </div>
    <posts-loader />
    <!-- Separate line CTA -->
    <div
      v-if="!isLastPage"
      class="relative pt-mobile-x-lg md:pt-tablet-x-lg lg:pt-desktop-x-lg">
      <cta-btn
        type="secondary"
        @click="increasePageCounter">
        LOAD MORE
      </cta-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'PostsSection',
  computed: {
    ...mapGetters('blog', ['isLastPage']),
    ...mapState('blog', ['posts'])
  },
  methods: {
    ...mapActions('blog', ['increasePageCounter', 'addPosts'])
  }
};
</script>

<style lang="scss" scoped>
.post-list {
  @apply grid
  grid-cols-12
  sm:gap-x-mobile-lg
  lg:gap-x-desktop-lg
  gap-y-mobile-x-lg
  lg:gap-y-[110px];
}
</style>