import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/loginView/login'
import signIn from '@/components/loginView/signIn'
import signUp from '@/components/loginView/signUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'login',
      component: login,
      redirect: '/signIn',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/signIn',
          name: 'signIn',
          component: signIn
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/signUp',
          name: 'signUp',
          component: signUp
        }
      ]
    }
  ]
})
