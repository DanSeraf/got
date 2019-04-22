import Vue from 'vue'
import Router from 'vue-router'

import store from './store/index.js'
import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Reports from './views/Reports.vue'
import Rules from "./views/Rules";
import Leaderboard from "./views/Leaderboard";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path:'/rules',
      name:'rules',
      component: Rules,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: HelloWorld,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/report',
      name: 'reports',
      component: Reports,
      meta: {
        requiresAuthProf: true,
      }
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAuthProf = to.matched.some(record => record.meta.requiresAuthProf);
  const stat = store.getters.posted
  const notlogged = store.getters.logged == 'false'
  var notposted = stat == 'false'
  var posted = stat == 'true'

  if (requiresAuthProf && notlogged) {
    next('leaderboard') 
  } else if (requiresAuth && notlogged) {
    next('report')
  } else if (requiresAuth && posted){
    next('report')
  } else if(requiresAuth && notposted){
    next()
  } else { next() }
});

export default router;
