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
  async Delfoto({ commit }, { token, id }) {
    console.log(token);
    const request = await axios.delete(
      `http://localhost:8000/api/album/remove/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    commit("dellFoto", { dell: request.data.error });
  },
  async addfoto({ commit }, { token, id, photo }) {
    console.log(token);
    console.log(id);
    console.log(photo);
    // const photo1 = photo.get("photo");
    const request = await axios.post(
      `http://localhost:8000/api/portifolio/add/${id}`,
      photo,
      {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    commit("addFoto", { add: request.data.sucess });
  },

  async getfotos({ commit }, { token, id }) {
    console.log(token);
    const request = await axios.get(`http://localhost:8000/api/album/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(request, "request");
    commit("addFoto", { addfoto: request.data });
  },
  async upalbum({ commit }, { token, id, album }) {
    console.log(token);
    const request = await axios.post(
      `http://localhost:8000/api/portifolio/update/${id}`,
      album,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request, "request");
    commit("upFoto", { sucess: request.data });
  },
  async dellAlbum({ commit }, { token, id }) {
    console.log(token);
    const request = await axios.delete(
      `http://localhost:8000/api/portifolio/album/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(request, "request");
    commit("dellAlbum", { sucess: request.data });
  },
};
const mutations = {
  setRrroAlbum(state, { errors }) {
    // console.log(errors);
    state.errors = errors;
  },
  setAlbum(state, { album }) {
    // console.log(album);
    state.portifolios = album;
  },
  dellFoto(state, { dell }) {
    // console.log(dell);
    state.dellfoto = dell;
  },
  addFoto(state, { addfoto }) {
    // console.log(addfoto, "state");
    state.portifolios = addfoto;
  },
  upFoto(state, { sucess }) {
    // console.log(sucess, "state");
    state.upfoto = sucess;
  },
  dellAlbum(state, { sucess }) {
    // console.log(sucess, "state");
    state.dellalbum = sucess;
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
