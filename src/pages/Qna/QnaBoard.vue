<template>
  <div>
    <base-table :data="qnaList" :columns="columns">
      <template slot="columns">
        <th class="text-center">#</th>
        <th>title</th>
        <th>author</th>
        <th>created time</th>
        <th class="text-right">Actions</th>
      </template>
      <template slot-scope="{ row }">
        <td>{{ row.id }}</td>
        <td v-on:click="moveToDetail(row.id)">{{ row.title }}</td>
        <td>{{ row.author.nickname }}</td>
        <td>{{ row.createdTime }}</td>
        <!-- <td v-if="isAuthor(row)" class="td-actions text-right">
          <base-button type="success" size="sm" icon>
            <i class="tim-icons icon-settings"></i>
          </base-button>
          <base-button
            v-on:click="deleteQuestion(row.id)"
            type="danger"
            size="sm"
            icon
          >
            <i class="tim-icons icon-simple-remove"></i>
          </base-button>
        </td> -->
      </template>
    </base-table>
    <base-button v-on:click="moveToRegist">질문 등록</base-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BaseTable from "@/components/BaseTable.vue";
import BaseButton from "../../components/BaseButton.vue";

export default {
  components: {
    BaseTable,
    BaseButton
  },
  data() {
    return {
      columns: ["id", "title", "author", "created", "actions"]
    };
  },
  created() {
    this.actionSearchAll();
  },
  computed: {
    ...mapGetters(["getQnaList", "getCurrentUser"]),
    qnaList() {
      return this.getQnaList;
    }
  },
  methods: {
    ...mapActions(["actionSearchAll", "actionDeleteQuestion"]),
    moveToDetail(qnaId) {
      this.$router.push({ name: "qnaDetail", params: { qnaId: qnaId } });
    },
    moveToRegist() {
      this.$router.push({ name: "qnaRegist" });
    },
    movetoList() {
      this.$router.push({ name: "qna" });
    },
    isAuthor(question) {
      return question.author.id === this.getCurrentUser.id;
    },
    deleteQuestion(questionId) {
      console.log("deleteQuestion call::");
      this.actionDeleteQuestion(questionId);
      this.movetoList();
    }
  }
};
</script>
<style></style>
