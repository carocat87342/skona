<template>
  <component
    :is="tag"
    v-if="type === 'primary'"
    v-bind="{ ...attrs }"
    class="skona-button"
    @click.prevent="clickBtn">
    <span class="skona-button-name">
      <slot />
    </span>
  </component>

  <div
    v-else
    :class="[animate && 'line-cta-animate', 'color-' + color, 'line-cta']">
    <component :is="tag" v-bind="{ ...attrs }" class="w-full flex items-center" @click="clickBtn">
      <div :class="['size-' + size,'cta-line', { 'cta-line-arrow-left': arrowDirection === 'left'}]" />
      <span v-if="!!$slots.default" class="line-cta-text">
        <slot />
      </span>
    </component>
  </div>
</template>

<script>

export default {
  name: 'CtaBtn',
  props: {
    type: {
      required: false,
      type: String,
      enum: ['primary', 'secondary'],
      default: 'primary'
    },
    to: {
      type: [Object, String],
      required: false,
      default: () => {}
    },
    arrowDirection: {
      required: false,
      type: String,
      enum: ['left', 'right'],
      default: 'right'
    },
    target: {
      type: String,
      required: false,
      default: '_blank'
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
    },
    size: {
      type: String,
      enum: ['sm', 'md', 'lg', 'full'],
      default: 'full'
    },
    animate: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String,
      enum: ['white', 'default'],
      required: false,
      default: 'default'
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
    attrs() {
      const { to, target, external } = this;
      return {
        [external ? 'href' : 'to']: to,

        target: external ? target : null
      };
    },
    id() {
      return this._uid;
    }
  },
  methods: {
    clickBtn() {
      if (this.external) {
        window.location.href = this.to;
        return;
      }
      return this.$emit('click');
    }
  }
};
</script>

<style scoped lang="scss">
.skona-button {
  @apply text-p-all-small
  font-bold
  leading-p-all-small
  tracking-1
  uppercase
  inline-block
  overflow-hidden
  relative
  transition-colors
  duration-100;
  padding: 0 7px 4px 14px;

  &:before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 13px;
    opacity: 1;
    animation: translate-left-in 0.4s 1 cubic-bezier(0.7, 0, 0.3, 1);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/shapes/cta-primary-highlight.svg");
  }
  &:hover {
    &:before {
      animation: translate-left-out 0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);;
      transform:translateX(160px);
    }
  }
  &-name {
    position: relative;
    z-index: 1;
  }

  &.btn-default:before {
    background-image: url("/shapes/cta-primary-highlight.svg");
  }

  &.btn-bi-coastal:before {
    background-image: url("/shapes/cta-bi-coastal-highlight.svg");
  }

  &.btn-wise-sage:before {
    background-image: url("/shapes/cta-wise-sage-highlight.svg");
  }

  &.btn-big-blue:before {
    background-image: url("/shapes/cta-primary-big-blue.svg");
  }

  &.btn-arizona-sunset:before {
    background-image: url("/shapes/cta-arizona-sunset-highlight.svg");
  }

  &.btn-mustard:before {
    background-image: url("/shapes/cta-cut-the-mustard.svg");
  }

  &.btn-oh-baby:before {
    background-image: url("/shapes/cta-oh-baby-highlight.svg");
  }

  &.btn-karl:before {
    background-image: url("/shapes/cta-primary-karl-highlight.svg");
  }
}

@keyframes translate-left-in { 0%   { transform:translateX(-160px); } 100% { transform:translateX(0); } }

@keyframes translate-left-out { 0%   { transform:translateX(0%); } 100% { transform:translateX(160px); } }

.line-cta {
  line-height: 1;

  &.line-cta-animate:hover,
  &.cta-btn-animate,
  .cta-btn-animate-hover:hover & {
    .cta-line {
      transform: translateX(10px);

      &::after {
        width: 75%;
      }

      &.cta-line-arrow-left {
        transform: translateX(-5px);

        &::after {
          width: 85%;
        }
      }
    }
  }

  &.color-default {}
  &.color-white {
    .cta-line {
      &::before,
      &::after {
        @apply border-white;
      }
    }
    .line-cta-text {
      @apply text-white;
    }
  }
}

.line-cta-text {
  @apply whitespace-nowrap text-p-all-small uppercase font-bold tracking-1 pl-5;
}
.cta-line {
  @apply relative h-[10px] w-full;
  transition: 0.2s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
  transition-property: transform;

  &::before,
  &::after {
    @apply absolute right-0 top-1/2 border-almost border-solid;
    content: '';
  }
  &::after {
    @apply w-full border-t;
    transition: 0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);;
    transition-property: width;
  }
  &::before {
    @apply mt-[-3px] block;
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  &.size-sm{
    width: 30px;
  }
  &.size-md{
    width: 70px;
  }
  &.size-lg{
    width: 200px;
  }
  &.size-full{
    width: 100%;
  }

  &.cta-line-arrow-left {
    &::before,
    &::after {
      @apply left-0 right-auto;
    }
    &::before {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
</style>