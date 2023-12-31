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
  ServicosByID: null,
  mensagemSucceso: null,
  errors: [],
};
const getters = {
  StateServico: (state) => state.servico,
  StateFotosServico: (state) => state.fotosServico,
  StateEditarServicoSkill: (state) => state.ServicoEditarSkill,
  StateEditarServicoProfession: (state) => state.ServicoEditarProfession,
  StateServicoByID: (state) => state.ServicosByID,
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
      "/api/servico/create",
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
    commit("createprestador", { infocreate: await request.data.message });
    return request;
  },
  async CreateServicoIMG({ commit }, { token, img, id }) {
    const request = await axios.post(
      `/api/servico/upload/img/${id}`,
      img,
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
      `/api/servico/update/${id}`,
      InfoPres,
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
    commit("UpServico", { infocreate: await request.data.message });
    return request;
  },
  async UpServicoSkills({ commit }, { token, info, id }) {
    const habilidades = info.get("habilidades");

    const InfoPres = {
      habilidades: JSON.parse(habilidades), // Converta a string em array
    };
    const request = await axios.patch(
      `/api/servico/update/habilidades/${id}`,
      InfoPres,
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
    commit("UpServicoSkills", { infocreate: await request.data.message });
    return request;
  },
  async UpServicoProfresions({ commit }, { token, info, id }) {
    const profissoes = info.get("profissoes");

    const InfoPres = {
      profissoes: JSON.parse(profissoes), // Converta a string em array
    };
    const request = await axios.patch(
      `/api/servico/update/profissoes/${id}`,
      InfoPres,
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
    commit("UpServicoProfessions", { infocreate: await request.data.message });
    return request;
  },

  async getInfoServico({ commit }, token) {
    console.log(token);
    const request = await axios.get("/api/servico/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const request = await axios.get("/servico", {});
    commit("setCardsServico", { infoservicocard: await request.data.servico });
  },
  async deleteServico({ commit }, { id, token }) {
    const request = await axios.delete(
      `/api/servico/delete/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    commit("dellServico", { deleteservico: await request.data });
  },
  async getFotosServico({ commit }, { id, token }) {
    const request = await axios.get(
      `/api/servico/images/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    commit("getfotosServico", { fotos: await request.data });
  },
  async upFotosServico({ commit }, { id, token, img }) {
    const request = await axios.post(
      `/api/servico/update/images/${id}`,
      img,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    commit("upfotosServico", { mensagem: await request.data });
  },
  async dellFotosServico({ commit }, { id, token }) {
    console.log(token);
    const request = await axios.delete(
      `/api/servico/delete/image/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    commit("upfotosServico", { mensagem: await request.data });
  },
  async getServicoID({ commit }, id) {
    const request = await axios.get(`/servico/${id}`);
    commit("getServicoByID", { infos: await request.data.servico });
  },
};

const mutations = {
  createprestador(state, { infocreate }) {
    state.errors = infocreate;
  },
  createServicoIMG(state, { infocreate }) {
    state.errors = infocreate;
  },
  UpServico(state, { infocreate }) {
    state.errors = infocreate;
  },
  UpServicoSkills(state, { infocreate }) {
    state.errors = infocreate;
  },
  UpServicoProfessions(state, { infocreate }) {
    state.errors = infocreate;
  },

  setservico(state, { infoservicome }) {
    state.servico = infoservicome;
  },

  setCardsServico(state, { infoservicocard }) {
    state.servico = infoservicocard;
  },
  setServicoEditSkill(state, skills) {
    state.ServicoEditarSkill = skills;
  },
  setServicoEditProfession(state, Profession) {
    state.ServicoEditarProfession = Profession;
  },
  dellServico(state, deleteservico) {
    state.DeleteServico = deleteservico;
  },
  getfotosServico(state, fotos) {
    state.fotosServico = fotos;
  },
  upfotosServico(state, mensagem) {
    state.mensagemSucceso = mensagem;
  },
  getServicoByID(state, infos) {
    state.ServicosByID = infos;
  },

  LogOutServico(state) {
    state.ServicoEditarSkill = null;
    state.ServicoEditarProfession = null;
    state.servico = null;
    state.DeleteServico = null;
    state.fotosServico = null;
    state.ServicosByID = null;
    state.mensagemSucceso = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
