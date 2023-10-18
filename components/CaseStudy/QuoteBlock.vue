<template>
  <section class="my-mobile-x-lg sm:my-tablet-x-lg lg:my-desktop-x-lg">
    <div class="container">
      <template v-for="quote in quotes">
        <div :key="quote.ID" class="quote-item">
          <div class="heading heading-h2">
            {{ quote.acf.quote }}
          </div>
          <div class="quote-attribution">
            <span class="quote-attribution-name">{{ quote.acf.attribution }}</span>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuoteBlock',
  props: {
    quotes: {
      required: true,
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
  .quote-item {
    @apply sm:ml-auto sm:max-w-[70%];
  }
  .quote-attribution {
    @apply flex items-center mt-mobile-md sm:mt-tablet-md lg:mt-desktop-md;

    &::before {
      content: '';

      @apply block bg-almost min-w-[20px] h-px flex-1 mr-5;
    }
    &-name {

    }
  }
</style>