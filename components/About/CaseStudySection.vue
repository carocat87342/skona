<template>
  <section class="case-study-section">
    <div class="container">
      <div class="sm:grid grid-cols-12 sm:gap-x-tablet-lg lg:gap-x-desktop-lg">
        <div class="sm:col-span-7 lg:col-span-6">
          <div class="uppercase text-p-all-small font-medium mb-mobile-sm sm:mb-desktop-sm">
            {{ caseStudy.scope }}
          </div>
          <Heading :level="2" class="mb-2.5">
            {{ caseStudy.title }}
          </Heading>
          <div class="text-content" v-html="caseStudy.description" />
          <div class="block sm:hidden my-mobile-lg">
            <img class="w-full" :src="caseStudy.image.url" :alt="caseStudy.title">
          </div>
          <div class="mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg">
            <cta-btn
              class="btn-wise-sage"
              :target="caseStudy.cta.target"
              :to="caseStudy.cta.url">
              {{ caseStudy.cta.title }}
            </cta-btn>
          </div>
        </div>
        <div class="hidden sm:block sm:col-span-5 lg:col-span-6">
          <img class="w-full" :src="caseStudy.image.url" :alt="caseStudy.title">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CaseStudySection',
  computed: {
    ...mapGetters('about', ['caseStudy'])
  }
};
</script>

<style scoped>
.case-study-section{
  @apply bg-bi-coastal text-white py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg;
}
</style>