import axios from "axios";

const state = {
  portifolios: {
    portifolio: {
      idtb_portifolio: null,
      Titulo: null,
      Capa: null,
      Descricao: null,
      FlgStatus: null,
      tb_prestador_idtb_prestador: null,
      tb_prestador_tb_user_idtb_user: null,
      created_at: null,
      updated_at: null,
    },
    photos: [
      {
        idtb_img_video: null,
        Img: null,
      },
    ],
  },

  fotoavatar: null,
  errors: null,
  dellfoto: null,
  addfoto: null,
  upfoto: null,
  dellalbum: null,
};
const getters = {
  Statealbum: (state) => state.fotoavatar,
  StatealbumMe: (state) => state.portifolios,
  StateErroAlbum: (state) => state.errors,
};
const actions = {
  async CreateAlbum({ commit }, { token, album }) {
    console.log(token);
    const request = await axios.post(
      "/api/portifolio/create",
      album,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(request.status, "request Status");
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);

    commit("setRrroAlbum", { errors: request.data.errors });
    return request;
  },
  async GetAlbumToken({ commit }, id) {
    const request = await axios.get(`/portifolio/${id}`);
    if (
      request.status === 400 ||
      request.status === 401 ||
      request.status === 404 ||
      request.status === 500
    )
      throw new Error(request.statusText);

    commit("setAlbum", { album: request.data.portifolios });
    return request;
  },
  async GetAlbum({ commit }, token) {
    const request = await axios.get(`/api/portifolio`, {
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

    commit("setAlbum", { album: request.data.portifolios });
    return request;
  },

  async Delfoto({ commit }, { token, id }) {
    const request = await axios.delete(
      `/api/album/remove/${id}`,
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

    commit("dellFoto", { dell: request.data.error });
    return request;
  },
  async addfoto({ commit }, { token, id, photo }) {
    const request = await axios.post(
      `/api/portifolio/add/${id}`,
      photo,
      {
        headers: {
          // "Content-Type": "multipart/form-data",
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
    commit("addFoto", { add: request.data.sucess });
    return request;
  },

  async getfotos({ commit }, { token, id }) {
    const request = await axios.get(`/api/album/${id}`, {
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
    commit("addFoto", { addfoto: request.data });
    return request;
  },
  async upalbum({ commit }, { token, id, album }) {
    const request = await axios.post(
      `/api/portifolio/update/${id}`,
      album,
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
    commit("upFoto", { sucess: request.data });
    return request;
  },
  async dellAlbum({ commit }, { token, id }) {
    const request = await axios.delete(
      `/api/portifolio/album/${id}`,
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
    commit("dellAlbum", { sucess: request.data });
    return request;
  },
};
const mutations = {
  setRrroAlbum(state, { errors }) {
    state.errors = errors;
  },
  setAlbum(state, { album }) {
    state.portifolios = album;
  },
  dellFoto(state, { dell }) {
    state.dellfoto = dell;
  },
  addFoto(state, { addfoto }) {
    state.portifolios = addfoto;
  },
  upFoto(state, { sucess }) {
    state.upfoto = sucess;
  },
  dellAlbum(state, { sucess }) {
    state.dellalbum = sucess;
  },
  setErro(state, { errors }) {
    state.errors = errors;
  },
  LogOutAlbum(state) {
    state.portifolios = null;
    state.fotoavatar = null;
    state.errors = null;
    state.dellfoto = null;
    state.addfoto = null;
    state.upfoto = null;
    state.dellalbum = null;
    state.portifolios = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
