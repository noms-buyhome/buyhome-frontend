import http from "./http";

async function generalLogin(user, success, fail) {
  console.log("user in http module:: ", user);
  await http
    .post("/auth/login", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

async function kakaoLogin(success, fail) {
  window.Kakao.init("1abf7bc3180b84830c14d42286c23937");

  await window.Kakao.Auth.authorize({
    redirectUri: `http://localhost:8080/api/auth/login?type=kakao`
  })
    .then(success)
    .catch(fail);
}

export { generalLogin, kakaoLogin };
