import axios from "axios";

const state = {
  prestador: {
    valor_diaria: null,
    valor_hora: null,
    cnpj: null,
    nome_empresa: null,
    habilidades: [],
    profissoes: [],
    apresentacao: null,
  },
  error: null,
};
const getters = {
  StatePrestador: (state) => state.prestador,
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
    // console.log(request);
    commit("createprestador", { infocreate: await request.error.message });
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

    const request = await axios.post(
      "http://localhost:8000/api/prestador/update",
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${infoPresta.token}`,
        },
      }
    );
    // console.log(request);
    commit("uoprestador", { infocreate: await request.error.message });
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
