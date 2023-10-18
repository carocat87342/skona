<template>
  <section class="offices-section">
    <div class="container">
      <div class="text-center max-w-780 mx-auto mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg">
        <Heading :level="2" class="mb-2.5">
          {{ offices.title }}
        </Heading>
        <p>
          {{ offices.description }}
        </p>
      </div>
      <div class="offices-cards">
        <location-card
          v-for="location in offices.loc_info"
          :key="location.city"
          class="offices-cards-item"
          v-bind="{ location }" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import LocationCard from '~/components/About/LocationCard';

export default {
  name: 'SkonaOfficesSection',
  components: {
    LocationCard
  },
  computed: {
    ...mapGetters('about', ['offices'])
  }
};
</script>

<style lang="scss" scoped >
#__nuxt {
  .offices-section {
    @apply bg-karl pb-mobile-xx-lg sm:pb-tablet-xx-lg lg:pb-desktop-xx-lg;
  }

  .offices-cards {
    @apply flex
    flex-col
    sm:flex-row
    gap-y-mobile-x-lg
    sm:gap-y-0
    sm:gap-x-mobile-lg
    lg:gap-x-desktop-lg;

    &-item::v-deep {
      @apply sm:min-w-[230px] sm:w-1/2;

      &:first-child {
        @apply order-last sm:order-first sm:mt-mobile-x-lg md:mt-tablet-x-lg lg:mt-desktop-x-lg;
      }

      .location-card-image-block {

        @include mobile {
          margin-left: -1.75rem;
          margin-right: -1.75rem;
          width: calc(100% + 1.75rem * 2);
        }
      }
    }
  }
}
</style>