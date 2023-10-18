<template>
  <div class="contact-info-block">
    <a v-if="contactInfo.map_link.url" :href="contactInfo.map_link.url" :target="contactInfo.map_link.target">
      <img class="cursor-pointer hover:opacity-80 transition-opacity" :src="contactInfo.image" :alt="contactInfo.city">
    </a>
    <img v-else-if="contactInfo.image" :src="contactInfo.image" :alt="contactInfo.city">
    <div class="contact-address">
      <h3 class="contact-address-title">
        {{ contactInfo.city }}
      </h3>
      <div>{{ contactInfo.adress_street }}</div>
      <div>{{ contactInfo.adress_city }}</div>
      <div>{{ contactInfo.email }}</div>
      <div>{{ contactInfo.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {
    contactInfo: {
      require: true,
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped lang="scss">
  .contact-info-block {
    @apply bg-skona text-almost;

    &.contact-blue {
      @apply bg-big-blue text-white;
    }

    &:not(:last-child) {
      margin-bottom: 40px;

      @include tablet {
        margin-right: 40px;
        margin-bottom: 0;
      }
      @include desktop {
        margin-bottom: 60px;
      }
    }
  }
  .contact-address {
    padding: 15px 30px;

    &-title{
      @apply text-h3-mob sm:text-h3-tab lg:text-h3-desk mb-2.5;
    }
    @include desktop {
      padding: 20px 45px;
    }
  }
</style>