<template>
  <card type="user">
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img class="avatar" src="img/anime6.png" alt="..." />
        <h5 class="title">{{ user.username }}</h5>
      </a>
      <p class="description">
        {{ user.nickname }}
      </p>
    </div>
    <p></p>
    <p class="card-description">
      {{ user.createdTime }}
    </p>
  </card>
</template>
<script>
export default {
  props: {
    user: {
      username: "",
      nickname: "",
      createdTime: ""
    }
  },
  created() {
    console.log("user in card :: ", this.user);
  },
  methods: {}
};
</script>
<style></style>
