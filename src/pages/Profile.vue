<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="user"> </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm";
import UserCard from "./Profile/UserCard";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    EditProfileForm,
    UserCard
  },
  created() {
    this.actionUserProfile();
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
    user() {
      return this.getCurrentUser;
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["actionUserProfile"])
  }
};
</script>
<style></style>
