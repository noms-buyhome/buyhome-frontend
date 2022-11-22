import http from "@/api/http";

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
      http.post("auth/login", payload).then(({ data }) => {
        console.log("data from generalLogin :: ", data);
        const accessToken = data.access;
        context.commit("setAccessToken", accessToken);
      });
    }
  }
};
export default authStore;
