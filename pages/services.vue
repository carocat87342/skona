<template>
  <div>
    <page-header />
    <process-section />
    <services-section />
    <our-clients-section v-bind="{ clientsTitle, clientsLogo }" class="bg-bi-coastal" />
    <work-section />
    <get-started />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageHeader from '~/components/Services/PageHeader';
import pageMetadata from '~/mixins/pageMetadata';

export default {
  name: 'Services',
  components: {
    PageHeader
  },
  mixins: [pageMetadata],
  async asyncData({ store }) {
    await store.dispatch('services/fetchServicesPageData');
  },
  computed: {
    ...mapGetters('services', ['clientsTitle', 'clientsLogo'])
  }
};
</script>

<style scoped>

</style>