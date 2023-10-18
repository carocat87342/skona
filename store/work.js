import { CASE_STUDIES_LIMIT_ON_WORK_PAGE } from '~/constants';

export const state = () => ({
  categories: null,
  workPageData: {
    acf: {}
  },
  clients: {
    clients_title: '',
    clients_logo: ''
  },
  caseStudies: [], // case studies of chosen category
  page: 1,
  lastPage: 1
});

export const mutations = {
  updateCategories: (state, payload) => {
    state.categories = payload;
  },
  updateWorkPageData: (state, payload) => {
    state.workPageData = payload;
  },
  updateClients: (state, { clientsTitle, clientsLogo }) => {
    state.clients.clients_title = clientsTitle;
    state.clients.clients_logo = clientsLogo;
  },
  updatePage: (state, payload) => {
    state.page = payload;
  },
  updateCaseStudies: (state, payload) => {
    state.caseStudies = payload;
  },
  updateLastPage: (state, payload) => {
    state.lastPage = payload;
  }
};

export const getters = {
  isLastPage: (state) => {
    return state.page >= state.lastPage;
  },
  clientsLogo: (state) => {
    return state.clients.clients_logo;
  },
  clientsTitle: (state) => {
    return state.clients.clients_title;
  },
  firstCaseStudy: (state) => {
    return state.caseStudies.length > 0
      ? state.caseStudies[0]
      : null;
  },
  heroTitle: (state) => {
    return state.workPageData.acf.hero_title;
  },
  heroDescription: (state) => {
    return state.workPageData.acf.hero_description;
  }
};

export const actions = {
  async fetchWorkData({ commit }) {
    const [workPageData, categories] = await Promise.all([
      this.$api.page.getWorkData(),
      this.$api.caseStudy.getCategories()
    ]);

    commit('updateWorkPageData', workPageData);
    commit('updateCategories', categories);
    commit('updateClients', {
      clientsTitle: workPageData.acf.clients_title,
      clientsLogo: workPageData.acf.clients_logo
    });
  },

  async fetchCaseStudies({ commit, state, dispatch }, { category }) {
    const posts = await this.$api.caseStudy.getCaseStudies({
      limit: CASE_STUDIES_LIMIT_ON_WORK_PAGE,
      page: state.page,
      category,
      customPagination: 1
    });
    if (posts.result) {
      dispatch('addItemsToCaseStudies', posts.result);
      commit('updateLastPage', posts.last_page);
    }
  },
  increasePageCounter({ commit, state }) {
    commit('updatePage', state.page + 1);
  },
  decreasePageCounter({ commit, state }) {
    if (state.page - 1 > 0) {
      commit('updatePage', state.page - 1);
    }
  },
  resetPageCounter({ commit }) {
    commit('updatePage', 1);
  },
  addItemsToCaseStudies({ commit, state }, caseStudies) {
    commit('updateCaseStudies', [...state.caseStudies, ...caseStudies]);
  },
  clearCaseStudies({ commit }) {
    commit('updateCaseStudies', []);
  },
  reset({ dispatch }) {
    dispatch('clearCaseStudies');
    dispatch('resetPageCounter');
  }
};