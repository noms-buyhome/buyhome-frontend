import {
  searchAll,
  findById,
  createAnswer,
  updateAnswer,
  deleteAnswer,
  createQuestion,
  deleteQuestion
} from "@/api/qnaRequest";

const qnaStore = {
  state: {
    qna: {},
    qnaList: []
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
      searchAll(payload, ({ data }) => {
        context.commit("RESET_QNA_LIST", data);
      }),
        error => {
          alert(error.response.data.message);
        };
    },
    actionFindById(context, payload) {
      findById(payload, ({ data }) => context.commit("SET_QNA", data)),
        error => {
          alert(error.response.data.message);
        };
    },
    actionCreateAnswer(context, payload) {
      const questionId = payload.questionId;
      const answer = payload.answer;
      createAnswer(
        questionId,
        answer,
        ({ data }) => {
          this.actionFindById(context, questionId);
        },
        error => {
          alert(error.response.data.message);
        }
      );
    },
    actionUpdateAnswer(context, answer) {
      updateAnswer(
        answer,
        ({ data }) => {
          console.log("result in actionUpdate :: ", data);
        },
        error => {
          console.log("error in actionUpdate :: ", error);
          alert(error.response.data.message);
        }
      );
    },
    actionDeleteAnswer(context, answer) {
      deleteAnswer(answer, ({ data }) => {});
    },
    actionCreateQuestion(context, payload) {
      createQuestion(
        payload,
        ({ data }) => {
          this.actionFindById(context, questionId);
        },
        error => {
          console.log("error in createQuestion action :: ", error);
          alert(error.response.data.message);
        }
      );
    },
    actionDeleteQuestion(context, payload) {
      deleteQuestion(
        payload,
        ({ data }) => {},
        error => {
          console.log("error in deleteQuestion action :: ", error.response);
          alert(error.response.data.message);
        }
      );
    }
  }
};
export default qnaStore;
