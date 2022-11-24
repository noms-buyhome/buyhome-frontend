<template>
  <card>
    <h4 class="card-title" v-if="!isClicked">{{ answer.title }}</h4>
    <base-input v-else v-model="answer.title"></base-input>
    <h6 class="card-subtitle mb-2 text-muted text-right">
      {{ answer.author.nickname }}
    </h6>
    <base-input v-if="isClicked" v-model="answer.content"></base-input>
    <p v-else class="card-text">{{ answer.content }}</p>

    <div v-if="!isClicked">
      <button v-on:click="isClicked = true" class="card-link">수정</button>
      <button v-on:click="deleteAnswer(answer.id)">삭제</button>
    </div>
    <div v-else>
      <button v-on:click="updateAnswer" class="card-link">적용</button>
      <button v-on:click="isClicked = false">취소</button>
    </div>
    <p class="text-right">{{ answer.createdTime }}</p>
  </card>
</template>

<script>
import BaseInput from "../../components/Inputs/BaseInput.vue";
import { mapActions } from "vuex";

export default {
  components: { BaseInput },
  props: {
    answer: Object
  },
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    ...mapActions(["actionUpdateAnswer", "actionDeleteAnswer"]),
    updateAnswer() {
      console.log("updateAnswer in Answer.vue ", this.answer);
      this.actionUpdateAnswer(this.answer, this.answer.questionId);
      this.isClicked = false;
    },

    deleteAnswer(answerId) {
      this.actionDeleteAnswer(answerId);
    }
  }
};
</script>

<style></style>
