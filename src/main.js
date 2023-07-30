import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TodoInput from './components/TodoInput.vue';

createApp(App).use(store).use(router).component('TodoInput', TodoInput).mount('#app')
