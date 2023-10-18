<template>
  <transition name="slide-in">
    <div
      class="hubspot-form"
      :class="{ active }">
      <div :id="`hubspot-form-${type}`" />
      <slot name="submit-btn" />
    </div>
  </transition>
</template>

<script>
import Hubspot from '~/services/hubspot';

export default {
  name: 'HubspotForm',
  props: {
    type: {
      required: true,
      type: String,
      enum: [ // add a new hubspot type if needed
        'contact',
        'contact-swe',
        'apply-eu',
        'apply-us',
        'subscription'
      ]
    },
    active: {
      required: false,
      type: Boolean,
      default: false
    },
    theme: {
      required: false,
      type: String,
      enum: ['dark', 'light'],
      default: 'dark'
    }
  },
  mounted() {
    // Creating pseudo-jQuery object. We don't have to load full jQuery library
    this.createJQueryObject();

    /*
     * add case to create a new one Hubspot form type
     * add a form id variable to .env file
     * add variable to nuxt.config.js
     * that's all, you can use a new type
     */
    if (window.hbspt) {
      switch (this.type) {
        case 'contact':
          this.fetchForm('#hubspot-form-contact', this.$config.CONTACT_FORM_ID);
          break;
        case 'contact-swe':
          this.fetchForm('#hubspot-form-contact-swe', this.$config.CONTACTSWE_FORM_ID);
          break;
        case 'apply-eu':
          this.fetchForm('#hubspot-form-apply-eu', this.$config.EU_APPLY_FORM_ID);
          break;
        case 'apply-us':
          this.fetchForm('#hubspot-form-apply-us', this.$config.US_APPLY_FORM_ID);
          break;
        case 'subscription':
          this.fetchForm('#hubspot-form-subscription', this.$config.SUBSCRIPTION_FORM_ID);
          break;
      }
    }
  },
  methods: {
    // Pseudo-jQuery for Hubspot callbacks.
    createJQueryObject() {
      window.jQuery = window.jQuery || function(nodeOrSelector) {
        if (typeof (nodeOrSelector) === 'string') {
          return document.querySelector('html');
        }
        return nodeOrSelector;
      };
    },

    // this method override Hubspot forms styles
    addStyles() {
      const hubspot = new Hubspot(`hubspot-form-${this.type}`);
      hubspot.applyCustomStyles();
      hubspot.applyFormTheme(this.theme);

      // remove delay of applying css styles
      setTimeout(() => {
        const styles = document.createElement('style');

        styles.textContent = '.hubspot-form.active { display: block }';
        document.querySelector('head').appendChild(styles);
      }, 1000);
    },

    // load embedded code to page
    fetchForm(target, formId) {
      return window.hbspt.forms.create({
        region: 'na1',
        portalId: this.$config.HUBSPOT_PORTAL_ID,
        formId,
        target,
        cssRequired: '',
        onFormReady: () => this.addStyles(),
        onFormSubmitted: () => {
          const hubspotForm = document.querySelector(target).parentElement;

          // hide the submit button
          hubspotForm.querySelector('.hubspot-submit').style.display = 'none';
          this.$emit('onFormSubmitted');
        }
      });
    }
  }
};
</script>

<style lang="scss">
.hubspot-form{
  display: none;
}
</style>