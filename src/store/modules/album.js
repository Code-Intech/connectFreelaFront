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
};
const getters = {
  Statealbum: (state) => state.fotoavatar,
  StatealbumMe: (state) => state.portifolios,
};
const actions = {
  async CreateAlbum({ commit }, { token, album }) {
    console.log(token, "tokennnnnnnnnn");
    console.log(album);

    const request = await axios.post(
      "http://localhost:8000/api/portifolio/create",
      album,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    commit("setRrroAlbum", { errors: request.data.errors });
  },
  async GetAlbum({ commit }, token) {
    console.log(token);
    const request = await axios.get("http://localhost:8000/api/portifolio", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit("setAlbum", { album: request.data.portifolios });
  },
};
const mutations = {
  setRrroAlbum(state, { errors }) {
    console.log(errors);
    state.errors = errors;
  },
  setAlbum(state, { album }) {
    console.log(album);
    state.portifolios = album;
  },
  LogOutAvatar(state) {
    state.fotoavatar = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
