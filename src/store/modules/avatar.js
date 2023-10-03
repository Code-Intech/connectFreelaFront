import axios from "axios";

const state = {
  fotoavatar: null,
};
const getters = {
  StateAvatar: (state) => state.fotoavatar,
};
const actions = {
  async getAvatar({ commit }, token) {

    let data = new FormData();
console.log(token);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/user/avatar',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        ...data.getHeaders()
      },
      
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

    // const request = await axios.get("http://localhost:8000/api/user/avatar", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });


    commit('setAvatar', {  avatar:  "https://img.quizur.com/f/img62dc75c68ada20.76829981.jpeg?lastEdited=1658615257"})
  },
};
const mutations = {
  setAvatar(state, { avatar }) {
    console.log(avatar);
    state.fotoavatar = avatar;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
