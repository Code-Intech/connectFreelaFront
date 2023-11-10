import axios from "axios";

const state = {
  CreatePropostas: null,
  Propostas: null,
  PropostaAceita: null,
  InfoPropostaAceita: null,
  PropostaEnviadas: null,
};
const getters = {
  StateCreateProposta: (state) => state.CreatePropostas,
  StateGetProposta: (state) => state.Propostas,
  StateInfoPropostaAceita: (state) => state.InfoPropostaAceita,
  StateInfoPropostaEnviadas: (state) => state.PropostaEnviadas,
};
const actions = {
  async CreateProposta({ commit }, { infoProposta, id, token }) {
    const Info = JSON.stringify({
      Valor_Proposta: infoProposta.get("Valor"),
      Comentario: infoProposta.get("Texto"),
      Data_Proposta: infoProposta.get("Data"),
    });

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
  async GetPropostaEnviadas({ commit }, token) {
    const request = await axios.get(
      `http://localhost:8000/api/servico/proposta/me`,

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
    commit("getPropostaEnviadas", { info: await request.data });
    return request;
  },
};

const mutations = {
  createProposta(state, { info }) {
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
  getPropostaEnviadas(state, { info }) {
    state.PropostaEnviadas = info;
  },

  LogOutPropostas(state) {
    state.CreatePropostas = null;
    state.Propostas = null;
    state.PropostaAceita = null;
    state.InfoPropostaAceita = null;
    state.PropostaEnviadas = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
