<template>
  <div class="page-content-sidebar" :class="showBreakpointClass">
    <call-to-action
      v-if="!hideGlobalSidebarModule && globalSidebarModule.show_module"
      v-bind="{
        title: globalSidebarModule.title,
        content: globalSidebarModule.content,
        cta: globalSidebarModule.cta
      }"
      post-module
      @call-to-action="scrollToTheForm" />
    <call-to-action
      v-if="hideGlobalSidebarModule"
      v-bind="{
        title: sidebarModule.title,
        content: sidebarModule.content,
        cta: sidebarModule.cta
      }"
      post-module
      @call-to-action="scrollToTheForm" />
    <most-read-posts class="hidden md:block" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PostSidebar',
  props: {
    showBreakpoint: {
      required: false,
      type: [String, Boolean],
      enum: ['sm', 'md', 'lg'],
      default: false
    },
    hideBreakpoint: {
      required: false,
      type: [String, Boolean],
      enum: ['sm', 'md', 'lg'],
      default: false
    }
  },
  computed: {
    ...mapState('blog', ['post']),
    sidebarModule() {
      return this.post.acf.post_cta_module ?? false;
    },
    globalSidebarModule() {
      return this.post.acf.global_sidebar_module ?? false;
    },
    hideGlobalSidebarModule() {
      return this.post.acf.show_global_post_cta_module ?? false;
    },
    showBreakpointClass() {
      if (this.hideBreakpoint) {
        return `block ${this.hideBreakpoint}:hidden`;
      }
      if (this.showBreakpoint) {
        return `hidden ${this.showBreakpoint}:block`;
      }

      return '';
    }
  },
  methods: {
    scrollToTheForm() {
      const form = document.querySelector('[data-scroll="subscription-form"]');
      form.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>

</style>