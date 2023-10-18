import { MOST_READ_POSTS_LIMIT, POSTS_LIMIT_ON_BLOG_PAGE } from '~/constants';

export const state = () => ({
  categories: [],
  blogPageData: {
    acf: {}
  },
  posts: [], // posts of chosen category
  post: {},
  page: 1,
  mostReadPosts: [],
  lastPage: 1
});

export const mutations = {
  updateLastPage: (state, payload) => {
    state.lastPage = payload;
  },
  updateCategories: (state, payload) => {
    state.categories = payload;
  },
  updateBlogPageData: (state, payload) => {
    state.blogPageData = payload;
  },
  updatePage: (state, payload) => {
    state.page = payload;
  },
  updatePosts: (state, payload) => {
    state.posts = payload;
  },
  updatePost: (state, payload) => {
    state.post = payload;
  },
  updateMostReadPosts: (state, payload) => {
    state.mostReadPosts = payload;
  }
};

export const getters = {
  isLastPage: (state) => {
    return state.page >= state.lastPage;
  },
  heroTitle: (state) => {
    return state.blogPageData.acf.hero_title;
  },
  featuredPosts: (state) => {
    return state.blogPageData.acf.featured_posts || [];
  },
  heroDescription: (state) => {
    return state.blogPageData.acf.hero_description;
  }
};

export const actions = {
  async fetchMostReadPosts({ commit }) {
    const posts = await this.$api.post.getMostReadPosts({ limit: MOST_READ_POSTS_LIMIT });
    if (posts) {
      commit('updateMostReadPosts', posts);
    }
  },
  addViews({ commit }, { hash }) {
    this.$api.post.addViews({ hash });
  },
  async fetchBlogData({ commit }) {
    const pageData = await this.$api.page.getBlogData();
    commit('updateBlogPageData', pageData);
    if (pageData.acf) {
      commit('updateCategories', pageData.acf.categories);
    }
  },
  async fetchPost({ commit }, params) {
    const post = await this.$api.post.getPost({
      name: params.name
    });

    commit('updatePost', post);
  },
  async fetchPosts({ commit, state, dispatch }, params) {
    const posts = await this.$api.post.getPosts({
      limit: params.limit || POSTS_LIMIT_ON_BLOG_PAGE,
      page: params.page || state.page,
      category: params.category
    });
    if (posts.result) {
      dispatch('addPosts', posts.result);
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
  addPosts({ commit, state }, posts) {
    commit('updatePosts', [...state.posts, ...posts]);
  },
  clearPosts({ commit }) {
    commit('updatePosts', []);
  },
  reset({ dispatch }) {
    dispatch('clearPosts');
    dispatch('resetPageCounter');
  }
};