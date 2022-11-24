import { findMe, update, remove } from "@/api/userRequest";
import { authStore } from "./authStore";

const userStore = {
  state: {
    currentUser: {}
  },
  getters: {
    getCurrentUser: function(state) {
      return state.currentUser;
    }
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    }
  },
  actions: {
    actionUserProfile(context) {
      console.log("user profile call ::");
      findMe(
        ({ data }) => {
          context.commit("SET_CURRENT_USER", data);
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
          context.commit("SET_CURRENT_USER", {});
          context.commit("SET_ACCESSTOKEN", null);
        },
        error => console.log("error in delete :: ", error)
      );
    }
  }
};
export default userStore;
