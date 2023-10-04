import axios from "axios";

const state = {
  edituser: {
            idtb_user: null,
            Nome_completo: null,
            Data_Nacimento: null,
            Telefone: null,
            Email: null,
            CPF: null,
            FlgStatus:null,
            tb_end_idtb_end: null,
            idgenero: null,
            created_at: null,
            updated_at: null
  },
};
const getters = {
  StateEditUser: (state) => state.edituser,
};
const actions = {
  async getInfoUser({ commit },token) {
    const request = await axios.get('http://localhost:8000/api/user/me',{
        headers: { 
            'Authorization': `Bearer ${token}`
        },
    })
    commit('setedituser', {  User: await request.data})
  },
};
const mutations = {
    setedituser(state, { User }) {
    console.log(User)
    state.edituser = User;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
