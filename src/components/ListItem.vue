<template>
  <div class="ListItem">
    <v-card>
    <v-list-item-content class="item">
      <v-list-item-title v-html="objectItem().title"></v-list-item-title>
      <v-list-item-subtitle v-html="objectItem().date"></v-list-item-subtitle>
      <v-btn class="delButton" elevation="50px" color="#09CE20" v-on:click="deleteItem">삭제하기</v-btn>
    </v-list-item-content>
    </v-card>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: "ListItem",
    props: {
      item: String
    },
    methods: {
      objectItem() {
        return JSON.parse(this.item)
      },
      deleteItem() {
        this.deleteTodoItem(this.item)
      },
      ...mapActions([
          'deleteTodoItem'
      ])
    }
  }
</script>

<style scoped="scss">
.delButton {
  margin-top: 10px;
}
.ListItem {
  margin-top: 20px;
}
.item {
  padding-left: 200px;
  padding-right: 200px;
}

</style>