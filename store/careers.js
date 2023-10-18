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
  pageDataAcf: (state) => {
    return state.pageData.acf;
  },
  heroImages: (state) => {
    return state.pageData.acf.hero_images ?? [];
  },
  heroCta: (state) => {
    return state.pageData.acf.hero_cta ?? {
      url: '',
      title: 'See Openings'
    };
  },
  locInfo: (state) => {
    return state.pageData.acf.loc_info ?? [];
  },
  locCta: (state) => {
    return state.pageData.acf.loc_cta ?? {
      url: '',
      title: 'Life at Skona'
    };
  },
  openingsData: (state) => {
    return state.pageData.acf.openings ?? [];
  }
};

export const actions = {
  async fetchPageData({ commit }) {
    const pageData = await this.$api.page.getCareersData();

    if (pageData.acf) {
      commit('updatePageData', pageData);
    }
  }
};