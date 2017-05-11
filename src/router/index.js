import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Message from '@/components/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Message',
      component: Message
    }
  ]
})
