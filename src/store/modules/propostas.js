import axios from "axios";

const state = {
  CreatePropostas: null,
  Propostas: null,
  PropostaAceita: null,
  InfoPropostaAceita: null,
};
const getters = {
  StateCreateProposta: (state) => state.CreatePropostas,
  StateGetProposta: (state) => state.Propostas,
  StateInfoPropostaAceita: (state) => state.InfoPropostaAceita,
};
const actions = {
  async CreateProposta({ commit }, { infoProposta, id, token }) {
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
    commit("createProposta", { info: await request.data });
    return request;
  },
  async GetProposta({ commit }, { id, token }) {
    const request = await axios.get(
      `http://localhost:8000/api/servico/proposta/get/${id}`,
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
    commit("getProposta", { info: await request.data.proposta });
    return request;
  },
  async AceitarProposta({ commit }, { id, token }) {
    console.log(token);
    const request = await axios.patch(
      `http://localhost:8000/api/servico/proposta/aceitar/${id}`,
      {},
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
    commit("aceitarProposta", { info: await request.data });
    return request;
  },
  async GetPropostaAceita({ commit }, { id, token }) {
    console.log(token);
    const request = await axios.get(
      `http://localhost:8000/api/servico/proposta/byId/${id}`,

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
    commit("getPropostaAceita", { info: await request.data });
    return request;
  },
};

const mutations = {
  createProposta(state, { info }) {
    console.log(info);
    state.CreatePropostas = info;
  },
  getProposta(state, { info }) {
    state.Propostas = info;
  },
  aceitarProposta(state, { info }) {
    state.PropostaAceita = info;
  },
  getPropostaAceita(state, { info }) {
    state.InfoPropostaAceita = info;
  },

  //   LogOutPrestador(state) {
  //     state.prestador = null;
  //   },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
