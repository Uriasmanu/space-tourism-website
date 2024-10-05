// src/router/index.js
import HomeTurismo from '@/views/HomeTurismo/HomeTurismo.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeTurismo
  },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
