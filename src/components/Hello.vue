<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  import Login from './login'
export default {
    components: {Login},
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
