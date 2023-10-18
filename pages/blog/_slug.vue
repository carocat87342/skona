<template lang="html" v-if="post">
  <div class="post-page">
    <page-header />

    <div class="page-content">
      <div class="container">
        <div class="page-content-container">
          <div class="page-content-block">
            <div class="text-content text-highlighted" v-html="highlightedText" />

            <post-sidebar hide-breakpoint="md" />

            <div class="text-content" v-html="content" />

            <div class="quote" v-html="quote" />
          </div>

          <post-sidebar show-breakpoint="md" />
        </div>

        <div class="page-content-footer">
          <div v-if="authorName" class="author-block">
            <div class="author-block-image">
              <img
                :src="authorAvatar ? authorAvatar : '/images/img-author-thumbnail.svg'"
                class="object-cover w-full h-full"
                :alt="title">
            </div>
            <div class="author-block-text">
              <Heading :level="3" class="mb-2.5">
                {{ authorName }}
              </Heading>
              <div class="uppercase text-p-all-small font-medium">
                {{ authorPosition }}
              </div>
            </div>
          </div>
          <share-on
            class="post-share"
            v-bind="{
              justify: 'end',
              size: 'sm',
              text: 'Share',
              url,
              quote: title,
              title,
              description: highlightedText,
            }" />
        </div>
      </div>
    </div>
    <subscribe-form />
    <related-posts-section />
    <get-started />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import pageMetadata from '~/mixins/pageMetadata';
import PageHeader from '~/components/Blog/Item/PageHeader';

export default {
  name: 'BlogPost',
  components: {
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ route, store, error }) {
    await store.dispatch('blog/fetchPost', {
      name: route.params.slug
    });
    await store.dispatch('blog/fetchMostReadPosts');

    if (!store.state.blog.post) {
      error({ statusCode: 404, message: 'Page Not Found' });
    }
  },
  data() {
    return {
      slug: this.$route.params.slug,
      viewsTimer: null
    };
  },
  computed: {
    ...mapState('blog', ['post']),
    meta() {
      return {
        title: this.title,
        sharecard: this.post.acf.thumbnail ?? null,
        description: this.post.meta_description ?? null
      };
    },
    hash() {
      return this.post.hash;
    },
    title() {
      return this.post.post_title;
    },
    url() {
      return `${this.$config.WEBSITE_URL}${this.$route.fullPath}`;
    },
    content() {
      return this.post.post_content;
    },
    highlightedText() {
      return this.post.acf.introduction_text ?? '';
    },
    quote() {
      return this.post.acf.quote;
    },
    authorName() {
      return this.post.acf.author.user_firstname || this.post.acf.author.user_lastname
        ? `${this.post.acf.author.user_firstname} ${this.post.acf.author.user_lastname}`
        : this.post.acf.author.user_nicename;
    },
    authorPosition() {
      return this.post.acf.author.acf.position;
    },
    authorAvatar() {
      return this.post.acf.author.acf.avatar;
    }
  },
  created() {
    this.$store.dispatch('blog/fetchMostReadPosts');
  },
  mounted() {
    this.viewsTimer = setTimeout(() => this.addViews({ hash: this.hash }), 30000);
  },
  destroyed() {
    clearTimeout(this.viewsTimer);
  },
  methods: {
    ...mapActions('blog', ['addViews'])
  }
};
</script>

<style lang="scss">
.post-page {
  .page-content {
    @apply bg-white
    pt-mobile-x-lg
    sm:pt-tablet-x-lg
    lg:pt-desktop-x-lg
    pb-mobile-xx-lg
    sm:pb-tablet-xx-lg
    lg:pb-desktop-xx-lg;

    &-container {
      @apply md:flex md:justify-between;
    }
    &-block {
      @apply md:max-w-content;
    }
    &-sidebar {
      @apply w-full md:min-w-[280px] md:max-w-sidebar md:ml-desktop-md;

      & > div {
        @apply mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg last:mb-0;
      }
      & .call-to-action-card {
        @include tablet-mobile {
          @apply my-mobile-x-lg;
        }
      }
    }
    &-footer {
      @apply border-t
      border-solid
      border-almost-200
      sm:pt-tablet-md
      lg:pt-desktop-md
      mt-mobile-x-lg
      sm:mt-tablet-x-lg
      lg:mt-desktop-x-lg
      sm:flex
      sm:justify-between
      sm:items-center;
    }

    .quote {
      @apply mt-mobile-md sm:mt-tablet-md lg:mt-desktop-md;
    }
    .quote h5,
    blockquote {
      @apply text-big-blue
      font-kepler-std-display
      font-black
      leading-h2-mob
      sm:leading-h2-tab
      lg:leading-h2-desk
      text-h2-mob
      sm:text-h2-tab
      lg:text-h2-desk;

      &:not(:last-child) {
        @apply mb-mobile-md sm:mb-tablet-md lg:mb-desktop-md;
      }
    }
  }

  .author-block {
    @apply flex items-center w-full;

    @include mobile {
      @apply border-b
      border-solid
      border-almost-200
      pt-mobile-lg
      pb-mobile-lg;
    }

    &-image {
      @apply rounded-[50%] w-[56px] h-[56px] sm:w-[108px] sm:h-[108px] overflow-hidden;
    }
    &-text {
      @apply ml-mobile-md sm:ml-tablet-md lg:ml-desktop-md
    }
  }
  .post-share {
    @apply mt-mobile-sm sm:mt-0 sm:ml-auto;
  }
}
</style>