import axios from "axios";

const state = {
    professions: [],

};
const getters = {
  GetProfessions: (state) => state.professions,
};
const actions = {
  async getProfessions({ commit },token) {
    const request = await axios.get('http://localhost:8000/professions',{
      headers: { 
          'Authorization': `Bearer ${token}`
      },
    })
    console.log(request),

    commit('setProfessions', {  profession: await request.data.profession })
  },
};
const mutations = {
  setProfessions(state, { profession }) {
    console.log(profession,"muttt")
    state.professions = profession;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
