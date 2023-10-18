<template lang="html">
  <div
    :class="[contentClass, featured && 'post-card-featured', 'post-card cta-btn-animate-hover']"
    @click="$router.push({ name: 'blog-slug', params: { slug }})"
    @mouseleave="mouseLeave"
    @mouseover="mouseOver">
    <div :class="[orderClass, !image && 'post-no-image', 'post-image-block']">
      <div ref="imageBlockBg" class="image-block-bg" />
      <img v-if="image" class="post-image" :src="image" alt="">
      <div v-else class="post-image" />
    </div>

    <div class="post-content-block">
      <div class="flex-1">
        <div class="post-meta" :style="{color: styleCatColor}">
          <span>{{ getCategories(categories) }}</span>
          <span class="px-1">|</span>
          <span>{{ postDate }}</span>
        </div>
        <Heading v-if="headline" :level="titleVariant" class="post-title">
          {{ headline }}
        </Heading>
        <div v-if="introText" class="text-almost-300" v-html="introText" />
      </div>
      <div>
        <cta-btn
          v-if="buttonMore"
          :to="{ name: 'blog-slug', params: { slug }}"
          :class="[buttonMoreStyle,'post-btn-more']"
          :type="featured ? 'primary' : 'secondary'"
          :size="'sm'"
          :animate="false">
          READ MORE
        </cta-btn>
      </div>
    </div>
  </div>
</template>

<script>

import card from '~/mixins/card';
import { getCategories } from '~/services/post';

export default {
  mixins: [card],
  props: {
    slug: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    postDate: {
      type: String,
      required: true
    },
    introText: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    buttonMore: {
      type: Boolean,
      required: false,
      default: true
    },
    buttonMoreStyle: {
      required: false,
      type: String,
      enum: ['btn-wise-sage', 'btn-big-blue', 'btn-mustard'],
      default: 'btn-wise-sage'
    },
    contentPosition: {
      required: false,
      type: String,
      enum: ['right', 'bottom'],
      default: 'right'
    },
    titleVariant: {
      required: false,
      type: Number,
      enum: [2, 3],
      default: 2
    },
    catColor: {
      required: true,
      type: String
    },
    featured: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleCatColor: this.catColor
    };
  },
  methods: {
    getCategories,
    mouseOver() {
      if (!this.featured && this.$refs.imageBlockBg) {
        this.$refs.imageBlockBg.style.backgroundColor = this.styleCatColor;
      }
    },
    mouseLeave() {
      if (!this.featured && this.$refs.imageBlockBg) {
        this.$refs.imageBlockBg.style.backgroundColor = 'transparent';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.post-card {
  @apply flex flex-col bg-white cursor-pointer;

  &.cs-content-right {
    @apply sm:grid sm:items-start sm:grid-cols-12 sm:gap-x-mobile-lg md:gap-x-desktop-lg;

    .post-image-block {
      @apply sm:col-span-7 lg:col-span-8;
    }

    .post-content-block {
      @apply sm:col-span-5 lg:col-span-4 px-0 pb-0 sm:pt-0 ;
    }
  }

  &.cs-content-bottom {}

  &:nth-child(2n+1) {
    .post-image-block::after {
      -webkit-mask-image:  url('/shapes/main/img-shape-card-2.svg');
      mask-image: url('/shapes/main/img-shape-card-2.svg');
    }
  }
  &:nth-child(4n+1) {
    .post-image-block::after {
      -webkit-mask-image:  url('/shapes/main/img-shape-card-3.svg');
      mask-image: url('/shapes/main/img-shape-card-3.svg');
    }
  }
  &:nth-child(7n+1) {
    .post-image-block::after {
      -webkit-mask-image:  url('/shapes/main/img-shape-card-4.svg');
      mask-image: url('/shapes/main/img-shape-card-4.svg');
    }
  }

  &.post-card-featured {
    .post-image-block {
      @apply p-6 sm:p-9 md:p-[40px] lg:p-[60px];
    }
    .post-image {
      @apply sm:h-[154px] md:h-[260px];
    }
    .image-block-bg {
      opacity: 1;
    }
    .post-content-block {
      display: block;
    }
    .post-btn-more {
      @apply mt-12;
    }
    &:nth-child(1) {
      &:hover .image-block-bg {
        @apply bg-wise-sage;
      }
      .post-image-block {
        @apply bg-wise-sage-300;

        &::after {
          @apply bg-wise-sage;
          -webkit-mask-image: url('/shapes/main/img-shape-card-2.svg');
          mask-image: url('/shapes/main/img-shape-card-2.svg');
        }
      }
      .post-image {
        @apply sm:h-[300px] lg:h-[380px];
      }
    }
    &:nth-child(2) {
      &:hover .image-block-bg {
        @apply bg-big-blue;
      }
      .post-image-block {
        @apply bg-big-blue-300;

        &::after {
          @apply bg-big-blue;
          -webkit-mask-image: url('/shapes/main/img-shape-card-1.svg');
          mask-image: url('/shapes/main/img-shape-card-1.svg');
        }
      }
    }
    &:nth-child(3) {
      &:hover .image-block-bg {
        @apply bg-mustard;
      }
      .post-image-block {
        @apply bg-karl;

        &::after {
          @apply bg-mustard;
          -webkit-mask-image: url('/shapes/main/img-shape-card-5.svg');
          mask-image: url('/shapes/main/img-shape-card-5.svg');
        }
      }
    }
    &.cs-content-bottom {
      .post-content-block {
        @apply px-0 pb-0;
      }
    }
  }
}
.post-image-block {
  @apply relative overflow-hidden p-5 bg-white;

  &::after {
    @apply absolute inset-0 z-0 bg-karl-300;
    content: '';
    -webkit-mask-image:  url('/shapes/main/img-shape-card-1.svg');
            mask-image: url('/shapes/main/img-shape-card-1.svg');
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-position: 50%;
            mask-position: 50%;
    -webkit-mask-size: cover;
            mask-size: cover;
  }

  &.post-no-image {
    @apply bg-karl-300;

    &::after {
      @apply bg-white;
    }
    .post-image {
      @include mobile {
        height: 250px;
      }
    }
  }
}
.image-block-bg {
  @apply absolute inset-0 bg-transparent z-1;
  opacity: 0.5;
  transition: 0.5s ease;
  transition-property: background-color;
}
.post-image {
  @apply relative z-1 object-cover w-full max-h-[250px] sm:max-h-full sm:h-[170px] md:h-[200px];
}

.post-content-block {
  @apply flex flex-col flex-1 px-5 pt-5 pb-8 sm:pb-11;
}
.post-meta {
  @apply uppercase font-medium text-p-all-small mb-2.5;
}

.post-title {
  @apply mb-2.5;
}
.post-btn-more {
  @apply mt-5;
}
</style>