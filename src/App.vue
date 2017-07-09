<template>
  <div id="app">
    <div>
      <!--<a v-link="{ path: '/'}">Home</a>-->
      <!--<a class="list-group-item" v-link="{ pathlogin_viewogin'}">About</a>-->
    </div>
    <div class="logo">
      <a>
        <img src="./logo.png"/>
        <h6>拯救世界</h6>
      </a>
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
  /*color: #2c3e50;*/
  margin: 0px;
  height: 100%;
  background-color: #f1f1f1;
}
  .logo{
    float: left;
    margin-left: 50px;
    margin-top: 50px;
  }
</style>
