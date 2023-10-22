import axios from "axios";

const state = {
  servico: {
    contratante: {
      Nome_Completo: null,
    },
    servicoInfo: {
      idtb_servico: null,
      Data_Inicio: null,
      Estimativa_de_distancia: null,
      Estimativa_Valor: null,
      Estimativa_Idade: null,
      Remoto_Presencial: null,
      Estimativa_de_termino: null,
      Desc: null,
    },
    localidade: {
      Cidade: null,
      Estado: null,
      Bairro: null,
    },
    servicoProfessions: [
      {
        Profissao: null,
        idtb_profissoes: null,
        Categoria: null,
        tb_categoria_idtb_categoria: null,
      },
    ],
    servicoSkills: [
      {
        Habilidade: null,
        idtb_habilidades: null,
      },
    ]
  },
  errors: null,
};
const getters = {
  StateServico: (state) => state.servico,
};
const actions = {
  async CreateServico({ commit }, InfoServico) {
    const habilidades = InfoServico.info.get("habilidades");
    const profissoes = InfoServico.info.get("profissoes");

    const InfoPres = {
      habilidades: JSON.parse(habilidades), // Converta a string em array
      profissoes: JSON.parse(profissoes), // Converta a string em array
      //   profissoes: InfoServico.info.get("profissoes"),
      //   habilidades: InfoServico.info.get("habilidades"),
      Remoto_Presencial: InfoServico.info.get("Remoto_Presencial"),
      cep: InfoServico.info.get("cep"),
      numero: InfoServico.info.get("numero"),
      cidade: InfoServico.info.get("cidade"),
      estado: InfoServico.info.get("estado"),
      bairro: InfoServico.info.get("bairro"),
      rua: InfoServico.info.get("rua"),
      Estimativa_de_distancia: InfoServico.info.get("Estimativa_de_distancia"),
      Estimativa_Valor: InfoServico.info.get("Estimativa_Valor"),
      Estimativa_Idade: InfoServico.info.get("Estimativa_Idade"),
      Data_Inicio: InfoServico.info.get("Data_Inicio"),
      Estimativa_de_Termino: InfoServico.info.get("Estimativa_de_Termino"),
      Desc: InfoServico.info.get("Desc"),
      Titulo_Servico: InfoServico.info.get("Titulo_Servico"),
    };

    console.log(InfoServico.info.habilidades, "habilidad servico");

    const request = await axios.post(
      "http://localhost:8000/api/servico/create",
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${InfoServico.token}`,
        },
      }
    );
    // console.log(request);
    commit("createprestador", { infocreate: await request.error.message });
  },

  async getInfoServico({ commit }, token) {
    const request = await axios.get("http://localhost:8000/api/servico/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(request, "GetServico");
    commit("setservico", { infoprestador: await request.data.servico });
  },

  async getServico({ commit }) {
    const request = await axios.get("http://localhost:8000/servico", {});
    commit("setCardsServico", {infoservicocard: await request.data.servico});
  },
};

const mutations = {
  createprestador(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
  },

  setservico(state, { infoservico }) {
    // console.log(infoprestador, "SETPrestador");
    // console.log(state,"state")
    state.servico = infoservico;
    console.log(state.prestador, "SETServico");
  },

  setCardsServico(state, { infoservicocard }) {
    state.servico = infoservicocard;
    console.log(state.servico, "setCardsServico");
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
