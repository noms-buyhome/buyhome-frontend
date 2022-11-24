<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-8 px-md-1">
        <base-input
          label="Username"
          placeholder="Username"
          v-model="model.username"
          disabled
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 pl-md-1">
        <base-input label="Email address" type="email" v-model="model.email">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 pl-md-1">
        <base-input
          label="Nick Name"
          v-model="model.nickname"
          placeholder="Nick Name"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 pl-md-1">
        <base-input
          label="Password"
          v-model="model.password"
          placeholder="Password"
        >
        </base-input>
      </div>
    </div>

    <base-button type="primary" fill v-on:click="updateUser"
      >Update</base-button
    >
    <base-button type="danger" v-on:click="removeUser">Delete</base-button>
  </card>
</template>
<script>
import { mapActions } from "vuex";
import BaseButton from "../../components/BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    ...mapActions(["actionUpdate", "actionRemove"]),
    updateUser() {
      this.actionUpdate(this.model);
    },
    removeUser() {
      this.actionRemove(this.model.id);
      this.moveToLogin();
    },
    moveToLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style></style>
