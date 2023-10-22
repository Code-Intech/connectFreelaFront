import axios from "axios";

const state = {
  errors: null,
};
const getters = {
  StatePrestador: (state) => state.prestador,
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
};

const mutations = {
  createprestador(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
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
