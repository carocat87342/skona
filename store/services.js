export const state = () => ({
  servicesPageData: {
    acf: {}
  }
});

export const mutations = {
  updateServicesPageData: (state, payload) => {
    state.servicesPageData = payload;
  }
};
export const getters = {
  heroTitle: (state) => {
    return state.servicesPageData.acf.hero?.title;
  },
  heroDescription: (state) => {
    return state.servicesPageData.acf.hero?.description;
  },
  process: (state) => {
    return state.servicesPageData.acf.process;
  },
  services: (state) => {
    return state.servicesPageData.acf.services;
  },
  clientsLogo: (state) => {
    return state.servicesPageData.acf.clients?.logo;
  },
  clientsTitle: (state) => {
    return state.servicesPageData.acf.clients?.title;
  },
  work: (state) => {
    return state.servicesPageData.acf.work;
  }
};

export const actions = {
  async fetchServicesPageData({ commit }) {
    const pageData = await this.$api.page.getServicesData();

    if (pageData) {
      commit('updateServicesPageData', pageData);
    }
  }
};