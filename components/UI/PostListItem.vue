<template lang="html">
  <article class="post-list-item cta-btn-animate-hover" :class="`size-${size}`">
    <div class="post-image-block">
      <img v-if="image" class="w-full h-full object-cover" :src="image" alt="">
      <div v-else class="post-image-default">
        <div
          class="post-image-default-bg"
          :style="{backgroundColor: !!catColor && catColor}" />
        <div
          class="post-image-default-bg-icon"
          :style="{backgroundColor: !!catColor && catColor}" />
      </div>
    </div>
    <div class="flex-1 relative " :class="{'sm:pr-[75px]': arrow}">
      <div class="post-meta" :style="{color: !!catColor && catColor}">
        <span>
          {{ categories }} <template v-if="formattedDate">
            | {{ formattedDate }}
          </template>
        </span>
        <template v-if="date">
          <span class="px-1">|</span>
          <span>
            {{ date }}
          </span>
        </template>
      </div>
      <Heading v-bind="{ level }">
        <nuxt-link
          :to="link"
          class="border-none">
          {{ title }}
        </nuxt-link>
      </Heading>
      <cta-btn
        v-if="arrow"
        class="post-list-item-more"
        :to="link"
        :type="'secondary'"
        :size="'md'"
        :animate="false" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostListItem',
  props: {
    categories: {
      type: String,
      required: true
    },
    catColor: {
      type: String,
      required: false,
      default: ''
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: [Object, String],
      required: true
    },
    size: {
      type: String,
      required: false,
      enum: ['sm', 'lg'],
      default: 'lg'
    },
    arrow: {
      type: Boolean,
      required: false,
      default: true
    },
    formattedDate: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    level() {
      return this.size === 'sm' ? 4 : 3;
    }
  }
};
</script>

<style lang="scss" scoped>
.post-list-item {
  @apply flex
  border-b
  border-gray-400
  py-mobile-md
  md:py-tablet-md
  lg:py-desktop-md
  relative
  first:pt-0;

  &-more {
    @apply hidden sm:block opacity-50 absolute right-0 top-1/2 -translate-y-1/2;
  }

  &:nth-child(2n+2) {
    .post-image-default {
      &-bg {
        @apply bg-bi-coastal-300;
      }
      &-bg-icon {
        @apply bg-bi-coastal;
        -webkit-mask-image:  url('/shapes/main/img-shape-4-2.svg');
        mask-image: url('/shapes/main/img-shape-4-2.svg');
        -webkit-mask-size: cover;
        mask-size: cover;
      }
    }
  }
  &:nth-child(3n+4) {
    .post-image-default {
      &-bg {
        @apply bg-big-blue-300;
      }
      &-bg-icon {
        @apply bg-big-blue;
        -webkit-mask-image:  url('/shapes/main/img-shape-5.svg');
        mask-image: url('/shapes/main/img-shape-5.svg');
        -webkit-mask-position: 0;
        mask-position: 0;
        -webkit-mask-size: contain;
        mask-size: contain;
      }
    }
  }
}
.post-meta {
  @apply uppercase font-bold text-p-all-small mb-2.5;
}
.post-image-block {
  @apply w-[54px] h-[54px] min-w-[54px] mr-mobile-md sm:mr-tablet-lg;
}
.post-image-default {
  @apply w-full h-full relative overflow-hidden;

  &-bg,
  &-bg-icon {
    @apply absolute inset-0 h-full bg-wise-sage;
  }
  &-bg {
    z-index: 0;
    opacity: 0.75;
  }
  &-bg-icon {
    z-index: 1;
    -webkit-mask-image:  url('/shapes/main/img-shape-1.svg');
    mask-image: url('/shapes/main/img-shape-1.svg');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
    -webkit-mask-size: contain;
    mask-size: contain;
  }
}
</style>