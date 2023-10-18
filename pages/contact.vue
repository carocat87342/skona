<template lang="html">
  <div>
    <div class="contact-page">
      <div class="container relative z-1">
        <div class="md:flex md:justify-between">
          <div class="pb-20 md:pb-0 md:max-w-[673px] md:mr-4">
            <h2 class="page-title">
              {{ pageTitle }}
            </h2>
            <p class="font-light lg:leading-[26px]">
              {{ description }}
            </p>
            <contact-form class="mt-mobile-x-lg sm:mt-tablet-x-lg lg:mt-desktop-x-lg" />
          </div>
          <div class="mx-auto max-w-[360px] sm:flex sm:mx-0 sm:max-w-none md:block md:max-w-[360px]">
            <template v-for="(contactInfo,key) in contactsInfo">
              <contact-info :key="key" :class="{ 'contact-blue' : key === 1}" v-bind="{ contactInfo }" />
            </template>
          </div>
        </div>
      </div>

      <Shape1 class="fill-current text-karl absolute inset-y-0 right-0 z-0 h-full max-w-none" />
    </div>
  </div>
</template>

<script>
import pageMetadata from '~/mixins/pageMetadata';
import Shape1 from '~/static/shapes/main/img-shape-1.svg?inline';

export default {
  name: 'Contact',
  components: {
    Shape1
  },
  mixins: [pageMetadata],
  async asyncData(ctx) {
    const contactData = await ctx.$api.page.getContact();

    return {
      pageTitle: contactData.title,
      description: contactData.description,
      contactsInfo: contactData.contact_info
    };
  },
  computed: {
    meta() {
      return {
        title: 'B2B Creative Agency in San Francisco & Stockholm',
        sharecard: '',
        description: 'With offices in San Francisco and Stockholm, Sköna is a full service B2B creative agency that transforms high tech companies into high tech brands.',
        url: 'skona.com'
      };
    }
  }
};
</script>

<style scoped lang="scss">
.contact-page {
  @apply bg-karl-300 relative min-h-screen pb-mobile-xx-lg pt-32 lg:pt-48 sm:pt-[10.75rem] sm:pb-[7.5rem] lg:pb-[11.25rem];
}
.page-title{
  @apply text-h2-mob sm:text-h2-tab lg:text-h2-desk leading-none lg:leading-[60px] mb-[0.625rem]
}
</style>