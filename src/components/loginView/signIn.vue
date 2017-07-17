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
    <span class="checkBoxClass">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
    </span>
    <span class="checkbtt">
      <el-button type="text">忘记密码</el-button>
    </span>
    <el-button class="loginbtt" type="primary" size="large" v-on:click="login">登录</el-button>
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
        inType: 'password',
        checked: false
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

  .loginbtt {
    margin-top: 60px;
    /*margin-bottom: px;*/
    width: 100%;
  }

  #signIn input {
    margin-bottom: 10px;
    /*width: 80%;*/
    background-color: hsla(0, 0%, 71%, .1);
  }

  .signIn_class {
    margin-top: 20px;
  }

  .checkBoxClass {
    margin-top: 15px;
    float: left;
  }

  .checkbtt {
    margin-top: 10px;
    float: right;
  }
</style>
