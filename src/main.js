import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'

createApp(App).use(router).component('side-bar', sidebar).component('nav-bar', navbar).mount('#app')
