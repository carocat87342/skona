<template>
  <div>
    <page-header />
    <div class="relative">
      <categories v-bind="{ categories }" :displayed-category="category" />

      <case-studies-section />
    </div>
    <our-clients-section v-bind="{ clientsLogo, clientsTitle }" />
    <get-started />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

import PageHeader from '~/components/Work/PageHeader';
import pageMetadata from '~/mixins/pageMetadata';

export default {
  name: 'Work',
  components: {
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ store, route }) {
    const category = 'category' in route.query ? route.query.category : null;

    await store.dispatch('work/fetchCaseStudies', { category });
    await store.dispatch('work/fetchWorkData');
    await store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  },
  data() {
    const category = 'category' in this.$route.query ? this.$route.query.category : '';
    return {
      category
    };
  },
  computed: {
    ...mapState('work', ['page', 'categories']),
    ...mapGetters('work', ['clientsLogo', 'clientsTitle'])
  },
  watch: {
    async '$route.query.category'(value) {
      this.$loadingStart();
      this.category = value;
      this.clearCaseStudies();
      this.resetPageCounter();
      await this.fetchCaseStudies();
      this.$loadingFinish();
    },
    async page(value) {
      if (value > 1) {
        this.startPostsLoader();
        await this.fetchCaseStudies();
        this.stopPostsLoader();
      }
    }
  },
  updated() {
    this.$store.dispatch('setHeaderAttributes', {
      theme: 'light'
    });
  },
  destroyed() {
    this.reset();
  },
  methods: {
    ...mapActions(['setHeaderAttributes', 'startPostsLoader', 'stopPostsLoader']),
    ...mapActions('work', ['resetPageCounter', 'clearCaseStudies', 'reset']),
    async fetchCaseStudies() {
      await this.$store.dispatch('work/fetchCaseStudies', {
        category: this.category
      });
    }
  }
};
</script>