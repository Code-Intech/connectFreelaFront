import axios from "axios";

const state = {
  CreatePropostas: null,
};
const getters = {
  StateCreateProposta: (state) => state.CreatePropostas,
};
const actions = {
  async CreateProposta({ commit }, { infoProposta, id, token }) {
    console.log(infoProposta);
    const Info = JSON.stringify({
      Valor_Proposta: infoProposta.get("Valor"),
      Comentario: infoProposta.get("Texto"),
      Data_Proposta: infoProposta.get("Data"),
    });

    console.log(Info, "tokenprestador");

    const request = await axios.post(
      `http://localhost:8000/api/servico/proposta/${id}`,
      Info,
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
    // console.log(request);
    commit("createProposta", { info: await request.data });
    return request;
  },
};

const mutations = {
  createProposta(state, { info }) {
    console.log(info);
    // console.log(state,"state")
    state.CreatePropostas = info;
    // console.log(state.edituser,"get")
  },

  LogOutPrestador(state) {
    state.prestador = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
