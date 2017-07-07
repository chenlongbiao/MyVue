<template>
  <div id="signIn">
    <el-input v-model="input1" placeholder="请输入用户名">
    </el-input>
    <el-input v-bind:type="inType" icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick"
              placeholder="请输入密码">
    </el-input>
    <el-button type="primary">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
    data () {
      return {
        input2: '',
        input1: '',
        inType: 'password'
      }
    },
    methods: {
      handleIconClick (ev) {
//        console.log(this.$refs.passInput.type)
        if (this.inType !== '') {
          this.inType = ''
        } else {
          this.inType = 'password'
        }
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
</style>
