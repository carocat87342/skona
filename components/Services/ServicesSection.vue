<template>
  <section class="services-section">
    <div class="container">
      <div class="text-center mx-auto max-w-[980px]">
        <div class="uppercase text-p-all-small font-medium mb-mobile-sm sm:mb-desktop-sm">
          {{ services.subtitle }}
        </div>
        <Heading :level="2" class="mb-2.5">
          {{ services.title }}
        </Heading>
        <p v-if="services.description" class="font-light mb-2.5">
          {{ services.description }}
        </p>
      </div>
      <div class="services-list">
        <div v-for="(item, index) in services.service_item" :key="index" class="services-list-item">
          <Heading :level="3" class="mb-2.5">
            {{ item.title }}
          </Heading>
          <div class="sm:flex">
            <div class="sm:flex-1" v-html="item.text" />

            <div class="sm:w-[300px] md:w-[360px] max-w-full sm:ml-mobile-lg md:ml-desktop-lg mt-mobile-sm sm:mt-0">
              <ul class="list-disc list-inside">
                <li v-for="(subItem, index1) in item.service_list" :key="index1">
                  {{ subItem.item }}
                </li>
              </ul>
            </div>
          </div>

          <div class="sm:flex justify-end sm:mt-desktop-lg">
            <div
              v-for="(caseStudy, index2) in item.case_studies"
              :key="caseStudy.ID"
              :class="[index2 === 1 && 'sm:ml-mobile-lg md:ml-desktop-lg', 'mt-mobile-lg sm:mt-0']">
              <div class="mb-2.5 uppercase font-medium text-p-all-small leading-none">
                {{ caseStudy.acf.client_name }}
              </div>
              <NuxtLink
                class="case-study-link"
                :to="{ name: 'work-slug', params: { slug: caseStudy.post_name }}">
                <img class="w-full h-full object-cover" :src="caseStudy.acf.thumbnail_image" alt="">
              </NuxtLink>
            </div>
          </div>

          <div class="mt-mobile-md sm:mt-tablet-md lg:mt-desktop-md sm:ml-auto sm:max-w-[645px] md:max-w-[780px]">
            <cta-btn type="secondary" :target="item.cta.target" :to="item.cta.url">
              {{ item.cta.title }}
            </cta-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'ServicesSection',
  computed: {
    ...mapGetters('services', ['services'])
  }
};
</script>

<style lang="scss" scoped>
.services-section {
  @apply bg-white
  py-mobile-xx-lg
  sm:py-tablet-xx-lg
  lg:py-desktop-xx-lg;
}
.services-list {
  @apply mx-auto max-w-[990px] mt-mobile-x-lg sm:mt-tablet-x-lg lg:mt-desktop-x-lg;

  &-item{
    @apply relative z-1 mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg last:mb-0;

    &::after {
      @apply hidden max-h-full sm:block bg-karl-200 absolute left-0 bottom-0 -z-1 mb-[-50px];
      content: '';
      width: 359px;
      height: 359px;
      -webkit-mask-image:  url('/shapes/main/img-shape-7.svg');
      mask-image: url('/shapes/main/img-shape-7.svg');
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: 50%;
      mask-position: 50%;
      -webkit-mask-size: contain;
      mask-size: contain;
    }
    &:nth-child(1)::after {
      width: 315px;
      height: 371px;
      -webkit-mask-image:  url('/shapes/main/img-shape-1.svg');
      mask-image: url('/shapes/main/img-shape-1.svg');
    }
    &:nth-child(2)::after {
      height: 304px;
      -webkit-mask-image:  url('/shapes/main/img-shape-4.svg');
      mask-image: url('/shapes/main/img-shape-4.svg');
    }
    &:nth-child(4)::after {
      -webkit-mask-image:  url('/shapes/main/img-shape-8.svg');
      mask-image: url('/shapes/main/img-shape-8.svg');
    }
  }

  .case-study-link {
    @apply block sm:w-[300px] md:w-[360px] h-[130px] sm:h-[150px] max-w-full hover:opacity-90;

    @media (min-width: 400px) and (max-width: 768px) {
      height: 250px;
    }
  }
}
</style>