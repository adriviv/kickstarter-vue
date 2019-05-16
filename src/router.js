import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import addProject from './views/addProject.vue'
import updateProject from './views/updateProject.vue'
import tags from './views/Tags.vue'
import tag from './views/Tag.vue'
import Logout from './views/Logout.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/show/:Pid',
      name: 'show',
      component: Show
    },
    {
      path: '/add',
      name: 'addProject',
      component: addProject
    },
    {
       path: '/update/:Pid',
       name: 'updateProject',
       component: updateProject
     },
     {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/tags/:tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
