import { createApp } from 'vue'
import App from './App.vue'
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'
import router from './router'

createApp(App).use(router).component('side-bar', sidebar).component('nav-bar', navbar).mount('#app')
