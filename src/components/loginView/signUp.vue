<template>
  <div id="signUp" class="signIn_class">
    <el-input v-model="input1" placeholder="请输入姓名">
    </el-input>
    <el-input v-model="input1" placeholder="请输入手机号">
    </el-input>
    <el-input ref="passInput" v-bind:type="red"  icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick"
              placeholder="请输入密码">
    </el-input>
    <el-button type="success" size="large">注册</el-button>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
//    props: {inpType: 'password'},
    data () {
      return {
        input2: '',
        input1: '',
        red: 'password'
      }
    },
    methods: {
      handleIconClick (ev) {
        console.log(this.$refs.passInput.type)
        if (this.red !== '') {
          this.red = ''
        } else {
          this.red = 'password'
        }
      }
    }
  }
</script>
<style>

  #signUp button {
    width: 100%;
  }

  #signUp input {
    background-color: hsla(0, 0%, 71%, .1);
  }
</style>
