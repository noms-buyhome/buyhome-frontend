export default function authHeader() {
  const storageItems = JSON.parse(sessionStorage.getItem("vuex"));
  if (!storageItems) return {};
  const accessToken = storageItems.authStore.accessToken;
  if (accessToken) {
    return {
      Authorization: accessToken
    };
  } else {
    return {};
  }
}
