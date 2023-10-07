import axios from "axios";

const state = {
  categorys: [],

};
const getters = {
  Getcategorys: (state) => state.categorys,
};
const actions = {
  async getcategory({ commit },token) {
    const request = await axios.get('http://localhost:8000/categories',{
      headers: { 
          'Authorization': `Bearer ${token}`
      },
    })
    console.log(request),

    commit('setCategorys', {  category: await request.data.category })
  },
};
const mutations = {
  setCategorys(state, { category }) {
    console.log(category,"muttt")
    state.categorys = category;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
