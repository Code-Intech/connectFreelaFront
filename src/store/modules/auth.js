import axios from "axios";

const state = {
  user: null,
  token: null,
  iftoken: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  GetToken: (state) => state.token,
};
const actions = {
  async Register({ dispatch }, User) {
    const user = JSON.stringify({
      email: User.get("email"),
      senha: User.get("senha"),
      nomeCompleto: User.get("nomeCompleto"),
      dataNascimento: User.get("dataNascimento"),
      genero: User.get("genero"),
      telefone: User.get("telefone"),
      cpf: User.get("cpf"),
      cep: User.get("cep"),
      rua: User.get("rua"),
      bairro: User.get("bairro"),
      cidade: User.get("cidade"),
      estado: User.get("estado"),
      numero: User.get("numero"),
    });

    await axios.post("http://localhost:8000/api/user/create", user);

    let UserForm = new FormData();
    UserForm.append("email", User.get("email"));
    UserForm.append("senha", User.get("senha"));
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, User) {
    const user = JSON.stringify({
      email: User.get("email"),
      senha: User.get("senha"),
    });
    const request = await axios.post("http://localhost:8000/auth/login", user);
    console.log(request);
    if (request.status === 401) throw new Error(request.statusText);

    commit("setUser", { email: User.get("email"), token: request.data.token });

    return request;
  },
  async ifToken({ commit }, token) {
    const request = await axios.get(
      `http://localhost:8000/api/profile`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("IfToken", { infos: await request.data });
    return request;
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
const mutations = {
  setUser(state, { email, token }) {
    state.user = email;
    state.token = token;
  },
  IfToken(state, { infos }) {
    state.iftoken = infos;
  },
  LogOut(state) {
    state.user = null;
    state.token = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
