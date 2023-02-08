import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";

import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/dist/css/splide.min.css';

import './assets/css/styles.css';

import Home from "./components/pages/Home.vue";
import Search from "./components/pages/Search.vue";
import Loan from "./components/pages/Loan.vue";
import Book from "./components/pages/Book.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/loan/:id?', component: Loan },
  { path: '/book/:id?', component: Book },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp( App );
app.use( VueSplide );
app.use(router);
app.mount( '#app' );