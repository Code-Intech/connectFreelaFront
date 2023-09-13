const state = {
  messageError: false,
};

const getters = {
  isMessageError: (state) => state.messageError,
};

const actions = {
  async showError({ commit }, error) {
    console.log(error)
    commit("setError", { error: true });

    setTimeout(() => {
      commit("setError", { error: false})
    }, 3000);

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
