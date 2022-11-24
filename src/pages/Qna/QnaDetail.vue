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
    <div v-if="qna.answers">
      <card v-for="(answer, index) in qna.answers" :key="index">
        <h4 class="card-title">{{ answer.title }}</h4>
        <h6 class="card-subtitle mb-2 text-muted text-right">
          {{ answer.author.nickname }}
        </h6>
        <p class="card-text">{{ answer.content }}</p>
        <a class="card-link">수정</a>
        <a v-on:click="deleteAnswer(answer.id)">삭제</a>
        <p class="text-right">{{ answer.createdTime }}</p>
      </card>
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

export default {
  components: { BaseButton, BaseInput },
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
    }
  },
  methods: {
    ...mapActions([
      "actionFindById",
      "actionCreateAnswer",
      "actionUserProfile",
      "actionUpdateAnswer",
      "actionDeleteAnswer"
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
    updateAnswer() {
      this.actionUpdateAnswer(this.qna.id, this.selectedAnswer);
    },
    showUpdateInput(answer) {
      this.isClicked = true;
      this.selectedAnswer = answer;
    },
    deleteAnswer(answerId) {
      this.actionDeleteAnswer(answerId);
    }
  }
};
</script>
<style></style>
