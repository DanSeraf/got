import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from './store/index.js'

import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Reports from './views/Reports.vue'
import User from './views/User.vue'
import UserComp from './components/User/UserComp.vue'
import UserProfile from './components/User/UserProfile.vue'
import UserReports from './components/User/UserReports.vue'
import Movies from "./views/Movies.vue";
import Rules from "./views/Rules";


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path:'/rules',
      name:'rules',
      component: Rules
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
        postedCondition: store.getters.posted
      }
    },
    {
      path: '/user/:id',
      component: User,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          component: UserComp
        },
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'reports',
          component: UserReports
        }
      ]
    },
    {
      path: '/report',
      name: 'reports',
      component: Reports,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: Movies,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const postedCondition = to.matched.some(record => record.meta.postedCondition);

  if (requiresAuth && !currentUser){
    next('login')
  }else{
    if (postedCondition) {
        next('rules')
      } else {
        next()
      }
    }
});


export default router;
