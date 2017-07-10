<template>
  <div id="login" class="login_class">
    <div class="login_cen">
      <div class="sign_class">
        <router-link class="btt" to="/signIn">登录</router-link>
        <b>·</b>
        <router-link class="btt" to="/signUp">注册</router-link>
        <div v-bind:style='lineClass'>
          <hr style="background-color: coral;height: 1px;"/>
        </div>
      </div>
      <!--<transition>-->
      <router-view></router-view>
      <!--</transition>-->
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'login',
    data () {
      return {
        borChange: 'border-bottom: 2px solid #ea6f5a;',
        lineClass: 'width:45%;height:1px;border:0px'
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route' (to, from) {
        if (to.name === 'signUp') {
          this.lineClass = 'width:45%;float:right; height:1px;border:0px'
        } else {
          this.lineClass = 'width:45%;height:1px;border:0px'
        }
      }
    },
    methods: {
      handleIconClick (ev) {
        console.log(ev)
        console.log(this.input1 + '' + this.input2)
      },
      changeCla: function () {
        alert(111111)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_class {
    /*height: 80%;*/
    width: 400px;
    margin-top: 5%;
    /*margin-bottom: 20%;*/
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  }

  .login_class button {
    width: 100%;
  }

  .btt {
    width: 45%;
    float: left;
    font-size: large;
    text-decoration: none;
    font-style: normal;
    color: chocolate;
  }

  .login_cen {
    margin: 20%;
    width: 60%;
  }

  b {
    float: left;
    font-size: x-large;
  }

  .sign_class {
    /*margin-bottom: 20px;*/
    padding: 0px 0px 50px 0px;
  }
</style>
