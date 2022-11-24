<template>
  <div class="card">
    <h1>Login</h1>
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
    <base-button v-on:click="generalLogin">로그인</base-button>
    <base-button v-on:click="moveToResist">회원가입</base-button>
    <button v-on:click="kakaoLogin">
      <img src="@/assets/images/kakao_login_medium_wide.png" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState(["accessToken"])
  },
  methods: {
    ...mapActions(["login"]),
    async kakaoLogin() {
      Kakao.init("1abf7bc3180b84830c14d42286c23937");

      Kakao.Auth.authorize({
        redirectUri: `http://localhost:8080/api/auth/login?type=kakao`,
        prompts: "login"
      }).then(response => {
        console.log(response);
      });
    },
    generalLogin() {
      console.log("user in Login.vue ::", this.user);
      this.login(this.user);
      this.moveToMain();
    },
    moveToMain() {
      this.$router.push("/");
    },
    moveToResist() {
      this.$router.push({ name: "regist" });
    }
  }
};
</script>

<style></style>
