<template>
  <div>
    <card>
      <h4 class="card-title">{{ qna.title }}</h4>
      <h6 class="card-subtitle mb-2 text-muted text-right">
        {{ qna.author.nickname }}
      </h6>
      <blockquote class="blockquote mb-0">
        <p class="card-text">{{ qna.content }}</p>
      </blockquote>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
      <p class="text-right">{{ qna.createdTime }}</p>
    </card>
    <div v-if="answers">
      <Answer
        v-for="(answer, index) in answers"
        :key="index"
        v-bind:answer="answer"
      />
    </div>
    <div v-else><p>답변이 없습니다.</p></div>
    <!-- 답변 작성란 -->
    <card>
      <form @submit.prevent>
        <base-input
          label="title"
          type="title"
          placeholder="제목"
          v-model="newAnswer.title"
        >
        </base-input>
        <base-input
          label="content"
          type="text"
          placeholder="content"
          v-model="newAnswer.content"
        >
        </base-input>

        <base-button v-on:click="createAnswer">답변 작성</base-button>
      </form>
    </card>

    <base-button v-on:click="moveToList">목록으로</base-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BaseButton from "../../components/BaseButton.vue";
import BaseInput from "../../components/Inputs/BaseInput.vue";
import Answer from "./Answer.vue";
export default {
  components: { BaseButton, BaseInput, Answer },
  data() {
    return {
      columns: ["id", "title", "author", "created", "actions"],
      newAnswer: {},
      selectedAnswer: {},
      isClicked: false
    };
  },
  created() {
    const qnaId = this.$route.params.qnaId;
    this.actionFindById(qnaId);
  },
  computed: {
    ...mapGetters(["getQna", "getCurrentUser", "getAccessToken"]),
    qna() {
      return this.getQna;
    },
    currentUser() {
      return this.getCurrentUser;
    },
    answers() {
      return this.qna.answers;
    }
  },
  // watch: {
  //   qna: {
  //     deep: true,
  //     handler() {
  //       this.actionFindById(this.$route.params.qnaId);
  //     }
  //   }
  // },
  methods: {
    ...mapActions([
      "actionFindById",
      "actionCreateAnswer",
      "actionUserProfile"
    ]),
    moveToList() {
      this.$router.push({ name: "qnaList" });
    },
    moveToLogin() {
      this.$router.push({ name: "login" });
    },
    createAnswer() {
      if (this.getAccessToken == "") {
        alert("로그인이 필요한 서비스입니다.");
        this.moveToLogin();
      }
      this.actionUserProfile();
      this.newAnswer.author = this.currentUser;
      this.actionCreateAnswer({
        questionId: this.qna.id,
        answer: this.newAnswer
      });
    },
    deleteAnswer(answerId) {
      this.actionDeleteAnswer(answerId);
    },
    clickUpdate() {
      this.isClicked = !this.isClicked;
    }
  }
};
</script>
<style></style>
