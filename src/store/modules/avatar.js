import axios from "axios";

const state = {
  fotoavatar: null,
};
const getters = {
  StateAvatar: (state) => state.fotoavatar,
};
const actions = {
  async getAvatar({ commit }, token) {
    console.log(token);

    const request = await axios.get("http://localhost:8000/api/user/avatar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(request);

    commit("setAvatar", { avatar: request.data.success.avatar_url });
  },

  async GetFoto({ commit }, avatar) {
    console.log(avatar.token);
    console.log(avatar.avatar);

    const request = await axios.post(
      "http://localhost:8000/api/user/upload/avatar",
      {
        avatar: avatar.avatar.get("avatar"),
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${avatar.token}`,
        },
      }
    );
    console.log(request.data.success.avatar_url);

    commit("setAvatar", { avatar: request.data.success.avatar_url });
  },
};
const mutations = {
  setAvatar(state, { avatar }) {
    console.log(avatar);
    state.fotoavatar = avatar;
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
