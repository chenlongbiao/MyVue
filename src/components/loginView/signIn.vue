<template>
  <div id="signIn" class="signIn_class">
    <el-input v-model="phoneNum" placeholder="请输入手机号">
    </el-input>
    <el-input type="password"
              v-model="passWord"
              placeholder="请输入密码">
    </el-input>
    <el-input v-model="checkmess" placeholder="请输入验证码" icon="message"
              :on-icon-click="handleIconClick">
    </el-input>
    <el-button type="primary" size="large" v-on:click="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
    data () {
      return {
        checkmess: '',
        passWord: '',
        phoneNum: '',
        inType: 'password'
      }
    },
    methods: {
      handleIconClick (ev) {

      },
      login () {
        this.$http({
          method: 'post',
          url: '/user',
          data: {
            name: 'wise',
            info: 'wrong'
          }
        }).then(response => {

        }, response => {

        })
        console.log(this.phoneNum)
        console.log(this.passWord)
        console.log(this.checkmess)
      }
    }
  }
</script>
<style>

  #signIn button {
    width: 100%;
  }

  #signIn input {
    background-color: hsla(0, 0%, 71%, .1);
  }

  .signIn_class {
    margin-top: 20px;
  }
</style>
