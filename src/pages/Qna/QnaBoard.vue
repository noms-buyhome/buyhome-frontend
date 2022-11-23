<template>
  <base-table :data="qnaList"
            :columns="columns">
        <template slot="columns">
          <th class="text-center">#</th>
          <th>title</th>
          <th>author</th>
          <th>created time</th>
          <th class="text-right">Actions</th>
        </template>  
        <template slot-scope="{row}">
          <td>{{row.id}}</td>
          <td v-on:click="moveToDetail(row.id)">{{row.title}}</td>
          <td>{{row.author.nickname}}</td>
          <td>{{row.createdTime}}</td>
          <td class="td-actions text-right">
            <base-button type="info" size="sm" icon>
              <i class="tim-icons icon-single-02"></i>
            </base-button>
            <base-button type="success" size="sm" icon>
              <i class="tim-icons icon-settings"></i>
            </base-button>
            <base-button type="danger" size="sm" icon>
              <i class="tim-icons icon-simple-remove"></i>
            </base-button>
          </td>
        </template>    
</base-table>
</template>
<script>

import { mapActions, mapGetters } from "vuex";
import BaseTable from "@/components/BaseTable.vue"
export default {
  components: {
    BaseTable
  },
  data(){
    return {
      columns: ["id", "title", "author", "created", "actions"],
    }
  },
  created() {
    this.actionSearchAll();
  },
  computed: {
    ...mapGetters(["getQnaList"]),
    qnaList() {
      return this.getQnaList;
    }
  },
  methods: {
    ...mapActions(["actionSearchAll"]),
    moveToDetail(qnaId){
      this.$router.push({name:"qnaDetail",params:{qnaId: qnaId}});
    },
  }
};
</script>
<style></style>
