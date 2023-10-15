import { createRouter, createWebHistory } from 'vue-router'
import ax from 'axios';


/**
 * @fileoverview Defines the routes for the Vue.js router.
 * @module router/index
 */

/**
 * Array of route objects.
 * @type {Array}
 */
const routes = [
  // Route for login page
  {
    path: '/entrada',
    name: 'Entrada',
    component: () => import('@/components/Entrada.vue'),
    meta: { requiresAuth: false }  // Authentication not required to view login page
  },
  // Route for Home
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true }, // Authentication required to view Home
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  // Route for Síntesis
  {
    path: '/sintesis',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true },  // Authentication required to view Síntesis
    children: [
      {
        path: '/sintesis',
        name: 'Sintesis',
        component: () => import('@/views/Sintesis.vue'),
      },
    ],
  },
  // Route for Indicadores
  {
    path: '/indicadores/:ID_Indicador',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true },  // Authentication required to view Indicadores
    children: [
      {
        path: '/indicadores/:ID_Indicador',
        name: 'Indicadores',
        component: () => import('@/views/Indicadores.vue'),
      },
    ],
  },
  // Route for Recomedaciones
  {
    path: '/recomendaciones/:ID_Indicador',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true },  // Authentication required to view Recomedaciones
    children: [
      {
        path: '/recomendaciones/:ID_Indicador',
        name: 'Recomendaciones',
        component: () => import('@/views/Recomendaciones.vue'),
      },
    ],
  },
  // Route for Expedientes
  {
    path: '/expedientes/:ID_Expediente',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true },  // Authentication required to view Expedientes
    children: [
      {
        path: '/expedientes/:ID_Expediente',
        name: 'Expedientes',
        component: () => import('@/views/Expedientes.vue'),
      },
    ],
  },
  // Route for resumen
  {
    path: '/resumen',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/resumen',
        name: 'resumen',
        component: () => import('@/views/Resumen.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Guardia de navegación
router.beforeEach((to, from, next) => {
  const loggedIn = ax.defaults.headers.common['Authorization'] ? true : false;
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/entrada');
  } else {
    next();
  }
});


export default router;
