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
    // console.log(request);
    commit('setedituser', {  user: await request.data.user})
  },
};
const mutations = {
    setedituser(state, { user }) {
    console.log(user)
    // console.log(state,"state")
    state.edituser = user;
    // console.log(state.edituser,"get")
  },

  LogOutUpUser(state){
    state.edituser = null;
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
};
