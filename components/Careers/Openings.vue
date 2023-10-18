<template lang="html">
  <div class="openings-block" data-scroll="openings">
    <div class="container grid grid-cols-12">
      <div class="col-span-12 md:col-span-4">
        <Heading :level="2" class="pb-mobile-lg">
          {{ pageDataAcf.openings_title }}
        </Heading>
      </div>
      <div
        v-if="openingsData && openingsData.length"
        class="mb-4 col-span-12 md:col-span-8">
        <post-list-item
          v-for="post in openingsData"
          :key="post.ID"
          :categories="getCategories(post.categories)"
          :title="post.post_title"
          :link="{ name: 'careers-slug', params: { slug: post.post_name }}" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { getCategories } from '@/services/post';
import PostListItem from '~/components/UI/PostListItem';

export default {
  components: { PostListItem },
  computed: {
    ...mapGetters('careers', ['pageDataAcf', 'openingsData'])
  },
  methods: {
    getCategories
  }
};
</script>

<style lang="scss">
.openings-block {
  @apply bg-white py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg;

  & .post-meta {
    @apply text-bi-coastal;
  }
}
</style>