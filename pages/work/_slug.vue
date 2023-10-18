<template>
  <transition>
    <div class="page slide">
      <page-header />
      <dynamic-content />
      <div class="container text-center my-mobile-xx-lg sm:my-tablet-xx-lg lg:my-desktop-xx-lg">
        <cta-btn
          class="btn-arizona-sunset"
          type="primary"
          :blank="liveSiteLink.target"
          external
          :to="liveSiteLink.url">
          {{ liveSiteLink.title }}
        </cta-btn>
        <share-on
          class="mt-11"
          v-bind="{
            url: siteUrl,
            networks,
            quote: campaignHeadline,
            title: campaignHeadline,
            description: shortDescription,
          }" />
      </div>
      <more-case-studies />
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import PageHeader from '~/components/CaseStudy/PageHeader';
import pageMetadata from '~/mixins/pageMetadata';
import { removeFacebookHook } from '~/services/post';

export default {
  components: {
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ store, route, error }) {
    const slug = 'slug' in route.params
      ? route.params.slug
      : null;

    await store.dispatch('caseStudy/fetchCaseStudy', slug);
    await store.dispatch('caseStudy/fetchSocialLinks');
    await store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });

    if (!store.state.caseStudy.caseStudy) {
      error({ statusCode: 404, message: 'Page Not Found' });
    }
  },
  data() {
    return {
      networks: [
        'twitter',
        'linkedin',
        'facebook'
      ]
    };
  },
  computed: {
    ...mapState('caseStudy', ['caseStudy']),
    ...mapGetters('caseStudy', [
      'liveSiteLink',
      'campaignHeadline',
      'thumbnailImage',
      'shortDescription'
    ]),
    meta() {
      return {
        title: this.campaignHeadline,
        description: this.shortDescription,
        sharecard: this.thumbnailImage
      };
    }
  },
  created() {
    if (process.client) { removeFacebookHook(); }
  }
};
</script>
<style lang="scss" scoped>

</style>