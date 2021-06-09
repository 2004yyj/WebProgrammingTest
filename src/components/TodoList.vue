<template>
  <div>
    <input
        type="text"
        placeholder="할일 목록을 추가하세요."
        v-model="todoTitle"
        v-on:keyup.enter="addItem"/>
    <button v-on:click="addItem">추가</button>
    <ul class="list">
      <li class="list__item" v-for="todo in todoList" v-bind:key="todo">
        <div v-bind:for="todo" class="list__label">
          <ListItem v-bind:item="todo"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import { mapActions } from 'vuex'

export default {
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