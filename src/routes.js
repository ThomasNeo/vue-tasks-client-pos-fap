import Login from './components/login/Login'
import ListTaskGroup from './components/taskgroup/list-taskgroup/ListTaskGroup'

export const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'listTaskGroup',
    path: '/taskgroup/list',
    component: ListTaskGroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    component: Login
  }
]
