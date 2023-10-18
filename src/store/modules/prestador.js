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
  async GetPrestador({ commit }, infoPresta) {
    const InfoPres = {
      valor_diaria: infoPresta.info.get("valor_diaria"),
      valor_hora: infoPresta.info.get("valor_hora"),
      cnpj: infoPresta.info.get("cnpj"),
      nome_empresa: infoPresta.info.get("nome_empresa"),
      habilidades: infoPresta.info.get("habilidades"),
      profissoes: infoPresta.info.get("profissoes"),
      apresentacao: infoPresta.info.get("apresentacao"),
    };

    console.log(InfoPres, "tokenprestador");

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
    commit("setprestador", { infocreate: await request.error.message });
  },
};
const mutations = {
  setprestador(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.error = infocreate;
    // console.log(state.edituser,"get")
  },

  // LogOutUpUser(state){
  //   state.edituser = null;
  // }
};
export default {
  state,
  getters,
  actions,
  mutations,
};
