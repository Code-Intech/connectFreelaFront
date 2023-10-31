import axios from "axios";

const state = {
  prestador: {
    prestadorInfo: {
      Nome_Empresa: null,
      CNPJ: null,
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

    // console.log(InfoPres, "tokenprestador");

    const request = await axios.post(
      "http://localhost:8000/api/prestador/create",
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
    // console.log(request);
    commit("createprestador", { infocreate: await request.error.message });
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

    // console.log(InfoPres, "tokenprestador");

    const request = await axios.patch(
      "http://localhost:8000/api/prestador/update",
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${infoPresta.token}`,
        },
      }
    );
    // console.log(request);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("uoprestador", { infocreate: await request.error.message });
    return request;
  },
  async getInfoPrestador({ commit }, token) {
    const request = await axios.get("http://localhost:8000/api/prestador/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(request, "GetPrestador");
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
    const request = await axios.get(`http://localhost:8000/prestador/${id}`);
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
    const request = await axios.get("http://localhost:8000/prestador", {});
    // console.log(request, "GetAllPrestador");
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
    console.log(infocreate);
    // console.log(state,"state")
    state.error = infocreate;
    // console.log(state.edituser,"get")
  },
  uoprestador(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.error = infocreate;
    // console.log(state.edituser,"get")
  },
  seteditprestador(state, { infoprestador }) {
    // console.log(infoprestador, "SETPrestador");
    // console.log(state,"state")
    state.prestador = infoprestador;
    console.log(state.prestador, "SETPrestador");
  },
  setCardsPrestador(state, { infoprestadorcard }) {
    state.prestador = infoprestadorcard;
    // console.log(state.prestador, "SetCardsPrestador");
  },
  seteditprestadorme(state, { infoprestadorMe }) {
    state.PrestadorID = infoprestadorMe;
    // console.log(state.prestador, "SetCardsPrestador");
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
