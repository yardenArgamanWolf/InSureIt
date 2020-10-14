import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Structure from '../views/Structure'
import Capacity from '../views/Capacity'
import Joining from '../views/Joining';
import StructureAndCapacity from '../views/StructureAndCapacity'
import CancelPage from '../views/CancelPage';
import Pay from '../views/Pay';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },
  {
    path: '/structure',
    name: 'Structure',
    component: Structure,
  },
  {
    path: '/capacity',
    name: 'Capacity',
    component: Capacity,
  },
  {
    path: '/structure_and_capacity',
    name: 'StructureAndCapacity',
    component: StructureAndCapacity,
  },
  {
    path: '/joining/:id',
    name: 'joining',
    component: Joining,
  },

  {
    path: '/Cancel',
    name: 'CancelPage',
    component: CancelPage,
  },
  {
    path: '/Pay/:id',
    name: 'Pay',
    component: Pay,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
