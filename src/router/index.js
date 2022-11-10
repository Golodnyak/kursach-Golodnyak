import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UkrOboronProm2021',
    component: () => import('@/Views/ukroboronprom2021.vue')
  },
   
 
    {
      path: '/aviasvit',
      name: 'aviasvit',
      component: () => import('@/Views/aviasvit.vue')
    },
    {
      path: '/khreshchatyk',
      name: 'khreshchatyk',
      component: () => import('@/Views/khreshchatyk.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/Views/Contact.vue')
    },
    {
      path: '/supports',
      name: 'supports',
      component: () => import('@/Views/supports.vue')
    }
   
   
 
 
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
