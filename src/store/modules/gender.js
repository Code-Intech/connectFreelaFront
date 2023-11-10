import axios from "axios";

const state = {
  genders: null,
};
const getters = {
  StateGenders: (state) => state.genders,
};
const actions = {
  async getGenders({ commit }) {
    const request = await axios.get("http://localhost:8000/gender");
    commit("setGenders", { genders: await request.data.genres });
  },
};
const mutations = {
  setGenders(state, { genders }) {
    state.genders = genders;
  },
  LogOutgenders(state) {
    state.genders = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
