export const state = () => ({
  caseStudy: {},
  socialLinks: []
});

export const mutations = {
  updateCaseStudy: (state, payload) => {
    state.caseStudy = payload;
  },
  updateSocialLinks: (state, payload) => {
    state.socialLinks = payload;
  }
};

export const getters = {
  dynamicContent: (state) => {
    return state.caseStudy.acf.dynamic_content || [];
  },
  moreCaseStudiesTitle: (state) => {
    return state.caseStudy.acf.more_case_studies_title;
  },
  moreCaseStudies: (state) => {
    return state.caseStudy.acf.more_case_studies || [];
  },
  clientName: (state) => {
    return state.caseStudy.acf.client_name;
  },
  campaignHeadline: (state) => {
    return state.caseStudy.acf.campaign_headline;
  },
  shortDescription: (state) => {
    return state.caseStudy.acf.short_description;
  },
  thumbnailImage: (state) => {
    return state.caseStudy.acf.thumbnail_image;
  },
  caseStudyTypes: (state) => {
    return state.caseStudy.scope;
  },
  liveSiteLink: (state) => {
    return state.caseStudy.acf.site_link
      ? state.caseStudy.acf.site_link : {
        url: '',
        title: 'View Live Site'
      };
  },
  allCaseStudiesLink: (state) => {
    return state.caseStudy.acf.all_case_studies_link
      ? state.caseStudy.acf.all_case_studies_link : {
        url: '/work',
        title: 'LOAD MORE'
      };
  }
};

export const actions = {
  async fetchCaseStudy({ commit }, id) {
    const caseStudy = await this.$api.caseStudy.getCaseStudy(id);
    commit('updateCaseStudy', caseStudy);
  },
  async fetchSocialLinks({ commit }) {
    const links = await this.$api.common.getSocialLinks();
    commit('updateSocialLinks', links);
  }
};