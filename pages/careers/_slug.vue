<template lang="html">
  <div>
    <page-header />

    <div class="page-content">
      <div class="container">
        <div class="page-content-container">
          <div class="page-content-block">
            <div class="text-content text-highlighted" v-html="highlightedText" />
            <div class="text-content-top" v-html="topContent" />

            <div class="page-content-sidebar block md:hidden">
              <call-to-action
                v-if="!hideSidebarModule && jobSidebarModule.show_module"
                class="page-cta-block"
                v-bind="{
                  title: jobSidebarModule.title,
                  content: jobSidebarModule.content,
                  cta: jobSidebarModule.cta
                }"
                @call-to-action="scrollToTheForm" />
            </div>

            <div class="text-content" v-html="content" />
          </div>

          <div class="page-content-sidebar hidden md:block">
            <call-to-action
              v-if="!hideSidebarModule && jobSidebarModule.show_module"
              class="page-cta-block"
              v-bind="{
                title: jobSidebarModule.title,
                content: jobSidebarModule.content,
                cta: jobSidebarModule.cta
              }"
              @call-to-action="scrollToTheForm" />
          </div>
        </div>
        <div class="page-content-footer">
          <share-on
            v-bind="{
              justify: 'end',
              size: 'sm',
              text: 'Share',
              url: siteUrl,
              quote: heroTitle,
              title: heroTitle,
              description: highlightedText,
            }" />
        </div>
      </div>
    </div>

    <apply-form />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PageHeader from '~/components/Careers/Jobs/PageHeader';
import ApplyForm from '~/components/Careers/Jobs/ApplyForm';
import pageMetadata from '~/mixins/pageMetadata';

export default {
  name: 'Jobs',
  components: { PageHeader, ApplyForm },
  mixins: [pageMetadata],
  async asyncData({ store, route, error }) {
    const slug = 'slug' in route.params
      ? route.params.slug
      : null;

    await store.dispatch('job/fetchJob', slug);

    if (!store.state.job.job) {
      error({ statusCode: 404, message: 'Page Not Found' });
    }
  },
  computed: {
    ...mapState('job', ['job']),
    meta() {
      return {
        title: this.job.acf.hero_title,
        description: this.job.acf.top_content
      };
    },
    content() {
      return this.job.acf.main_content;
    },
    jobSidebarModule() {
      return this.job.acf.job_sidebar_module;
    },
    hideSidebarModule() {
      return this.job.acf.show_sidebar_module;
    },
    heroTitle() {
      return this.job.acf.hero_title;
    },
    highlightedText() {
      return this.job.acf.highlighted_text;
    },
    topContent() {
      return this.job.acf.top_content;
    }
  },
  mounted() {
    this.$store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  },
  methods: {
    scrollToTheForm() {
      const form = document.querySelector('[data-scroll="apply-form"]');
      form.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
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

    & .page-cta-block {
      @include tablet-mobile {
        @apply my-mobile-x-lg;
      }
    }
  }
  &-footer {
    @apply border-t
    border-solid
    border-almost-200
    pt-mobile-sm
    sm:pt-tablet-md
    lg:pt-desktop-md
    mt-mobile-x-lg
    sm:mt-tablet-x-lg
    lg:mt-desktop-x-lg;
  }
}
</style>