import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    ADD_TODO_ITEM(state, todoTitle) {
      const value = {
        title: todoTitle,
        date: `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일`,
        completed: false
      }
      state.todoList.push(JSON.stringify(value))
    },
    DELETE_TODO_ITEM(state, todoItem) {
      const newList = this.state.todoList

      this.state.todoList.filter(function (element, index) {
        if (todoItem === element) {
          newList.splice(index, 1)
        }
      })
      state.todoList = newList
    }
  },
  actions: {
    addTodoItem({commit}, todoTitle) {
      commit("ADD_TODO_ITEM", todoTitle)
    },
    deleteTodoItem({commit}, todoItem) {
      commit("DELETE_TODO_ITEM", todoItem)
    }
  }
})
