export const state = () => ({
  pageData: {
    acf: {}
  }
});

export const mutations = {
  updatePageData: (state, payload) => {
    state.pageData = payload;
  }
};
export const getters = {
  hero: (state) => {
    return state.pageData.acf.hero ?? {};
  },
  values: (state) => {
    return state.pageData.acf.values ?? {};
  },
  team: (state) => {
    return state.pageData.acf.team ?? {};
  },
  offices: (state) => {
    return state.pageData.acf.offices ?? {};
  },
  awards: (state) => {
    return state.pageData.acf.awards ?? {};
  },
  caseStudy: (state) => {
    return state.pageData.acf.case_study ?? {};
  }
};

export const actions = {
  async fetchPageData({ commit }) {
    const pageData = await this.$api.page.getAboutData();

    if (pageData) {
      commit('updatePageData', pageData);
    }
  }
};