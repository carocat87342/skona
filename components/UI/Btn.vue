<template lang="html">
  <component :is="tag" v-bind="attrs" class="btn">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      required: false,
      default: () => {}
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    },
    kind: {
      type: [Object, String],
      required: false,
      default: () => {}
    }
  },
  computed: {
    tag() {
      const { to, external } = this;
      if (external) {
        return 'a';
      } else if (!external && to) {
        return 'router-link';
      } else {
        return 'button';
      }
    },
    blank() {
      const { external } = this;
      return external ? '_blank' : null;
    },
    attrs() {
      const { to, blank, external } = this;
      return {
        [external ? 'href' : 'to']: to,

        target: blank
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  @apply
    tracking-wider
    font-medium
    uppercase
    text-sm
    transition-colors
    duration-100;
}

.button {
    position: relative;
    padding: 0 7px 0 14px;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
    letter-spacing: 1px;

    &:before {
      z-index: -1;
      position: absolute;
      bottom: -4px;
      right: 0;
      width: 100%;
      height: 13px;
      border-bottom-left-radius: 10px;
      opacity: 0.4;
      content: "";
      transition: all 0.5s ease;
    }
    &:hover {
      &:before {
        width: 1%;
      }
    }
  }
</style>