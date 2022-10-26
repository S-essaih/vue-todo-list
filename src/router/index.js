import { createRouter, createWebHashHistory } from 'vue-router'
import Todos from '../components/Todos'
import About from '../views/About'

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/about',
    name: 'About',
    component : About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
