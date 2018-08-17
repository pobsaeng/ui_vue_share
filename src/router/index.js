import Vue from 'vue'
import Router from 'vue-router'

import profile from '../components/profile'
import home from '../components/home/index'
import dailyprocess from '../components/dailyprocess/index'
import login from '../components/login/index'
import pos from '../components/pos/index'
import mixin from '../components/mixin/index'
import products from '../components/products/index'
import bookstore from '../components/bookstore/index'
import { EventBus } from '../util/event-bus.js';

Vue.use(Router)

const guard = (to, from, next) => {
  // if (localStorage.jwtToken) {
  //   next();
  // } else {
  //   next({ path: '/profile' });
  // }
  // next();
  console.log('[beforeEnter] The guard started! ');
};

const router = new Router({
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: mixin
    },
    {
      path: '/pos',
      name: 'pos',
      component: pos,
    },
    {
      path: '/bookstore',
      name: 'bookstore',
      component: bookstore,
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('[beforeEach] started! ');
  next();

})

export default router;
