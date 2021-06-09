<template>
  <div>
    <a style="margin-left: 10px">{{ this.objectItem().title }}</a>
    <input class="delButton" type="button" value="삭제" v-on:click="deleteItem"/>
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
  margin-left: 30px;
}

</style>