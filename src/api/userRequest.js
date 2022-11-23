import http from "./http";
import authHeader from "./authHeader";

async function findMe(success, fail) {
  const header = authHeader();
  await http
    .get("/user/me", {
      headers: header
    })
    .then(success)
    .catch(fail);
}

async function update(payload, success, fail) {
  const header = authHeader();
  await http
    .put(`/user/${payload.id}`, payload, {
      headers: header
    })
    .then(success)
    .catch(fail);
}

export { findMe, update };
