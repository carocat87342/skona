<template>
  <section class="team-section">
    <div class="container">
      <Heading :level="2" class="text-center mb-mobile-x-lg sm:mb-tablet-x-lg lg:mb-desktop-x-lg">
        {{ team.title }}
      </Heading>
      <div class="team">
        <vue-masonry-wall
          class="team"
          :items="team.team_list"
          :options="{width: 350, padding: 0}">
          <template v-slot:default="{item}">
            <div class="team-item">
              <div class="team-item-photo">
                <img class="team-item-photo-img" :src="item.acf.photo" alt="">
                <img class="team-item-photo-img reflection" :src="item.acf.photo_reflection" alt="">
              </div>
              <div class="team-item-position">
                {{ item.acf.position }}
              </div>
              <Heading :level="3">
                {{ item.post_title }}
              </Heading>
            </div>
          </template>
        </vue-masonry-wall>
      </div>
      <div class="mt-mobile-x-lg sm:mt-tablet-x-lg lg:mt-desktop-x-lg">
        <cta-btn
          class="cta-btn"
          type="secondary"
          :target="team.cta.target"
          :to="team.cta.url">
          {{ team.cta.title }}
        </cta-btn>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import VueMasonryWall from 'vue-masonry-wall';

export default {
  name: 'SkonaTeamSection',
  components: { VueMasonryWall },
  computed: {
    ...mapGetters('about', ['team'])
  }
};
</script>

<style lang="scss">
.team-section {
  @apply bg-karl
  py-mobile-xx-lg
  sm:py-tablet-xx-lg
  lg:py-desktop-xx-lg;
}

.team {
  @apply sm:max-w-[620px] md:max-w-[980px] mx-auto;

  .masonry-column {
    @apply flex flex-col min-w-0;

    &,
    &:first-child:last-child {
      @apply items-center;
    }
    &:last-child {
      @apply items-end;
    }
    &:first-child {
      @apply items-start;
    }

    &:nth-child(2n) {
      @apply mt-mobile-x-lg sm:mt-tablet-x-lg lg:mt-desktop-x-lg;
    }
    &:nth-child(3n) {
      @apply mt-mobile-lg sm:mt-tablet-lg lg:mt-desktop-lg;
    }

    .masonry-item {
      @apply mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg last:mb-0;

      @media (max-width: 580px) {
        width: 100%;
      }
    }
  }

  &-item {
    @apply w-[255px] max-w-full;

    @media (max-width: 580px) {
      width: 100%;
    }

    &-photo {
      @apply h-[303px] relative cursor-pointer overflow-hidden mb-mobile-sm sm:mb-desktop-sm;

      @media (max-width: 580px) {
        height: 350px;
      }

      &-img {
        @apply absolute inset-0 object-cover w-full h-full;

        &.reflection {
          @apply opacity-0 invisible transition-all duration-300;

          .team-item-photo:hover & {
            @apply opacity-100 visible z-1;
          }
        }
      }
    }

    &-position {
      @apply uppercase text-p-all-small font-medium mb-2.5;
    }
  }
}
</style>