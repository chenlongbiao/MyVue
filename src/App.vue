<template>
  <div id="app">
    <div>
      <!--<a v-link="{ path: '/'}">Home</a>-->
      <!--<a class="list-group-item" v-link="{ pathlogin_viewogin'}">About</a>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
