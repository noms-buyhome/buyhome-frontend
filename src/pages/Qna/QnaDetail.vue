<template>
<div>
  <card>
      <h4 class="card-title">{{qna.title}}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{qna.author}}</h6>
      <blockquote class="blockquote mb-0">
        <p class="card-text">{{qna.content}}</p>
      </blockquote>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
      <p class="text-right">{{qna.createdTime}}</p>
  </card>
  <div v-if="qna.answers">
    <card v-for="(answer, index) in qna.answers" :key="index">
        <h4 class="card-title">{{answer.title}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{answer.author}}</h6>
        <p class="card-text">{{answer.content}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        <p class="text-right">{{answer.createdTime}}</p>
    </card>
  </div>
  <div v-else>답변이 없습니다.</div>
<!-- 답변 작성란 -->
  <card>
      <form @submit.prevent>
        <base-input label="title"
                    type="title"
                    placeholder="제목">
            
        </base-input>
        <base-input label="content"
                    type="text"
                    placeholder="content">
        </base-input>
        
      <base-button native-type="submit">답변 작성</base-button>
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
    }
  },
  created() {
    const qnaId = this.$route.params.qnaId;
    this.actionFindById(qnaId);
  },
  computed: {
    ...mapGetters(["getQna"]),
    qna() {
      return this.getQna;
    }
  },
  methods: {
    ...mapActions(["actionFindById"]),
    moveToList(){
      this.$router.push({name:"qnaList"});
    },
  }
};
</script>
<style></style>
