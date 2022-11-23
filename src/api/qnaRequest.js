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

export { searchAll, findById };
