// src/router/index.js

import CrewView from '@/views/CrewView/CrewView.vue';
import DestinationView from '@/views/DestinationView/DestinationView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import TecnologiaView from '@/views/TecnologiaView/TecnologiaView.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/destination',
    name: 'Destination',
    component: DestinationView
  },

  {
    path: '/crew',
    name: 'Crew',
    component: CrewView
  },

  {
    path: '/tecnologia',
    name: 'Tecnologia',
    component: TecnologiaView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
