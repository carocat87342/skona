<template>
  <div>
    <div class="relative overflow-hidden z-10">
      <!-- Hero section -->
      <hero
        :hero-title="home.acf.hero_title"
        :hero-description="home.acf.hero_description"
        :hero-image="home.acf.hero_image"
        :hero-cta="home.acf.hero_cta" />
      <section>
        <div class="container">
          <!-- Case study section -->
          <case-study-card
            v-for="(case_study, index) in home.acf.case_study"
            :key="index"
            :slug="case_study.post_name"
            class="case-study-item"
            :scope="case_study.case_study_type"
            :client="case_study.acf.client_name"
            :headline="case_study.acf.campaign_headline"
            :text="case_study.acf.short_description"
            :image="case_study.acf.thumbnail_image"
            :image-first="(index % 2===0)" />
          <!-- Separate line CTA -->
          <div
            class="relative pb-mobile-xx-lg md:pb-tablet-xx-lg lg:pb-desktop-xx-lg">
            <cta-btn type="secondary" :to="home.acf.case_study_cta.url">
              {{ home.acf.case_study_cta.title }}
            </cta-btn>
          </div>
        </div>
      </section>
      <!-- Quotes section -->
      <timed-carousel v-bind="{ quotes }" />
      <!-- Blogs section -->
      <latest-blog-posts
        :latest-blog-title="home.acf.blog_latest_title"
        :latest-blog-button="home.acf.blog_latest_cta" />
      <!-- Life at skona section -->
      <life-at-skona
        :life-at-skona-title="home.acf.life_at_skona_title"
        :life-at-skona-description="home.acf.life_at_skona_description"
        :life-at-skona-cta="home.acf.life_at_skona_cta"
        :life-at-skona-images="home.acf.life_at_skona_slider_images" />

      <!-- Get started section -->
      <get-started />
    </div>
  </div>
</template>

<script>

import pageMetadata from '~/mixins/pageMetadata';
import CtaBtn from '~/components/UI/CtaBtn';

export default {
  components: { CtaBtn },
  mixins: [pageMetadata],
  async asyncData({ store, $api }) {
    const [home, quotes] = await Promise.all([
      $api.page.getHome(),
      $api.quote.getQuotes()
    ]);

    await store.dispatch('getLatestPosts');

    return {
      home,
      quotes
    };
  },
  data() {
    return {
      config: this.$config,
      env: process.env,
      home: {
        acf: {
          hero_title: '',
          hero_description: '',
          hero_image: '',
          hero_cta: {},
          case_study: {},
          case_study_cta: {},
          blog_latest_title: '',
          blog_latest_cta: {},
          life_at_skona_cta: {},
          life_at_skona_title: '',
          life_at_skona_description: '',
          life_at_skona: {}
        }
      }
    };
  }
};
</script>

<style lang="scss">
.case-study-item {
  @apply my-mobile-xx-lg sm:my-tablet-xx-lg lg:my-desktop-xx-lg;

  & .cs-image {
    @apply lg:h-[450px];
  }
  .cs-image-block {
    & + .cs-content-block {
      @apply lg:mr-24;
    }
    &.card-image-last + .cs-content-block {
      @apply lg:ml-24 lg:mr-0;
    }
  }
}
</style>