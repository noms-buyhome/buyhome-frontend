import { generalLogin, kakaoLogin } from "@/api/user";

const authStore = {
  state: {
    accessToken: "",
    user: {}
  },
  getters: {
    getAccessToken: function(state) {
      return state.accessToken;
    },
    getUser: function(state) {
      return state.user;
    }
  },
  mutations: {
    setAccessToken: function(state, payload) {
      state.accessToken = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    login(context, payload) {
      generalLogin(payload, ({ data }) => {
        console.log(data);
        context.commit("setAccessToken", data.access);
      });
    },
    kakaoLogin(context) {}
  }
};
export default authStore;
