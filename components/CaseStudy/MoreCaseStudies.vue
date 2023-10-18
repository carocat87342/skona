<template>
  <section v-if="moreCaseStudies.length > 0" class="more-case-studies">
    <div class="container">
      <Heading :level="2" class="text-center">
        {{ moreCaseStudiesTitle }}
      </Heading>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-16 my-mobile-x-lg sm:my-tablet-x-lg lg:my-desktop-x-lg">
        <template v-for="caseStudy in moreCaseStudies">
          <case-study-card
            :id="caseStudy.ID"
            :key="caseStudy.ID"
            :slug="caseStudy.post_name"
            :case_study="caseStudy"
            :scope="caseStudy.scope"
            :client="caseStudy.acf.client_name"
            :headline="caseStudy.acf.campaign_headline"
            :image="caseStudy.acf.thumbnail_image"
            content-position="bottom"
            :button-more="false"
            :title-variant="3" />
        </template>
      </div>
      <!-- Separate line CTA -->
      <cta-btn
        v-if="moreCaseStudies.length > 0"
        :to="allCaseStudiesLink.url"
        external
        :target="allCaseStudiesLink.target"
        type="secondary"
        class="btn-load-more">
        {{ allCaseStudiesLink.title }}
      </cta-btn>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MoreCaseStudies',
  computed: {
    ...mapGetters('caseStudy', ['moreCaseStudiesTitle', 'moreCaseStudies', 'allCaseStudiesLink'])
  }
};
</script>

<style scoped>
.more-case-studies {
  @apply bg-karl py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg mt-mobile-xx-lg sm:mt-tablet-xx-lg lg:mt-desktop-xx-lg;
}
</style>