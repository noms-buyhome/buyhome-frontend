<template>
  <div class="card">
    <h1>test</h1>
    <div>
      <base-input
        label="Username"
        placeholder="Username"
        v-model="user.username"
      >
      </base-input>
    </div>
    <div>
      <base-input
        label="password"
        type="password"
        placeholder="password"
        v-model="user.password"
      >
      </base-input>
    </div>
    <base-button>로그인</base-button>
    <base-button>회원가입</base-button>
    <button v-on:click="kakaoLogin">
      <img src="@/assets/images/kakao_login_medium_wide.png" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    kakaoLogin() {
      window.Kakao.init("1abf7bc3180b84830c14d42286c23937");

      window.Kakao.Auth.authorize({
        redirectUri: `http://localhost:8080/api/auth/login?type=kakao`
      }).then(response => console.log(response));
    }
  }
};
</script>

<style></style>
