<template>
  <section class="work-section">
    <div class="work-promo">
      <div class="work-promo-inner">
        <div class="container overflow-visible">
          <div class="sm:flex justify-between">
            <div class="work-promo-content-block">
              <Heading :level="2" class="mb-2.5">
                {{ work.promo_title }}
              </Heading>
              <p>
                {{ work.promo_description }}
              </p>
            </div>

            <div class="work-promo-slider-block">
              <swiper-images class="overflow-visible" :images="work.image_slider" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="work-list-block">
      <div class="container grid grid-cols-12 relative z-1">
        <div class="col-span-12 md:col-span-4">
          <Heading :level="2" class="pb-mobile-lg">
            {{ work.work_title }}
          </Heading>
        </div>
        <div class="col-span-12 md:col-span-8">
          <post-list-item
            v-for="caseStudy in work.works"
            :key="caseStudy.ID"
            class="work-list-item"
            :image="caseStudy.acf.thumbnail_image"
            :categories="caseStudy.acf.client_name"
            :title="caseStudy.acf.campaign_headline"
            :link="{ name: 'work-slug', params: { slug: caseStudy.post_name }}" />

          <div class="text-right mt-mobile-md md:mt-tablet-md lg:mt-desktop-md">
            <cta-btn
              class="btn-karl"
              :target="work.cta.target"
              :to="work.cta.url">
              {{ work.cta.title }}
            </cta-btn>
          </div>
        </div>
      </div>
      <Shape1 class="shape" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import PostListItem from '~/components/UI/PostListItem';
import Shape1 from '~/static/shapes/main/img-shape-1.svg?inline';

export default {
  name: 'WorkSection',
  components: {
    PostListItem,
    Shape1
  },
  computed: {
    ...mapGetters('services', ['work'])
  }
};
</script>

<style lang="scss">
.work-section{}
.work-promo {
  @apply bg-white
  py-mobile-xx-lg
  sm:py-tablet-xx-lg
  lg:py-desktop-xx-lg;

  &-inner {
    @apply overflow-hidden max-w-1920 mx-auto relative;
  }
  &-content-block {
    @apply sm:w-[40%] relative z-1;
  }
  &-slider-block {
    @apply mt-mobile-lg sm:mt-0 sm:w-[60%] lg:max-w-[568px] sm:ml-tablet-lg lg:ml-desktop-x-lg relative z-0;

    .swiper-container {
      overflow: visible !important;

      @include desktop-tablet {
        &::before {
          content: '';
          position: absolute;
          right: 100%;
          top: -10px;
          bottom: -10px;
          z-index: 5;
          width: 100vw;
          background-color: $white;
        }
      }
    }
    .swiper-slide {
      @apply h-[300px] sm:h-[340px];

      & img {
        @apply max-h-full;
      }
    }
  }
}
.work-list-block {
  @apply bg-wise-sage-200 py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg relative;

  .shape {
    @apply fill-current text-white opacity-10 absolute inset-y-0 right-0 z-0 h-full max-w-none;
  }
}

.work-list-item {
  &.post-list-item {
    @include mobile {
      display: block !important;
    }

    .post-image-block {
      @apply w-full sm:w-[254px] min-w-[254px] h-[194px] sm:h-[156px] mb-mobile-sm sm:mb-0;

      @media (min-width: 400px) and (max-width: 768px) {
        height: 250px;
      }
    }
  }
}
</style>