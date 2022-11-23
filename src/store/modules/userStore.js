import { findMe, update } from "@/api/userRequest";

const userStore = {
  state: {
    user: {}
  },
  getters: {
    getUser: function(state) {
      return state.user;
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    actionUserProfile(context) {
      console.log("user profile call ::");
      findMe(
        ({ data }) => {
          context.commit("SET_USER", data);
        },
        function(error) {
          console.log("error in action findMe :: ", error);
        }
      );
    },
    actionUpdate(context, payload) {
      console.log("outgoing data in action update :: ", payload);
      update(
        payload,
        ({ data }) => {
          console.log("after update :: ", data);
        },
        error => console.log("error in update :: ", error)
      );
    }
  }
};
export default userStore;
