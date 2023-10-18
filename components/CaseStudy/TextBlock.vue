<template>
  <section class="my-mobile-x-lg sm:my-tablet-x-lg lg:my-desktop-x-lg">
    <div class="container">
      <div v-html="text" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    text: {
      required: true,
      type: String
    }
  }
};
</script>