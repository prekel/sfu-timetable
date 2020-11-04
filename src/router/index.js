import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '../views/MainContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent,
    props: (route) => ({ query: route.query.q })
  },
]

const router = new VueRouter({
  routes
})

export default router
