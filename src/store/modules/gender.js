import axios from "axios";

const state = {
  genders: null,
};
const getters = {
  StateGenders: (state) => state.genders,
};
const actions = {
  async getGenders({ commit }) {
    const request = await axios.get('http://localhost:8000/gender')
    commit('setGenders', {  genders: await request.data.genres })
  },
};
const mutations = {
  setGenders(state, { genders }) {
    console.log(genders)
    state.genders = genders;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
