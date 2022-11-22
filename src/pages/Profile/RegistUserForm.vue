<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="col-md-3 px-md-1">
      <base-input
        label="Username"
        placeholder="Username"
        v-model="user.username"
      >
      </base-input>
    </div>
    <div class="col-md-3 px-md-1">
      <base-input
        label="password"
        type="password"
        placeholder="password"
        v-model="user.password"
      >
      </base-input>
    </div>

    <div class="col-md-3 px-md-1">
      <base-input
        label="nickname"
        placeholder="Nickname"
        v-model="user.nickname"
      >
      </base-input>
    </div>
    <div class="col-md-3 px-md-1">
      <base-input
        label="Email address"
        type="email"
        placeholder="mike@email.com"
        v-model="user.email"
      >
      </base-input>
    </div>

    <base-button slot="footer" type="primary" fill v-on:click="createUser"
      >Save</base-button
    >
  </card>
</template>
<script>
import http from "@/api/http";

export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    createUser() {
      http
        .post("/auth/regist", this.user)
        .then(() => alert("가입 되었습니다."))
        .catch(({ response }) => alert(response.data));
    }
  }
};
</script>
<style></style>
