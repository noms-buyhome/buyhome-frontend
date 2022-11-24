import { generalLogin, kakaoLogin } from "@/api/authRequest";

const authStore = {
  state: {
    accessToken: "",
    loginStatus:false,
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
        ({data}) => {
          context.commit("LOGOUT");
          console.log("error in login ::", data)
          alert(data);
        }
      );
    },
    logout(context) {
      context.commit("SET_ACCESSTOKEN","");
      context.commit("LOGOUT");
    },
    kakaoLogin(context) {}
  }
};
export default authStore;
