// src/router/index.js

import DestinationPage from '@/views/DestinationPage/DestinationPage.vue';
import HomeTurismo from '@/views/HomeTurismo/HomeTurismo.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeTurismo
  },

  {
    path: '/destination',
    name: 'Destination',
    component: DestinationPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
