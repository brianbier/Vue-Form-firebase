import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/Message'
import Hello from '@/components/Hello'
import Projects from '@/components/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Message',
      component: Message
    },
    {
      path: '/hello',
      name: 'Helo',
      component: Hello
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '*',
      name: 'Message',
      component: Message
    }
  ],
  mode: 'history'
})
