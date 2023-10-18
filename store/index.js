import { POSTS_LIMIT_ON_HOME_PAGE } from '~/constants';

export const state = () => ({
  latestPosts: [],
  headerData: null,
  footerData: null,
  headerAttributes: {},
  logo: {
    logo_white: null,
    logo_dark: null
  },
  getStarted: {
    title: '',
    description: '',
    location_1: {
      title: '',
      link: '',
      link_text: ''
    },
    location_2: {
      title: '',
      link: '',
      link_text: ''
    }
  },
  hasNavOpen: false,
  postsLoader: false,
  metaData: {
    title: null,
    description: null,
    sharecard: null
  }
});

export const getters = {
  primaryMenu: (state) => {
    const list = state.headerData.primary_menu || [];
    const firstHalf = list.slice(0, 5);
    const secondHalf = list.slice(5);
    return {
      firstHalf,
      secondHalf
    };
  },
  links: (state) => {
    return state.headerData.links;
  },
  socialLinks: (state) => {
    return state.headerData.social_links;
  },
  defaultSharecard: (state) => {
    return state.logo.logo_dark;
  }
};

export const mutations = {
  updateHasNavOpen: (state, payload) => {
    state.hasNavOpen = payload;
  },
  updateLatestPosts: (state, posts) => {
    state.latestPosts = posts;
  },
  updateHeaderData: (state, payload) => {
    state.headerData = payload;
  },
  updateFooterData: (state, payload) => {
    state.footerData = payload;
  },
  updateLogo: (state, { logoDark, logoWhite }) => {
    state.logo.logo_white = logoWhite;
    state.logo.logo_dark = logoDark;
  },
  updateGetStarted: (state, payload) => {
    state.getStarted = payload;
  },
  updateHeaderAttributes: (state, payload) => {
    state.headerAttributes = payload;
  },
  updatePostsLoader: (state, payload) => {
    state.postsLoader = payload;
  },
  updateMetaData: (state, payload) => {
    state.metaData = payload;
  }
};

export const actions = {
  startPostsLoader({ commit }) {
    commit('updatePostsLoader', true);
  },
  stopPostsLoader({ commit }) {
    commit('updatePostsLoader', false);
  },
  setHeaderAttributes({ commit }, attributes) {
    commit('updateHeaderAttributes', attributes);
  },
  resetHeaderAttributes({ commit }) {
    commit('updateHeaderAttributes', {});
  },
  toggleNav({ commit, state }) {
    commit('updateHasNavOpen', !state.hasNavOpen);
  },
  closeNav({ commit }) {
    commit('updateHasNavOpen', false);
  },
  async getLatestPosts({ commit }) {
    const posts = await this.$api.post.getPosts({
      limit: POSTS_LIMIT_ON_HOME_PAGE,
      sort: 'desc'
    });
    if (posts && posts.result.length > 0) {
      commit('updateLatestPosts', posts.result);
    }
  },
  async fetchGeneralData({ commit }) {
    const data = await this.$api.common.getGeneralData();
    if (data) {
      commit('updateMetaData', data.meta_data);
      commit('updateGetStarted', data.get_started);
      commit('updateFooterData', data.footer);
      commit('updateHeaderData', data.header);
      commit('updateLogo', {
        logoDark: data.site_logo?.logo_dark,
        logoWhite: data.site_logo?.logo_white
      });
    }
  }
};