<template>
  <div id="app">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>TodoList</v-toolbar-title>
      </v-toolbar>
      <div id="nav">
        <router-link to="/">내 할 일</router-link> |
        <router-link to="/myPage">소개</router-link>
      </div>
      <router-view/>
    </v-card>
  </div>
</template>

<script>

export default {}
</script>


<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  font-family: Roboto, sans-serif; //Avenir, Helvetica, Arial, sans-serif;
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
