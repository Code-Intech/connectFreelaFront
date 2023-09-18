const state = {
  messageError: false,
};

const getters = {
  isMessageError: (state) => state.messageError,
};

const actions = {
  async showError({ commit }, error, time = 4000) {
    console.log(error)
    commit("setError", { error: true });

    setTimeout(() => {
      commit("setError", { error: false})
    }, time);

  },
  async closeError({ commit }) {
    commit("closeError", { error: false });
  },
};
const mutations = {
  setError(state, { error }) {
    state.messageError = error;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
