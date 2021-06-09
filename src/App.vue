<template>
  <div id="app">
    <TodoHeader header="Todo List"/>
    <div id="nav">
      <router-link to="/">내 할 일</router-link> |
      <router-link to="/add">할 일 추가하기</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader"

export default {
  components: {
    TodoHeader
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
