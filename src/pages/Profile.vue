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
    ...mapGetters(["getUser"]),
    user() {
      return this.getUser;
    }
  },
  data() {
    return {
      model: {
        company: "Creative Code Inc.",
        email: "mike@email.com",
        username: "michael23",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "Melbourne",
        country: "Australia",
        about:
          "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
      }
    };
  },
  methods: {
    ...mapActions(["actionUserProfile"])
  }
};
</script>
<style></style>
