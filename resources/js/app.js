import { createApp } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MainContent from './components/MainContent.vue';

const app = createApp({});

app.component('app-header', Header);
app.component('app-footer', Footer);
app.component('main-content', MainContent);

app.mount('#app');
