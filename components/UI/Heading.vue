<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: Number,
      required: true
    },
    as: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    asClass() {
      return this.as ? this.as : `h${this.level}`;
    }
  },
  render(createElement) {
    return createElement(
      'h' + this.level,
      {
        class: `heading heading-${this.asClass}`
      },
      this.$slots.default
    );
  }
};
</script>

<style lang="scss">
h1, h2, h3, h4, h5, h6, .heading {
  @apply font-kepler-std-display font-black leading-heading;
}

h1,
.heading-h1 {
  @apply text-h1-mob
  sm:text-h1-tab
  lg:text-h1-desk
  leading-h1-mob
  sm:leading-h1-tab
  lg:leading-h1-desk
}
h2,
.heading-h2 {
  @apply text-h2-mob
  sm:text-h2-tab
  lg:text-h2-desk
  leading-h2-mob
  sm:leading-h2-tab
  lg:leading-h2-desk
}
h3,
.heading-h3 {
  @apply text-h3-mob
  sm:text-h3-tab
  lg:text-h3-desk
  leading-h3-mob
  sm:leading-h3-tab
  lg:leading-h3-desk
}
.heading-h4 { @apply text-h4-desk }
.heading-h5 {}
.heading-h6 {}
</style>