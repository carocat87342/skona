<template lang="html">
  <div>
    <page-header />
    <skona-values-section />
    <skona-team-section />
    <skona-offices-section />
    <awards-section />
    <case-study-section />
    <get-started />
  </div>
</template>

<script>
import PageHeader from '~/components/About/PageHeader';
import pageMetadata from '~/mixins/pageMetadata';

export default {
  name: 'About',
  scrollToTop: true,
  components: {
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ store }) {
    await store.dispatch('about/fetchPageData');
    await store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  updated() {
    this.$store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  }
};
</script>

<style scoped>

</style>