import './bootstrap'; // Импортируйте bootstrap, если он вам нужен
import { createApp } from 'vue';
import MainPage from './components/MainPage.vue'; // Импортируйте ваш компонент

const app = createApp({});
app.component('main-page', MainPage); // Зарегистрируйте компонент
app.mount('#app');
