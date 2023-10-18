export const state = () => ({
  job: {
    acf: {}
  }
});

export const mutations = {
  updateJob: (state, payload) => {
    state.job = payload;
  }
};
export const getters = {
  acf: (state) => {
    return state.job.acf;
  }
};

export const actions = {
  async fetchJob({ commit }, name) {
    const job = await this.$api.job.getJob(name);

    if (job) {
      commit('updateJob', job);
    }
  }
};