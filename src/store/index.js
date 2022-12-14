import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import authStore from "@/store/modules/authStore";
import userStore from "@/store/modules/userStore";
import qnaStore from "@/store/modules/qnaStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { authStore, userStore, qnaStore },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage
    })
  ]
});
