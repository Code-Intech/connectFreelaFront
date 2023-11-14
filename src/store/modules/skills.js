import axios from "axios";

const state = {
  skill: [],
};
const getters = {
  GetSkills: (state) => state.skill,
};
const actions = {
  async getSkills({ commit }, token) {
    const request = await axios.get("/skills", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit("setSkill", { skill: await request.data.skills });
  },
};
const mutations = {
  setSkill(state, { skill }) {
    state.skill = skill;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
