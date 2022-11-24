import { generalLogin, kakaoLogin } from "@/api/authRequest";

const authStore = {
  state: {
    accessToken: "",
    loginStatus: false
  },
  getters: {
    getAccessToken: function(state) {
      return state.accessToken;
    },
    isLogin(state) {
      return state.loginStatus;
    }
  },
  mutations: {
    SET_ACCESSTOKEN(state, payload) {
      state.accessToken = payload;
    },
    LOGIN(state) {
      state.loginStatus = true;
    },
    LOGOUT(state) {
      state.loginStatus = false;
    }
  },
  actions: {
    login(context, payload) {
      generalLogin(
        payload,
        ({ data }) => {
          context.commit("SET_ACCESSTOKEN", data.access);
          context.commit("LOGIN");
          context.dispatch("actionUserProfile");
        },
        error => {
          context.commit("LOGOUT");
          console.log("error in login ::", error);
          alert(error.response.data);
        }
      );
    },
    logout(context) {
      context.commit("SET_ACCESSTOKEN", "");
      context.commit("SET_CURRENT_USER", null);
      context.commit("LOGOUT");
    },
    kakaoLogin(context) {}
  }
};
export default authStore;
