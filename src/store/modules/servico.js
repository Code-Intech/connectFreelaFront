import axios from "axios";

const state = {
  ServicoEditarSkill: null,
  ServicoEditarProfession: null,
  servico: {
    contratante: {
      Nome_Completo: null,
      idtb_prestador: null,
    },
    servicoInfo: {
      idtb_servico: null,
      Titulo_Servico: null,
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
    ],
  },
  DeleteServico: null,
  fotosServico: null,
  mensagemSucceso: null,
  errors: [],
};
const getters = {
  StateServico: (state) => state.servico,
  StateFotosServico: (state) => state.fotosServico,
  StateEditarServicoSkill: (state) => state.ServicoEditarSkill,
  StateEditarServicoProfession: (state) => state.ServicoEditarProfession,
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

    // console.log(InfoServico.info.habilidades, "habilidad servico");

    const request = await axios.post(
      "http://localhost:8000/api/servico/create",
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${InfoServico.token}`,
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
    commit("createprestador", { infocreate: await request.data.message });
    return request;
  },
  async CreateServicoIMG({ commit }, { token, img, id }) {
    const request = await axios.post(
      `http://localhost:8000/api/servico/upload/img/${id}`,
      img,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("createServicoIMG", { infocreate: await request.data.message });
    return request;
  },
  async UpServico({ commit }, { token, info, id }) {
    const InfoPres = {
      Remoto_Presencial: info.get("Remoto_Presencial"),
      cep: info.get("cep"),
      numero: info.get("numero"),
      cidade: info.get("cidade"),
      estado: info.get("estado"),
      bairro: info.get("bairro"),
      rua: info.get("rua"),
      Estimativa_de_distancia: info.get("Estimativa_de_distancia"),
      Estimativa_Valor: info.get("Estimativa_Valor"),
      Estimativa_Idade: info.get("Estimativa_Idade"),
      Data_Inicio: info.get("Data_Inicio"),
      Estimativa_de_Termino: info.get("Estimativa_de_Termino"),
      Desc: info.get("Desc"),
      Titulo_Servico: info.get("Titulo_Servico"),
    };
    const request = await axios.patch(
      `http://localhost:8000/api/servico/update/${id}`,
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("UpServico", { infocreate: await request.data.message });
    return request;
  },
  async UpServicoSkills({ commit }, { token, info, id }) {
    const habilidades = info.get("habilidades");

    const InfoPres = {
      habilidades: JSON.parse(habilidades), // Converta a string em array
    };
    const request = await axios.patch(
      `http://localhost:8000/api/servico/update/habilidades/${id}`,
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("UpServicoSkills", { infocreate: await request.data.message });
    return request;
  },
  async UpServicoProfresions({ commit }, { token, info, id }) {
    const profissoes = info.get("profissoes");

    const InfoPres = {
      profissoes: JSON.parse(profissoes), // Converta a string em array
    };
    const request = await axios.patch(
      `http://localhost:8000/api/servico/update/profissoes/${id}`,
      InfoPres,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("UpServicoProfessions", { infocreate: await request.data.message });
    return request;
  },

  async getInfoServico({ commit }, token) {
    const request = await axios.get("http://localhost:8000/api/servico/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(request, "GetServico");
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);
    commit("setservico", { infoservicome: await request.data.servico });
    return request;
  },

  async getServico({ commit }) {
    const request = await axios.get("http://localhost:8000/servico", {});
    console.log(request);
    commit("setCardsServico", { infoservicocard: await request.data.servico });
  },
  async deleteServico({ commit }, { id, token }) {
    console.log(token);
    const request = await axios.delete(
      `http://localhost:8000/api/servico/delete/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    commit("dellServico", { deleteservico: await request.data });
  },
  async getFotosServico({ commit }, { id, token }) {
    console.log(token);
    const request = await axios.get(
      `http://localhost:8000/api/servico/images/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    commit("getfotosServico", { fotos: await request.data });
  },
  async upFotosServico({ commit }, { id, token, img }) {
    console.log(token);
    const request = await axios.post(
      `http://localhost:8000/api/servico/update/images/${id}`,
      img,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    commit("upfotosServico", { mensagem: await request.data });
  },
  async dellFotosServico({ commit }, { id, token }) {
    console.log(token);
    const request = await axios.delete(
      `http://localhost:8000/api/servico/delete/images/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request);
    commit("upfotosServico", { mensagem: await request.data });
  },
};

const mutations = {
  createprestador(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
  },
  createServicoIMG(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
  },
  UpServico(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
  },
  UpServicoSkills(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
  },
  UpServicoProfessions(state, { infocreate }) {
    console.log(infocreate);
    // console.log(state,"state")
    state.errors = infocreate;
    // console.log(state.edituser,"get")
  },

  setservico(state, { infoservicome }) {
    // console.log(infoservicome, "SETPrestador");
    // console.log(state,"state")
    state.servico = infoservicome;
    // console.log(state.prestador, "SETServico");
  },

  setCardsServico(state, { infoservicocard }) {
    state.servico = infoservicocard;
    // console.log(state.servico, "setCardsServico");
  },
  setServicoEditSkill(state, skills) {
    state.ServicoEditarSkill = skills;
    // console.log(state.servico, "setCardsServico");
  },
  setServicoEditProfession(state, Profession) {
    state.ServicoEditarProfession = Profession;
    // console.log(state.servico, "setCardsServico");
  },
  dellServico(state, deleteservico) {
    state.DeleteServico = deleteservico;
    // console.log(state.servico, "setCardsServico");
  },
  getfotosServico(state, fotos) {
    state.fotosServico = fotos;
    // console.log(state.servico, "setCardsServico");
  },
  upfotosServico(state, mensagem) {
    state.mensagemSucceso = mensagem;
    // console.log(state.servico, "setCardsServico");
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
