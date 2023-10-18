<template lang="html">
  <div class="case-study" :class="contentClass">
    <NuxtLink
      class="block cs-image-block relative overflow-hidden"
      :class="orderClass"
      :to="{ name: 'work-slug', params: { slug }}">
      <!-- Hover text component -->
      <CategoriesScope class="cs-scope" :scope="scope" :unique-id="uniqueID" />
      <img class="cs-image" :src="image" alt="">
    </NuxtLink>
    <div class="cs-content-block">
      <span v-if="client" class="uppercase font-bold mb-2.5 block text-sm tracking-wide">
        {{ client }}
      </span>
      <Heading v-if="headline" :level="titleVariant" class="case-study-title">
        <NuxtLink :to="{ name: 'work-slug', params: { slug }}">
          {{ headline }}
        </NuxtLink>
      </Heading>
      <p v-if="text" class="mt-desktop-x-sm text-almost-300 lg:pb-desktop-lg md:pb-tablet-lg pb-mobile-lg leading-p-all">
        {{ text }}
      </p>
      <cta-btn
        v-if="buttonMore"
        :to="{ name: 'work-slug', params: { slug: slug }}"
        :class="buttonView"
        type="primary">
        VIEW CASE STUDY
      </cta-btn>
    </div>
  </div>
</template>

<script>

import card from '~/mixins/card';

export default {
  mixins: [card],
  props: {
    slug: {
      type: String,
      required: true
    },
    imageFirst: {
      type: Boolean,
      required: false,
      default: false
    },
    client: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: true
    },
    scope: {
      type: Array,
      required: false
    },
    buttonMore: {
      type: Boolean,
      required: false,
      default: true
    },
    buttonView: {
      type: String,
      required: false,
      default: 'btn-default'
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

.case-study {
}

.cs-content-right {
  @apply sm:grid sm:grid-cols-12 sm:gap-x-mobile-lg md:gap-x-desktop-lg;

  .cs-image-block {
    @apply sm:col-span-6 lg:col-span-7;
  }

  .cs-content-block {
    @apply sm:col-span-6 lg:col-span-5 mt-8 sm:mt-0;
  }
}

.cs-content-bottom {
  .cs-content-block {
    @apply mt-5;
  }
}

.cs-image-block {
  &.card-image-first {
    @apply sm:order-first;
  }
  &.card-image-last {
    @apply sm:order-last;
  }
}

.cs-image {
  @apply object-cover w-full min-h-[250px] sm:h-[280px] lg:h-[380px];
}

.cs-content-block {
}

.case-study-title {
  &.h2 {
    @include desktop {
      line-height: 60px;
    }
  }
}
</style>