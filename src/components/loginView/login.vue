<template>
  <div id="login" class="login_class">
    <div class="btt">
      <router-link to="/signIn" tag="el-button">登陆</router-link>
    </div>
    <div class="btt">
      <router-link to="/signUp" tag="el-button">注册</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'login',
    data () {
      return {
      }
    },
    methods: {
      handleIconClick (ev) {
        console.log(ev)
        console.log(this.input1 + '' + this.input2)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_class {
    height: auto;
    width: 400px;
    margin-top: 10%;
    margin-left: auto;
    display: inline-block;
  }
  .login_class button {
    width: 100%;
  }
  .btt{
    width: 50%;
    float: left;
  }
</style>
