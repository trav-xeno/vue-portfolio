import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Game from "../views/Games"; 


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Games',
    name: 'Games',
    component: Game
  },
  {
    path: '/AIplayground',
    name: 'AI playground',
    component: () => import(/* webpackChunkName: "about" */ '../views/AIplayground.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
