import http from "./http";
import authHeader from "./authHeader";

async function searchAll(payload, success, fail) {
  const header = authHeader();
  await http
    .get("/board/qna", {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function findById(payload, success, fail) {
  const header = authHeader();
  await http
    .get(`/board/qna/${payload}`, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function createQuestion(payload, success, fail) {
  const header = authHeader();
  await http
    .post(`/board/qna`, payload, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function deleteQuestion(payload, success, fail) {
  const header = authHeader();
  await http
    .delete(`/board/qna/${payload}`, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function createAnswer(questionId, answer, success, fail) {
  const header = authHeader();
  console.log("answer in createAnswer request :: ", answer);
  await http
    .post(`/board/qna/${questionId}`, answer, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function updateAnswer(answer, success, fail) {
  const header = authHeader();
  console.log("answer in updateAnswer request :: ", answer);
  await http
    .put(`/board/qna/1/answers/${answer.id}`, answer, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function deleteAnswer(answerId, success, fail) {
  const header = authHeader();
  console.log("answer in deleteAnswer request :: ", answerId);
  await http
    .delete(`/board/qna/1/answers/${answerId}`, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

export {
  searchAll,
  findById,
  createQuestion,
  deleteQuestion,
  createAnswer,
  updateAnswer,
  deleteAnswer
};
