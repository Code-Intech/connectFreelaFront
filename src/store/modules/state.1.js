import axios from "axios";

const state = {
  fotoavatar: null,
  errors: null,
};
const getters = {
  Statealbum: (state) => state.fotoavatar,
};
const actions = {
  async CreateAlbum({ commit }, { token, album }) {
    console.log(album.token);
    console.log(album.album);

    const request = await axios.post(
      "http://localhost:8000/api/portifolio/create",
      {
        portifolioCover: album.get("FotoCapa"),
        portifolioPhotos: album.get("Fotos"),
        title: album.get("Titulo"),
        description: album.get("Texto"),
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    commit("setRrroAlbum", { errors: request.data.errors });
  },
};
const mutations = {
  setRrroAlbum(state, { errors }) {
    console.log(errors);
    state.errors = errors;
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
