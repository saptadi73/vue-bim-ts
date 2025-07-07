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
      component: () => import('../components/BimTestNew.vue'),
    },
    {
      path: '/face',
      name: 'face',
      component: () => import("../components/FaceMeasurement.vue")
    },
    {
      path: '/edge',
      name: 'edge',
      component: () => import("../components/EdgeMeasurement.vue")
    },
    {
      path: '/capture',
      name: 'capture',
      component: () => import("../components/CaptureDrawBim.vue"),
    },
    {
      path: '/volume',
      name: 'volume',
      component: () => import("../components/VolumeMeasurement.vue")
    },
    {
      path: '/angle',
      name: 'angle',
      component: () => import('../components/AngleMeasurement.vue'),
    },
    {
      path: '/marking',
      name: 'marking',
      component: () => import('../components/MarkingImage.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/MainPageLayout.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/LibraryView.vue'),
      children: [
        {
          path: 'view/:uuid',
          name: 'library-view',
          component: () => import('../components/LibraryUpdate.vue'),
        },
      ],
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('../views/MainPageView.vue'),
      children: [
        {
          path: 'project/new',
          name: 'new-project',
          component: () => import('../components/ProjectNewCreate.vue'),
        },
      ]
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/MainProjectView.vue'),
      children: [
        {
          name: 'view',
          path: 'view/:uuid',
          component: () => import('../components/ProjectBim.vue')
        },
        {
          path: 'task/view/:id/:x/:y/:z/:uuid',
          name: 'task-view',
          component: () => import('../components/TaskView.vue'),
        },
        {
          path: 'issue/view/:id/:x/:y/:z/:uuid',
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
          path: 'task/create/:uuid',
          name: 'task-create',
          component: () => import('../components/BimProjectCreateTask.vue'),
        },
        {
          path: 'issue/create/:uuid',
          name: 'issue-create',
          component: () => import('../components/BimProjectCreateIssue.vue'),
        },
        {
          path: 'task/list/:id/:x/:y/:z/:uuid',
          name: 'task-list',
          component: () => import('../components/TaskListAll.vue'),
        },
        {
          path: 'issue/list/:id/:x/:y/:z/:uuid',
          name: 'issue-list',
          component: () => import('../components/IssueListAll.vue'),
        },
        {
          path: 'dashboard/:uuid',
          name: 'dashboard-project',
          component: () => import('../components/DashboardProject.vue'),
        },
        {
          path: 'document/:uuid',
          name: 'document',
          component: () => import('../components/DocumentTracking.vue'),
        },
      ],
    },
    {
      path: '/rab',
      name: 'rab',
      component: () => import('../views/MainRabView.vue'),
      children:[
        {
          path: 'create/:uuid',
          name: 'product',
          component: () => import('../components/CreateNewRab.vue'),
        },
        {
          path: 'product/:uuid',
          name: 'rab_product',
          component: () => import('../components/RabCreateProduct.vue'),
        }
      ],
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/MainSettingView.vue'),
      children:[
        {
          path: 'user/:uuid',
          name: 'user/:uuid',
          component: () => import('../components/SettingUser.vue'),
        }
      ],
    },
  ],
})

export default router
