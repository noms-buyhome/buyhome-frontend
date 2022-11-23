import { searchAll, findById } from "@/api/qnaRequest";
const qnaStore = {
    state: {
        qna: {},
        qnaList:[]
  },
    getters: {
        getQna(state) {
            return state.qna;
      },
    getQnaList: function(state) {
      return state.qnaList;
    }
  },
mutations: {
    SET_QNA(state, payload) {
        state.qna = payload;
    },
    RESET_QNA_LIST(state, payload) {
      state.qnaList = payload;
    }
  },
    actions: {
        actionSearchAll(context, payload) {
            searchAll(payload,
                ({ data }) => {
                    context.commit("RESET_QNA_LIST", data);
                }),
                (error) => {}
        },
        actionFindById(context, payload) {
            findById(payload,
                ({ data }) => context.commit("SET_QNA", data)),
                (error) => { }
        }
  }
};
export default qnaStore;
