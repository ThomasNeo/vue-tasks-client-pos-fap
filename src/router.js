import VueRouter from 'vue-router'

import { routes } from './routes'

const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('token')

  if (to.name === 'login' && isLogged) {
    next({ name: 'listTaskGroup' })
    return
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
