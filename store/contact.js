import { locationsKeys } from '~/constants';

export const state = () => ({
  activeTab: locationsKeys['san-francisco'],
  tabs: [
    {
      title: 'San Francisco',
      key: locationsKeys['san-francisco'],
      formType: 'contact'
    },
    {
      title: 'Stockholm',
      key: locationsKeys.stockholm,
      formType: 'contact-swe'
    }
  ],
  userCountryCode: null
});

export const mutations = {
  updateActiveTab: (state, payload) => {
    state.activeTab = payload;
  },
  updateUserCountryCode: (state, payload) => {
    state.userCountryCode = payload;
  }
};

export const actions = {
  setActiveTab({ commit }, tab) {
    commit('updateActiveTab', tab);
  },
  async detectUserLocation({ commit }) {
    const response = await this.$api.contact.detectLocation();

    if (response) {
      commit('updateUserCountryCode', response.headers['cloudfront-viewer-country']);
    }
  }
};