import axios from "axios";

const state = {
  edituser: {
    idtb_user: null,
    Nome_completo: null,
    CPF: null,
    Data_Nacimento: null,
    Genero: null,
    Telefone: null,
    CEP: null,
    Estado: null,
    Cidade: null,
    Bairro: null,
    endereco: null,
    Numero: null,
    Email: null,
    Senha: null,
    FlgStatus: null,
    tb_end_idtb_end: null,
    created_at: null,
    updated_at: null
  },
  error: null,
  errorup: null,

};
const getters = {
  StateEditUser: (state) => state.edituser,
};
const actions = {
  async upInfoUser({ commit}, infoUser) {
    const InfoUse = JSON.stringify({
      nomeCompleto: infoUser.info.get("Nome_completo"),
      cpf: infoUser.info.get("CPF"),
      dataNacimento: infoUser.info.get("Data_Nacimento"),
      genero: infoUser.info.get("Genero"),
      telefone: infoUser.info.get("Telefone"),
      cep: infoUser.info.get("CEP"),
      estado: infoUser.info.get("Estado"),
      cidade: infoUser.info.get("Cidade"),
      bairro: infoUser.info.get("Bairro"),
      endereco: infoUser.info.get("endereco"),
      numero: infoUser.info.get("Numero"),
      email: infoUser.info.get("Email"),
      senha: infoUser.info.get("Senha"),

    });
    console.log(InfoUse, "tokenuser")
    const request = await axios.patch('http://localhost:8000/api/user/update', InfoUse, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`
      },
    })
    //console.log(request);
    commit("upedituser", { edit: await request.erro });
  },

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
  upedituser(state, { edit }) {
    console.log(edit);
    // console.log(state,"state")
    state.error = edit;
  },
  setedituser(state, { user }) {
    console.log(user);
    // console.log(state,"state")
    state.edituser = user;
    console.log(state.edituser, "get")
  },

  LogOutUpUser(state) {
    state.edituser = null;
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
};
