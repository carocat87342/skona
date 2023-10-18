<template>
  <div class="location-card">
    <div class="location-card-image-block">
      <img class="location-card-image" :src="location.image.url" :alt="location.city">
    </div>
    <div class="location-card-text">
      <div class="uppercase text-p-all-small font-medium mb-2.5">
        {{ location.city }}
      </div>
      <Heading :level="3" class="mb-2.5">
        {{ location.title }}
      </Heading>
      <div v-html="location.address" />
      <div class="mt-mobile-md sm:mt-tablet-md lg:mt-desktop-md">
        <cta-btn
          class="btn-arizona-sunset"
          :target="location.cta.target"
          @click="goToTab(location)">
          {{ location.cta.title }}
        </cta-btn>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'LocationCard',
  props: {
    location: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions('contact', ['setActiveTab']),
    goToTab(location) {
      if (location.city) {
        const tab = location.city.toLowerCase().split(' ').join('-');
        this.setActiveTab(tab);
      }

      this.$router.push('/contact');
    }
  }
};
</script>

<style lang="scss" scoped>
.location-card {
  @apply relative
  z-1
  cursor-pointer
  sm:h-[390px]
  md:h-[490px]
  lg:h-[670px]
  flex
  flex-col
  justify-end;

  &:last-child {
    @apply sm:h-[360px] md:h-[450px] lg:h-[640px];

    .location-card-image-block {
      @include desktop-tablet {
        -webkit-mask-image: url('/shapes/main/img-shape-4.svg');
        mask-image: url('/shapes/main/img-shape-4.svg');
      }
    }
  }
  &-text {
    @apply text-almost
    sm:text-white
    max-w-full
    sm:w-[200px]
    sm:mx-[50px]
    md:mx-[60px]
    lg:mx-[90px]
    sm:mb-[40px]
    lg:mb-[60px];
  }
  &-image-block {
    @apply bg-skona sm:absolute sm:inset-0 sm:-z-1 w-full h-full mb-mobile-md sm:mb-0;

    @include desktop-tablet {
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: 50%;
      mask-position: 50%;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-image: url('/shapes/main/img-shape-1.svg');
      mask-image: url('/shapes/main/img-shape-1.svg');
    }
  }
  &-image {
    @apply object-cover w-full h-full max-h-[300px] sm:max-h-full transition-opacity duration-300;
  }
  &:hover {
    .location-card-image {
      @apply opacity-50;
    }
  }
}

</style>