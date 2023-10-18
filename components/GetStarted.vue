<template lang="html">
  <section class="offices py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg">
    <div class="container">
      <Heading :level="2" class="mb-2.5 lg:max-w-690 mx-auto text-center">
        {{ getStarted.title }}
      </Heading>
      <p class="text-center text-base font-light mx-auto lg:max-w-780">
        {{ getStarted.description }}
      </p>
      <div class="line-separated" />
      <div class="flex justify-center flex-col sm:flex-row">
        <div class="locations mb-11 sm:mb-0 sm:mr-8 md:mr-16">
          <div class="my-auto">
            <Heading :level="3" class="mb-2.5">
              {{ getStarted.location_1.title }}
            </Heading>
            <a class="locations-link" :href="getStarted.location_1.link" @click.prevent="goToTab(getStarted.location_1)">
              <img class="mr-desktop-sm" src="/shapes/arrow-cta.svg"> {{ getStarted.location_1.link_text }}
            </a>
          </div>
        </div>
        <div class="locations sm:ml-8 md:ml-16">
          <div class="my-auto">
            <Heading :level="3" class="mb-2">
              {{ getStarted.location_2.title }}
            </Heading>
            <a class="locations-link" :href="getStarted.location_2.link" @click.prevent="goToTab(getStarted.location_2)">
              <img class="mr-desktop-sm" src="/shapes/arrow-cta.svg"> {{ getStarted.location_2.link_text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['getStarted'])
  },
  methods: {
    ...mapActions('contact', ['setActiveTab']),
    goToTab(location) {
      if (location.title) {
        const tab = location.title.toLowerCase().split(' ').join('-');
        this.setActiveTab(tab);
      }

      this.$router.push('/contact');
    }
  }
};
</script>

<style lang="scss" scoped>
.line-separated {
   @apply h-px bg-almost-200 my-mobile-lg sm:my-tablet-lg lg:my-desktop-lg;
}
.offices {
  .container {
    @include mobile {
      max-width: 520px;
    }
  }
  .locations {
    @apply py-3 pl-12 lg:pl-14 w-[400px] max-w-full flex flex-col min-h-[115px] sm:min-h-[105px];

    @include mobile {
      margin-left: auto;
      margin-right: auto;
    }
    &:first-child,
    &:last-child {
      background-size: auto 100%;
      background-repeat: no-repeat;
    }
    &:first-child {
      @apply bg-right pl-0 sm:pl-12 sm:bg-left;
      background-image: url('/shapes/frame-04.svg');
    }
    &:last-child {
      background-image: url('/shapes/frame-01.svg');
    }
    &-link {
      @apply inline-flex text-p-all-small uppercase font-medium tracking-1 max-w-[250px] sm:max-w-full;
    }
    img {
      transform: translateX(0px);
      transition: 0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
    }
    &:hover {
      img {
        transform: translateX(10px);
      }
    }
  }
}
</style>