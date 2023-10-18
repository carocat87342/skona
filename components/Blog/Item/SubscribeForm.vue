<template>
  <section class="subscription-form" data-scroll="subscription-form">
    <div class="subscription-form-inner">
      <div class="container">
        <div class="md:max-w-content">
          <div class="mb-mobile-lg sm:mb-tablet-lg lg:mb-desktop-lg">
            <Heading :level="2" class="mb-2.5">
              Subscribe to Newsletter
            </Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
          <hubspot-form active :type="formType" theme="light">
            <cta-btn
              ref="hubspot-submit"
              slot="submit-btn"
              class="btn-default mt-0 sm:mt-[0.312rem] lg:mt-[0.937rem] hubspot-submit"
              type="primary"
              @click="sendForm">
              Subscribe
            </cta-btn>
          </hubspot-form>
        </div>
      </div>
      <ShapesApply class="shape" />
    </div>
  </section>
</template>

<script>
import Hubspot from '~/services/hubspot';
import ShapesApply from '~/static/shapes/img-apply-shapes.svg?inline';

export default {
  name: 'Subscribe',
  components: {
    ShapesApply
  },
  data() {
    return {
      formType: 'subscription'
    };
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
.subscription-form {
  @apply bg-big-blue text-white;

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