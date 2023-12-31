import axios from "axios";

const state = {
  professions: [],
};
const getters = {
  GetProfessions: (state) => state.professions,
};
const actions = {
  async getProfessions({ commit }, token) {
    const request = await axios.get("/professions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit("setProfessions", { profession: await request.data.profession });
  },
};
const mutations = {
  setProfessions(state, { profession }) {
    state.professions = profession;
  },
  LogOutprofessions(state) {
    state.professions = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
