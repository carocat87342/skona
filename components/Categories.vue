<template>
  <div class="container relative z-1" :class="bgColor">
    <div class="category-list" :class="`bg-${theme}`">
      <template v-for="(category, key) in categoriesMenu">
        <div :key="category.ID" class="category-list-item">
          <button
            :class="[(key===0 && !displayedCategory || isCategoryActive(category)) && 'active', 'category-list-button']"
            @click="setDisplayedCategory(category)">
            <span v-html="category.name" />
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Categories',
  props: {
    displayedCategory: {
      required: true,
      type: String,
      default: ''
    },
    categories: {
      required: true,
      type: Array
    },
    theme: {
      required: false,
      type: String,
      enum: ['white', 'orange'],
      default: 'white'
    },
    bg: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    categoriesMenu() {
      return [
        {
          name: 'SHOW ALL'
        },
        ...this.categories
      ];
    },
    bgColor() {
      return this.bg ? `bg-${this.bg}` : '';
    }
  },
  methods: {
    setDisplayedCategory(category) {
      this.$router.push({ query: { category: category.slug } });
    },
    isCategoryActive(category) {
      return category.slug === this.displayedCategory;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  @include tablet {
    margin-top: -45px;
  }
  @include desktop {
    margin-top: -55px;
  }
}
.category-list {
  @apply flex flex-wrap items-center sm:justify-between -mx-2 py-4 md:py-5 lg:py-6 sm:px-4 md:px-10 lg:px-24;

  &-item {
    @apply px-2 py-mobile-x-sm sm:py-mobile-sm w-1/2 sm:w-auto;
  }
  &-button {
    @apply text-almost-300
    border-b
    border-transparent
    px-0
    uppercase
    text-p-all-small
    tracking-1
    font-medium
    pb-[4px]
    opacity-75
    hover:opacity-100;

    &.active {
      @apply text-almost border-almost opacity-100;
    }
  }
  &.bg-orange{
    @apply bg-arizona-sunset;

    .category-list-button {
      @apply text-white;

      &.active{
        @apply border-white;
      }
    }
  }
}
</style>