import Login from './components/login/Login'
import ListTaskGroup from './components/taskgroup/list-taskgroup/ListTaskGroup'
import ShowTaskGroup from './components/taskgroup/show-taskgroup/ShowTaskGroup'

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
    name: 'showTaskGroup',
    path: '/taskgroup/show/:id',
    component: ShowTaskGroup,
    props: true,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '*',
    component: Login
  }
]
