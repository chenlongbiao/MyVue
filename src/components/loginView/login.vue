<template>
  <div id="login" class="login_class">
    <div class="login_cen">
      <div class="btt">
        <router-link to="/signIn" tag="el-button">登陆</router-link>
      </div>
      <div class="btt">
        <router-link to="/signUp" tag="el-button">注册</router-link>
      </div>
      <router-view></router-view>
    </div>
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
    width: 320px;
    margin-top: 5%;
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
  }
  .login_class button {
    width: 100%;
  }
  .btt{
    width: 50%;
    float: left;
  }
  .login_cen{
    margin-top: 20%;

  }
</style>
