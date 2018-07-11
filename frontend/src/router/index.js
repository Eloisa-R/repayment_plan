/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RepayForm from '@/components/RepayForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
      path: '/get-plan',
      name: 'RepayForm',
      component: RepayForm

      }
  ]
})
