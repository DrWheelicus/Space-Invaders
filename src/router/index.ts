/* eslint-disable */
// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
/* eslint-enable */

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scores',
    name: 'Scores',
    component: () => import('../views/Scores.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
