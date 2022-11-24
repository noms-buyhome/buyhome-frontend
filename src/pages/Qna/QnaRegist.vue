<template>
  <card>
    <form @submit.prevent>
      <base-input
        label="제목"
        type="title"
        placeholder="Enter title"
        v-model="question.title"
      >
      </base-input>

      <base-input label="내용">
        <textarea
          v-model="question.content"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </base-input>
      <base-button v-on:click="createQuestion" native-type="submit"
        >등록</base-button
      >
      <base-button v-on:click="moveToList">목록으로</base-button>
    </form>
  </card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      question: {}
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"])
  },
  methods: {
    ...mapActions(["actionCreateQuestion"]),
    moveToList() {
      this.$router.push({ name: "qnaList" });
    },
    createQuestion() {
      this.question.author = this.getCurrentUser;
      console.log(
        "current user in creatQuestion::QnaRegist.vue :: ",
        this.question.author
      );
      this.actionCreateQuestion(this.question);
      this.moveToList();
    }
  }
};
</script>

<style></style>
