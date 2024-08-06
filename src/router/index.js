
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Dashboard from '@/components/dashboard/Dashboard.vue'
import JobPosting from '@/components/dashboard/JobPosting.vue'
import Profile from '@/components/dashboard/Profile.vue'
import Scroller from '@/components/dashboard/Scroller.vue'
import Login from '@/components/forms/Login.vue'
import SignUp from '@/components/forms/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
// import { components } from 'vuetify/dist/vuetify-labs.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // GUMAGANA YUNG TESTING
  routes: [
    { path: '/', component: Login, meta: { showAppBar: true } },
    { path: '/signup', component: SignUp, meta: { showAppBar: true } },
    // { path: '/dashboard', component: Dashboard, meta: { showAppBar: false },
    { path: '/dashboard', component:,
      //CHILD ROUTE
      children: [
        // { path: '/profile', component: Profile},
        { path: 'messages', component: Scroller},
        { path: 'job-post', component: JobPosting},
        { path: 'notifications', component: Scroller}

      ],
     meta: { showAppBar: false }
     }, // No app bar for dashboard
    
  ]


})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
