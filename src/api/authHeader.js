export default function authHeader() {
  const storageItems = JSON.parse(sessionStorage.getItem("vuex"));
  const accessToken = storageItems.authStore.accessToken;
  if (user.accessToken) {
    return { Authorization: accessToken };
  } else {
    return {};
  }
}
