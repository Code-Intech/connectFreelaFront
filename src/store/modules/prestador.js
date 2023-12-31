import axios from "axios";

const state = {
  prestador: {
    prestadorInfo: {
      Nome_Empresa: null,
      CNPJ: null,
      tb_user_idtb_user: null,
      idtb_prestador: null,
      Valor_Da_Hora: null,
      Valor_diaria: null,
    },
    prestadorProfessions: [
      {
        Profissao: null,
        idtb_profissoes: null,
        Experiencia: null,
        Categoria: null,
        tb_categoria_idtb_categoria: null,
      },
    ],
    prestadorSkills: [
      {
        Habilidade: null,
        idtb_habilidades: null,
      },
    ],
    apresentacao: null,
  },
  PrestadorID: null,
  error: null,
  error2: {
    error: null,
    0: null,
  },
};
const getters = {
  StatePrestador: (state) => state.prestador,
  StatePrestadorID: (state) => state.PrestadorID,
};
const actions = {
  async CreatePrestador({ commit }, infoPresta) {
    const habilidades = infoPresta.info.get("habilidades");
    const profissoes = infoPresta.info.get("profissoes");

    const InfoPres = {
      valor_diaria: infoPresta.info.get("valor_diaria"),
      valor_hora: infoPresta.info.get("valor_hora"),
      cnpj: infoPresta.info.get("cnpj"),
      nome_empresa: infoPresta.info.get("nome_empresa"),
      habilidades: JSON.parse(habilidades), // Converta a string em array
      profissoes: JSON.parse(profissoes), // Converta a string em array
      apresentacao: infoPresta.info.get("apresentacao"),
    };

    const request = await axios.post(
      "/api/prestador/create",
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${infoPresta.token}`,
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
    if (request.status > 400) {
      commit("createprestador", { infocreate: await request.error.message });
    } else {
      commit("createprestador", { infocreate: await request.data.success });
    }
    return request;
  },

  async UpPrestador({ commit }, infoPresta) {
    const habilidades = infoPresta.info.get("habilidades");
    const profissoes = infoPresta.info.get("profissoes");

    const InfoPres = {
      valor_diaria: infoPresta.info.get("valor_diaria"),
      valor_hora: infoPresta.info.get("valor_hora"),
      cnpj: infoPresta.info.get("cnpj"),
      nome_empresa: infoPresta.info.get("nome_empresa"),
      habilidades: JSON.parse(habilidades), // Converta a string em array
      profissoes: JSON.parse(profissoes), // Converta a string em array
      apresentacao: infoPresta.info.get("apresentacao"),
    };

    const request = await axios.patch(
      "/api/prestador/update",
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${infoPresta.token}`,
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
    if (request.status > 400) {
      commit("uoprestador", { infocreate: await request.error.message });
    } else {
      commit("uoprestador", { infocreate: await request.data.success });
    }
    return request;
  },
  async getInfoPrestador({ commit }, { token }) {
    const tt = token;
    const request = await axios.get(
      "/api/prestador/me",

      {
        headers: {
          Authorization: `Bearer ${tt}`,
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
    commit("seteditprestador", { infoprestador: await request.data.prestador });
    return request;
  },
  async getInfoPrestadorID({ commit }, id) {
    const request = await axios.get(`/prestador/${id}`);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("seteditprestadorme", {
      infoprestadorMe: await request.data.prestador,
    });
    return request;
  },

  async getAllPrestadores({ commit }) {
    const request = await axios.get("/prestador", {});
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("setCardsPrestador", {
      infoprestadorcard: await request.data.prestador,
    });
    return request;
  },
};

const mutations = {
  createprestador(state, { infocreate }) {
    state.error = infocreate;
  },
  uoprestador(state, { infocreate }) {
    state.error = infocreate;
  },
  seteditprestador(state, { infoprestador }) {
    state.prestador = infoprestador;
  },
  setCardsPrestador(state, { infoprestadorcard }) {
    state.prestador = infoprestadorcard;
  },
  seteditprestadorme(state, { infoprestadorMe }) {
    state.PrestadorID = infoprestadorMe;
  },

  LogOutPrestador(state) {
    state.prestador = null;
    state.PrestadorID = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
