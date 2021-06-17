<template>
<div class="home">
  <v-form
    ref="form"
    lazy-validation>
    <div class="row">
      <v-text-field
        v-model="todoTitle"
        label="제목을 입력하세요."
        class="block"
        outlined
      ></v-text-field>

      <v-btn
        class="block"
        color="#09CE20"
        v-on:click="addItem()">
        추가하기
      </v-btn>
    </div>
  </v-form>

  <ul class="fill-height">
    <li v-for="todo in todoList" v-bind:key="todo">
      <ListItem v-bind:item="todo"/>
    </li>
  </ul>
</div>

</template>

<style lang="scss" scoped>

ul { 
  list-style:none;
  margin-top: 50px;
}

.home {
  margin-right: 500px;
  margin-left: 500px;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.block {
  width: 100px;
}

</style>

<script>import { mapActions } from 'vuex'
import ListItem from '../components/ListItem.vue'

export default {
  name: "home",
  components: {ListItem},
  data() {
    return {
      todoTitle: ""
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todoList
    }
  },
  methods: {
    addItem() {
      if (this.todoTitle !== "") {
        this.addTodoItem(this.todoTitle)
      }
      this.todoTitle = String()
    },
    ...mapActions(['addTodoItem']),
  }
}
</script>
