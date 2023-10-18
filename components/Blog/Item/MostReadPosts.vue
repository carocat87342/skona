<template>
  <div class="most-read-posts">
    <Heading :level="3" class="mb-mobile-md sm:mb-tablet-md lg:mb-desktop-md">
      The most read
    </Heading>
    <div>
      <template v-for="(post) in mostReadPosts">
        <post-list-item
          :key="post.ID"
          :size="'sm'"
          :arrow="false"
          :formatted-date="post.formatted_post_date"
          :categories="getCategories(post.categories)"
          :cat-color="getCategoriesColor(post.categories)"
          :title="post.post_title"
          :link="{ name: 'blog-slug', params: { slug: post.post_name }}" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getCategories } from '@/services/post';

export default {
  name: 'MostReadPosts',
  computed: {
    ...mapState('blog', ['mostReadPosts'])
  },
  methods: {
    getCategories,
    getCategoriesColor(cat) {
      return cat.length ? cat[0].color : '';
    }
  }
};
</script>

<style lang="scss">
.most-read-posts {
  @apply bg-karl p-mobile-md lg:p-desktop-md;

  & .post-image-block {
    margin-right: 20px !important;
  }
  & .post-list-item {
    @apply last:pb-0 last:mb-0 last:border-0;
  }
}
</style>