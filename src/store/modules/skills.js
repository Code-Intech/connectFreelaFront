import axios from "axios";

const state = {
  skill: [],

};
const getters = {
  GetSkills: (state) => state.skill,
};
const actions = {
  async getSkills({ commit },token) {
    const request = await axios.get('http://localhost:8000/skills',{
      headers: { 
          'Authorization': `Bearer ${token}`
      },
    })
    console.log(request),

    commit('setSkill', {  skill: await request.data.skills })
  },
};
const mutations = {
  setSkill(state, { skill }) {
    console.log(skill,"muttt")
    state.skill = skill;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
