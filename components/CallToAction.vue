<template>
  <div v-if="title || content || cta" class="call-to-action-card " :class="{ 'post-module': postModule }">
    <Heading v-if="title" :level="3" class="mb-2.5">
      {{ title }}
    </Heading>
    <div v-if="content">
      {{ content }}
    </div>
    <div
      v-if="cta"
      class="mt-mobile-md sm:mt-tablet-md lg:mt-desktop-md leading-none">
      <cta-btn
        class="inline-block"
        type="secondary"
        size="sm"
        v-bind="{...attrs }"
        @click="callToAction">
        {{ cta.title }}
      </cta-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    content: {
      type: String,
      default: '',
      required: false
    },
    cta: {
      type: [Object, String],
      default: () => ({
        title: '',
        target: '',
        url: ''
      }),
      required: false
    },
    postModule: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {

    attrs() {
      const attrs = {};
      if (this.cta.target) {
        attrs.target = this.cta.target;
      }
      if (this.cta.url && !this.cta.url.includes('#')) {
        attrs.to = this.cta.url;
      }
      if (this.postModule) {
        attrs.color = 'white';
      }
      return attrs;
    }
  },
  methods: {
    callToAction() {
      return this.$emit('call-to-action');
    }
  }
};
</script>

<style lang="scss" scoped>
.call-to-action-card {
  @apply bg-karl p-mobile-md lg:p-desktop-md;

  &.post-module {
    @apply bg-big-blue text-white;
  }
}
</style>