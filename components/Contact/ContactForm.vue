<template>
  <div>
    <div class="mb-[45px] sm:mb-[50px] lg:mb-[60px] flex items-center">
      <template v-for="tab in tabs">
        <div
          :key="tab.key"
          class="control-item"
          :class="{'active': tab.key === activeTab}"
          @click="setTab(tab.key)">
          {{ tab.title }}
        </div>
      </template>
    </div>
    <template v-for="tab in tabs">
      <hubspot-form
        :key="formKeys[tab.key]"
        :active="activeTab === tab.key"
        :type="tab.formType"
        @onFormSubmitted="reloadForm">
        <cta-btn
          slot="submit-btn"
          ref="hubspot-submit"
          class="btn-default mt-[0.937rem] sm:mt-[0.312rem] lg:mt-[0.937rem] hubspot-submit "
          type="primary"
          @click="sendForm">
          <span class="font-medium">Contact us</span>
        </cta-btn>
      </hubspot-form>
    </template>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

import Hubspot from '~/services/hubspot';
import countries from '~/constants/countries.json';
import { locationsKeys } from '~/constants';

export default {
  name: 'ContactForm',
  data() {
    return {
      submitted: false
    };
  },
  computed: {
    ...mapState('contact', ['tabs', 'activeTab', 'userCountryCode']),
    formKeys() {
      const tabs = this.tabs.map(tab => tab.key);
      const keys = {};

      for (let i = 0; i < tabs.length; i++) {
        keys[tabs[i]] = i === 0 ? i : i * 1000;
      }
      return keys;
    },
    activeTabObj() {
      return this.tabs.find(tab => tab.key === this.activeTab);
    }
  },
  async mounted() {
    await this.detectUserLocation();
    this.setTabDependsOnUserLocation();
  },
  methods: {
    ...mapActions('contact', ['setActiveTab', 'detectUserLocation']),
    setTabDependsOnUserLocation() {
      if (countries.find(country => country.code === this.userCountryCode)) {
        this.setTab(locationsKeys.stockholm);
      } // else active tab is default tab - san-francisco
    },
    forceRerender(tab) {
      this.formKeys[tab]++;
    },
    hideSubmit() {
      setTimeout(() => {
        this.$refs['hubspot-submit'].$el.style.display = 'none';
      }, 500);
    },
    reloadForm() {
      this.submitted = true;
    },
    sendForm() {
      const type = this.activeTabObj.formType;
      const hubspot = new Hubspot(`hubspot-form-${type}`);

      hubspot.sendForm();
    },
    setTab(tab) {
      if (this.submitted && this.activeTab !== tab) {
        this.forceRerender(this.activeTab);
        this.submitted = false;
      }
      this.setActiveTab(tab);
    }
  }
};
</script>

<style scoped lang="scss">
.control-item {
  @apply text-almost-300
  uppercase
  font-medium
  lg:leading-[16px]
  py-[8px]
  px-0
  tracking-[1px]
  text-[13px]
  cursor-pointer;

  &.active {
    @apply text-almost
    border-b-2
    border-almost;
  }

  &:first-child {
    margin-right: 50px;
  }
}
</style>