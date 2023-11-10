import axios from "axios";

const state = {
  categorys: [],
};
const getters = {
  Getcategorys: (state) => state.categorys,
};
const actions = {
  async getcategory({ commit }, token) {
    const request = await axios.get("http://localhost:8000/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit("setCategorys", { category: await request.data.category });
  },
};
const mutations = {
  setCategorys(state, { category }) {
    state.categorys = category;
  },
  Logcategoria(state) {
    state.categorys = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
