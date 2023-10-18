<template>
  <div class="py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg">
    <div class="container">
      <div class="case-study-list">
        <case-study-card
          v-if="firstCaseStudy"
          :slug="firstCaseStudy.post_name"
          :case_study="firstCaseStudy"
          :scope="firstCaseStudy.scope"
          class="case-study-featured"
          :client="firstCaseStudy.acf.client_name"
          :headline="firstCaseStudy.acf.campaign_headline"
          :text="firstCaseStudy.acf.short_description"
          :image="firstCaseStudy.acf.thumbnail_image"
          button-view="btn-bi-coastal" />
        <template v-for="caseStudy in computedCaseStudies">
          <case-study-card
            :key="caseStudy.ID"
            :slug="caseStudy.post_name"
            :case_study="caseStudy"
            :scope="caseStudy.scope"
            class="col-span-12 sm:col-span-6"
            :client="caseStudy.acf.client_name"
            :headline="caseStudy.acf.campaign_headline"
            :image="caseStudy.acf.thumbnail_image"
            content-position="bottom"
            :button-more="false"
            :title-variant="3" />
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
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'CaseStudiesSection',
  computed: {
    ...mapState('work', ['caseStudies']),
    ...mapGetters('work', ['firstCaseStudy', 'isLastPage']),
    computedCaseStudies() {
      const cards = [...this.caseStudies];

      cards.shift();

      return cards;
    }
  },
  methods: {
    ...mapActions('work', ['increasePageCounter'])
  }
};
</script>

<style lang="scss">
.case-study-list {
  @apply grid
  grid-cols-12
  sm:gap-x-mobile-lg
  lg:gap-x-desktop-lg
  gap-y-mobile-x-lg
  lg:gap-y-desktop-x-lg;
}
.case-study-featured {
  @apply col-span-12;

  & .cs-image {
    @apply lg:h-[450px];
  }
  &.cs-content-right {
    .cs-image-block {
      @apply sm:col-span-7 lg:col-span-8;
    }

    .cs-content-block {
      @apply sm:col-span-5 lg:col-span-4;
    }
  }
}
</style>