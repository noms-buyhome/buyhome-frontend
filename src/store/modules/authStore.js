import { generalLogin, kakaoLogin } from "@/api/authRequest";

const authStore = {
  state: {
    accessToken: ""
  },
  getters: {
    getAccessToken: function(state) {
      return state.accessToken;
    }
  },
  mutations: {
    SET_ACCESSTOKEN(state, payload) {
      state.accessToken = payload;
    }
  },
  actions: {
    login(context, payload) {
      generalLogin(
        payload,
        ({ data }) => {
          context.commit("SET_ACCESSTOKEN", data.access);
          context.dispatch("actionUserProfile");
        },
        error => console.log("error in login ::", error)
      );
    },
    kakaoLogin(context) {}
  }
};
export default authStore;
