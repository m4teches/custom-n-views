import { createApp } from 'vue'
import App from './App.vue'

import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/dist/css/splide.min.css';

import './assets/css/styles.css';

const app = createApp( App );
app.use( VueSplide );
app.mount( '#app' );