import axios from "axios";

const state = {
  prestador: {
    idtb_prestador: null,
    Valor_Da_Hora: null,
    Valor_diaria: null,
    Nome_Empresa: null,
    CNPJ: null,
    tb_user_idtb_user: null,
    FlgStatus: null,
    created_at: null,
    updated_at: null,
    profissoes: [
      {
        id: null,
        Profissao: null,
        categoria_id: null,
        Categoria: null,
        esperiencia: null,
      },
    ],
    skills: [{ id: null, habilidade: null }],
    categorias: null,
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
    commit("uoprestador", { infocreate: await request.error.message });
  },
  async getInfoPrestador({ commit }, token) {
    const request = await axios.get("http://localhost:8000/prestador/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(request, "GetPrestador");
    commit("seteditprestador", { infoprestador: await request.data.prestador });
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
    // console.log(state.prestador[0].skills, "SETPrestador");
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
