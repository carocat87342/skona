<template>
  <section class="clients-block text-center text-white bg-big-blue">
    <div class="container">
      <Heading :level="2" class="mb-mobile-lg md:mb-tablet-lg lg:mb-desktop-lg">
        {{ clientsTitle }}
      </Heading>
      <div
        class="flex justify-center items-center flex-wrap gap-y-16 md:gap-y-20">
        <div
          v-for="item in clientsLogo"
          :key="item.ID"
          class="logos">
          <img class="m-auto block" :src="item.acf.logo" :alt="item.acf.attribution">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurClientsSection',
  props: {
    clientsTitle: {
      type: String,
      required: true
    },
    clientsLogo: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.clients-block {
  @apply py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg relative;
}
.logos {
  width: 25%;

  @include mobile {
    width: 50%;
  }
  img {
    max-width: 130px;
    height: auto;
  }
}
</style>