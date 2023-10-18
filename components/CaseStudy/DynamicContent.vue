<template>
  <div v-if="dynamicContentComputed.length > 0">
    <div class="dynamic-content">
      <template v-for="(content, index) in dynamicContentComputed">
        <component :is="layout(content)" :key="index" v-bind="{ ...content.attrs }" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { DYNAMIC_CONTENT } from '~/constants';

export default {
  name: 'DynamicContent',
  data: () => ({ attrs: {} }),
  computed: {
    ...mapGetters('caseStudy', ['dynamicContent']),
    dynamicContentComputed() {
      const arr = this.dynamicContent;

      return arr.map(content => ({ ...content, attrs: this.getAttr(content) }));
    }
  },
  methods: {
    getAttr(content) {
      if (content.acf_fc_layout === DYNAMIC_CONTENT.imageBlock) {
        return {
          imagePosition: content.image_position,
          imageCaption: content.image_caption,
          image: content.image
        };
      } else if (content.acf_fc_layout === DYNAMIC_CONTENT.textColumnBlock) {
        return {
          textBlocks: content.text_block
        };
      } else if (content.acf_fc_layout === DYNAMIC_CONTENT.sliderImagesBlock) {
        return {
          images: content.slider_image
        };
      } else if (content.acf_fc_layout === DYNAMIC_CONTENT.textBlock) {
        return {
          text: content.text
        };
      } else if (content.acf_fc_layout === DYNAMIC_CONTENT.quoteBlock) {
        return {
          quotes: content.quote
        };
      } else if (content.acf_fc_layout === DYNAMIC_CONTENT.awardsBlock) {
        return {
          title: content.title,
          logos: content.logos
        };
      }
    },
    layout(content) {
      return content.acf_fc_layout.split('_').join('-');
    }
  }
};
</script>

<style scoped>

</style>