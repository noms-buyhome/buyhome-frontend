import { findMe, update, remove } from "@/api/userRequest";
import { authStore } from "./authStore";

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
      update(
        payload,
        () => {},
        error => console.log("error in update :: ", error)
      );
    },
    actionRemove(context, payload) {
      remove(
        payload,
        () => {
          alert("회원이 삭제되었습니다.");
          context.commit("SET_USER", {});
          context.commit("SET_ACCESSTOKEN", null);
        },
        error => console.log("error in delete :: ", error)
      );
    }
  }
};
export default userStore;
