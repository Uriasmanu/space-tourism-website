// src/router/index.js

import CrewPage from '@/views/CrewPage/CrewPage.vue';
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
  {
    path: '/crew',
    name: 'Crew',
    component: CrewPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
