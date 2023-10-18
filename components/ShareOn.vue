<template>
  <div class="share-block" :class="[`justify-${justify}`, `size-${size}`]">
    <Heading v-if="text" :level="3" class="mr-auto sm:mr-10">
      {{ text }}
    </Heading>
    <template v-for="network in networks">
      <ShareNetwork
        :key="network"
        class="share-item"
        v-bind="{
          network,
          title,
          url,
          description,
          quote,
        }">
        <img class="opacity-95 hover:opacity-80 w-full h-full" :src="getSocialLinkIcon(network)" :alt="network">
      </ShareNetwork>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { NETWORKS_WE_USE } from '~/constants';

export default {
  name: 'ShareOn',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    quote: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      enum: ['sm', 'md', 'lg'],
      default: 'lg',
      required: false
    },
    justify: {
      type: String,
      enum: ['start', 'center', 'end'],
      default: 'center',
      required: false
    },
    networks: {
      type: Array,
      validator(val) {
        return val.find(v => NETWORKS_WE_USE.includes(v));
      },
      required: false,
      default: () => [
        'twitter',
        'linkedin',
        'facebook'
      ]
    }
  },
  computed: {
    ...mapState(['caseStudy']),
    attrs() {
      const { url, title, description, quote, hashtags } = this;

      return {
        url,
        title,
        description,
        quote,
        hashtags
      };
    }
  },
  methods: {
    getSocialLinkIcon(network) {
      return `/icons/icon-soc-${network}.svg`;
    }
  }
};
</script>

<style lang="scss" scoped>
.share-block {
  @apply flex items-center;
}

.share-item {
  width: 35px;
  height: 35px;

  &:not(:last-child) {
    margin-right: 40px;
  }

  .size-sm > & {
    height: 24px;
    width: 24px;

    &:not(:last-child){
      margin-right: 30px;
    }
  }
}
</style>