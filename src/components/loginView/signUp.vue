<template>
  <div id="signUp" class="signUp_class">
    <el-input v-model="username" placeholder="请输入昵称">
    </el-input>
    <el-input v-model="mobile" placeholder="请输入手机号">
    </el-input>
    <el-input ref="passInput" v-bind:type="instyles" icon="more"
              v-model="password"
              :on-icon-click="handleIconClick"
              placeholder="请输入密码">
    </el-input>
    <span class="checkBoxClass">
      <el-checkbox v-model="checked" v-on:change=acceptagreement()>同意用户协议</el-checkbox>
      <!--<el-radio class="radio" v-model="radio" label=true></el-radio>-->
    </span>
    <span class="checkbtt">
      <el-button type="text">用户协议</el-button>
    </span>
    <el-button class="loginbtt" type="success" v-bind:disabled="disables" size="large" v-on:click=signUp()>注册
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
//    props: {inpType: 'password'},
    data () {
      return {
        username: '',
        mobile: '',
        password: '',
        instyles: 'password',
        checked: false,
        disables: true
      }
    },
    methods: {
      handleIconClick (ev) {
        console.log(this.$refs.passInput.type)
        if (this.instyles !== '') {
          this.instyles = ''
        } else {
          this.instyles = 'password'
        }
      },
      acceptagreement (ev) {
        if (this.checked) {
          console.log(this.checked)
          this.disables = false
        } else {
          console.log(this.checked)
          this.disables = true
        }
      },
      signUp () {
        let data = {
          username: this.username,
          mobile: this.mobile,
          password: this.password
        }
        this.$store.dispatch('signup', data).then(
          res => {
            console.log(this.$store.state.logins.signUpstate)
            console.log(123123123123123123123213)
          }
        )
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

  #signUp input {
    margin-bottom: 10px;
    /*width: 80%;*/
    background-color: hsla(0, 0%, 71%, .1);
  }

  .signUp_class {
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
