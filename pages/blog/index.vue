<template>
  <div>
    <skona-header />
    <page-header :title="heroTitle" :description="heroDescription" />
    <div class="bg-white py-mobile-xx-lg sm:py-tablet-xx-lg md:py-desktop-xx-lg">
      <div class="container">
        <div v-if="featuredFirstPost" class="post-featured-list">
          <post-card
            :key="featuredFirstPost.ID"
            :slug="featuredFirstPost.post_name"
            :post-date="featuredFirstPost.formatted_post_date"
            :headline="featuredFirstPost.post_title"
            :intro-text="featuredFirstPost.acf.introduction_text"
            :categories="featuredFirstPost.categories"
            class="col-span-12"
            :image="featuredFirstPost.acf.thumbnail"
            content-position="right"
            :cat-color="featuredFirstPost.categories[0].color"
            :featured="true" />

          <template v-for="(post, index) in featuredSecondThirdPosts">
            <post-card
              :key="post.ID"
              :slug="post.post_name"
              :post-date="post.formatted_post_date"
              :headline="post.post_title"
              :categories="post.categories"
              class="col-span-12 sm:col-span-6"
              :image="post.acf.thumbnail"
              content-position="bottom"
              :cat-color="post.categories[0].color"
              :featured="true"
              :button-more-style="index === 0 ? 'btn-big-blue' : 'btn-mustard'" />
          </template>
        </div>
      </div>
    </div>

    <div class="relative bg-karl pt-px">
      <categories class="blog-category" theme="orange" v-bind="{ categories }" :displayed-category="category" />
      <div class="py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg">
        <div class="container">
          <posts-section />
        </div>
      </div>
    </div>

    <get-started />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import PageHeader from '~/components/Blog/PageHeader';
import pageMetadata from '~/mixins/pageMetadata';

export default {
  name: 'Blog',
  components: {
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ store, route }) {
    const category = 'category' in route.query
      ? route.query.category
      : null;

    await store.dispatch('blog/fetchPosts', { category });
    await store.dispatch('blog/fetchBlogData');
  },
  data() {
    const category = 'category' in this.$route.query ? this.$route.query.category : '';
    return {
      category
    };
  },
  computed: {
    ...mapState('blog', ['page', 'categories']),
    ...mapGetters('blog', ['featuredPosts', 'heroDescription', 'heroTitle']),
    featuredSecondThirdPosts() {
      return this.featuredPosts.length > 0 ? [...this.featuredPosts].slice(1, this.featuredPosts.length) : [];
    },
    featuredFirstPost() {
      return this.featuredPosts.length > 0 ? this.featuredPosts[0] : null;
    }
  },
  watch: {
    async '$route.query.category'(value) {
      this.$loadingStart();
      this.category = value;
      this.clearPosts();
      this.resetPageCounter();
      await this.fetchPosts();
      this.$loadingFinish();
    },
    async page(value) {
      if (value > 1) {
        this.startPostsLoader();
        await this.fetchPosts();
        this.stopPostsLoader();
      }
    }
  },
  destroyed() {
    this.reset();
  },
  methods: {
    ...mapActions(['startPostsLoader', 'stopPostsLoader']),
    ...mapActions('blog', ['resetPageCounter', 'clearPosts', 'reset']),
    async fetchPosts() {
      await this.$store.dispatch('blog/fetchPosts', {
        category: this.category
      });
    }
  }
};
</script>

<style lang="scss">
.post-featured-list {
  @apply grid
  grid-cols-12
  sm:gap-x-mobile-lg
  lg:gap-x-desktop-lg
  gap-y-mobile-x-lg
  lg:gap-y-desktop-x-lg;
}
.blog-category {
  @include mobile {
    padding: 0;

    & .category-list {
      @apply px-7;
    }
  }
}
</style>