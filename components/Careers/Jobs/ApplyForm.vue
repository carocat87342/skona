<template>
  <div class="apply-form" data-scroll="apply-form">
    <div class="apply-form-inner">
      <div class="container">
        <div class="md:max-w-content">
          <Heading class="mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg" :level="2">
            Apply
          </Heading>
          <hubspot-form active :type="formType" theme="light">
            <cta-btn
              ref="hubspot-submit"
              slot="submit-btn"
              class="btn-default mt-0 sm:mt-[0.312rem] lg:mt-[0.937rem] hubspot-submit"
              type="primary"
              @click="sendForm">
              Apply
            </cta-btn>
          </hubspot-form>
        </div>
      </div>
      <ShapesApply class="shape" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ShapesApply from '~/static/shapes/img-apply-shapes.svg?inline';
import Hubspot from '~/services/hubspot';
import { locations } from '~/constants';

export default {
  name: 'ApplyForm',
  components: {
    ShapesApply
  },
  computed: {
    ...mapState('job', ['job']),
    formType() {
      const locationTerms = this.job.locations.map(location => location.term_id);
      const isRemote = locationTerms.includes(locations.remote);
      const isStockholm = locationTerms.includes(locations.stockholm);
      const isSanFrancisco = locationTerms.includes(locations['san-francisco']);

      if ((isRemote && isStockholm && !isSanFrancisco) ||
        (isStockholm && !isSanFrancisco && !isRemote)) {
        return 'apply-eu';
      } else {
        return 'apply-us';
      }
    }
  },
  methods: {
    sendForm() {
      const hubspot = new Hubspot(`hubspot-form-${this.formType}`);
      hubspot.sendForm();
    }
  }
};
</script>

<style lang="scss" scoped>
.apply-form {
  @apply bg-bi-coastal text-white;

  &-inner {
    @apply relative
    max-w-1920
    mx-auto
    relative
    py-mobile-xx-lg
    sm:py-tablet-xx-lg
    lg:py-desktop-xx-lg;
  }
}
.shape {
  @apply hidden md:block absolute bottom-0 right-0 z-0 w-[300px] lg:w-[450px];
}
</style>