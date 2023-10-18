<template>
  <div class="mb-mobile-xx-lg sm:mb-tablet-xx-lg lg:mb-desktop-xx-lg">
    <div
      class="hero-image-block"
      :style="caseStudyBg" />
    <div class="container sm:flex">
      <div class="sm:flex-1">
        <div class="uppercase font-medium mb-5 text-p-all-small tracking-wider">
          {{ clientName }}
        </div>
        <Heading :level="2" class="mb-2.5">
          {{ campaignHeadline }}
        </Heading>
        <div class="text-subheader mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg">
          {{ shortDescription }}
        </div>
        <cta-btn class="btn-arizona-sunset" type="primary" :blank="liveSiteLink.targetz" external :to="liveSiteLink.url">
          {{ liveSiteLink.title }}
        </cta-btn>
      </div>
      <div class="md:w-[250px] mt-[80px] sm:mt-[110px] sm:ml-[80px] md:ml-[160px]">
        <Heading class="text-left mb-2.5" :level="3">
          Scope
        </Heading>
        <ul class="list-disc list-inside">
          <template v-for="type in caseStudyTypes">
            <li :key="type.term_id" v-html="type.name" />
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'PageHeader',
  computed: {
    ...mapGetters('caseStudy', [
      'clientName',
      'campaignHeadline',
      'shortDescription',
      'thumbnailImage',
      'caseStudyTypes',
      'liveSiteLink'
    ]),
    caseStudyBg() {
      return `background-image:url(${this.thumbnailImage})`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .hero-image-block {
    @apply relative
    bg-center
    bg-no-repeat
    bg-cover
    h-[400px]
    sm:h-[550px]
    lg:h-[700px]
    mb-mobile-lg
    sm:mb-tablet-lg
    lg:mb-desktop-lg;

    &::after {
      @apply absolute inset-0;
      content: '';
      background-color: rgba(0,0,0,.15);
    }
  }
</style>