import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosServiciosView from '../views/ProductosServiciosView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import InsigniasView from '../views/InsigniasView.vue'
import InsigniaDetalleView from '../views/InsigniaDetalleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productos-y-servicios',
      name: 'productos-servicios',
      component: ProductosServiciosView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: NosotrosView
    },
    {
      path: '/insignias',
      name: 'insignias',
      component: InsigniasView
    },
    {
      path: '/insignias/:slug',
      name: 'insignia-detalle',
      component: InsigniaDetalleView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for fixed navbar
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      // Siempre ir al top cuando cambias de ruta
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' })
        }, 100)
      })
    }
  }
})

export default router

