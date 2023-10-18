<template lang="html">
  <div class="relative">
    <page-header class="bg-bi-coastal text-white" @scroll-to-cta="scrollTo" />

    <div class="bg-bi-coastal text-white pb-mobile-xx-lg sm:pb-tablet-xx-lg lg:pb-desktop-xx-lg">
      <div class="container">
        <div class="max-w-[760px] mx-auto text-center mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg">
          <Heading :level="2" class="mb-2.5">
            {{ pageDataAcf.loc_title }}
          </Heading>
          <p class="font-light">
            {{ pageDataAcf.loc_description }}
          </p>
        </div>
        <div class="location-list">
          <template v-for="(item, index) in locInfo">
            <location-card
              :key="item.title + index"
              :class="[index % 2!==0 && 'loc-card-revert', 'mb-10']"
              :city="item.city"
              :title="item.title"
              :description="item.description"
              :image="item.image" />
          </template>
        </div>
        <div class="mt-mobile-x-lg sm:mt-tablet-x-lg lg:mt-desktop-x-lg">
          <cta-btn
            type="secondary"
            color="white"
            :to="locCta.url">
            {{ locCta.title }}
          </cta-btn>
        </div>
      </div>
    </div>

    <openings />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

import PageHeader from '~/components/Careers/PageHeader';
import pageMetadata from '~/mixins/pageMetadata';
import LocationCard from '~/components/Careers/LocationCard';
import Openings from '~/components/Careers/Openings';

export default {
  name: 'Careers',
  components: {
    Openings,
    LocationCard,
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ store }) {
    await store.dispatch('careers/fetchPageData');
    await store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  },
  computed: {
    ...mapState('careers', ['pageData']),
    ...mapGetters('careers', ['pageDataAcf', 'locInfo', 'locCta']),
    meta() {
      return {
        title: this.pageDataAcf.hero_title,
        description: this.pageDataAcf.hero_description
      };
    }
  },
  updated() {
    this.$store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  },
  methods: {
    ...mapActions(['setHeaderAttributes']),
    scrollTo() {
      const itemTo = document.querySelector('[data-scroll="openings"]');
      itemTo.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
<style lang="scss">
.location-list {
  .loc-card {
    @apply mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg last:mb-0;
  }
}
</style>