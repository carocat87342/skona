import { mapState } from 'vuex';
import { metaDefault } from '~/constants';

export default {
  head() {
    return {
      title: this.meta.title || metaDefault.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.siteUrl
        },
        {
          hid: 'title',
          property: 'title',
          content: this.meta.title || metaDefault.title
        },
        {
          hid: 'description',
          property: 'description',
          content: this.meta.description || metaDefault.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title || metaDefault.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description || metaDefault.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.meta.sharecard || metaDefault.image
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.meta.type || metaDefault.type
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.meta.title || metaDefault.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.meta.description || metaDefault.description
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: this.meta.sharecard || metaDefault.image
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: this.siteUrl
        }
      ]
    };
  },
  computed: {
    ...mapState(['metaData']),
    siteUrl() {
      return `${this.$config.WEBSITE_URL}${this.$route.fullPath}`;
    },
    meta() {
      return {
        title: this.metaData.title,
        description: this.metaData.description,
        sharecard: this.metaData.image,
        type: null
      };
    }
  }
};