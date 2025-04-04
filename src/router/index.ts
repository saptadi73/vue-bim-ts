import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bim',
      name: 'bim',
      component: () => import('../components/BimTest.vue'),
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/MainPageLayout.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/MainProjectView.vue'),
      children: [
        {
          name: 'view',
          path: 'view',
          component: () => import('../components/ProjectBim.vue')
        },
        {
          path: 'task/view/:id/:x/:y/:z',
          name: 'task-view',
          component: () => import('../components/TaskView.vue'),
        },
        {
          path: 'issue/view/:id/:x/:y/:z',
          name: 'issue-view',
          component: () => import('../components/IssueView.vue'),
        },
        {
          path: 'polygon',
          name: 'polygon',
          component: () => import('../components/GetMapLocationPolygon.vue'),
        },
        {
          path: 'bim/tools',
          name : 'bim-tools',
          component: () => import('../components/BimProjectTools.vue')
        },
        {
          path: 'task/create',
          name: 'task-create',
          component: () => import('../components/BimProjectCreateTask.vue'),
        },
        {
          path: 'issue/create',
          name: 'issue-create',
          component: () => import('../components/BimProjectCreateIssue.vue'),
        },
      ],
    },
  ],
})

export default router
