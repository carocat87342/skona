<template lang="html">
  <section class="latest-blog py-mobile-xx-lg md:py-desktop-xx-lg relative bg-karl-300">
    <div class="container grid grid-cols-12">
      <div class="col-span-12 md:col-span-4">
        <Heading :level="2" class="pb-mobile-lg">
          {{ latestBlogTitle }}
        </Heading>
      </div>
      <div
        v-if="latestPosts && latestPosts.length"
        class="mb-4 col-span-12 md:col-span-8">
        <post-list-item
          v-for="(post, index) in latestPosts.slice(0, 4)"
          :key="index"
          :categories="getCategories(post.categories)"
          :cat-color="getCategoriesColor(post.categories)"
          :date="post.formatted_post_date"
          :title="post.post_title"
          :link="{ name: 'blog-slug', params: { slug: post.post_name }}" />
        <div class="latest-blog-cta-block">
          <cta-btn :to="latestBlogButton.url" :target="latestBlogButton.target" class="btn-wise-sage">
            {{ latestBlogButton.title }}
          </cta-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getCategories } from '@/services/post';
import { mapState } from 'vuex';

import CtaBtn from '~/components/UI/CtaBtn';
import PostListItem from '~/components/UI/PostListItem';

export default {
  components: { PostListItem, CtaBtn },
  props: {
    latestBlogTitle: {
      required: true,
      type: String,
      default: 'The latest'
    },
    latestBlogButton: {
      required: false,
      type: Object,
      default: () => ({
        title: 'Visit Skona Blog',
        url: '/blog',
        target: ''
      })
    }
  },
  computed: {
    ...mapState(['latestPosts'])
  },
  methods: {
    getCategories,
    getCategoriesColor(cat) {
      return cat.length ? cat[0].color : '';
    }
  }
};
</script>

<style lang="scss" scoped>
.latest-blog-cta-block{
  @apply text-right mt-mobile-md md:mt-tablet-md lg:mt-desktop-md;
}
</style>