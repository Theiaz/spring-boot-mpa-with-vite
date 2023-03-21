import 'vite/modulepreload-polyfill'
import "@/main/css/main.css";
import { createApp } from 'vue'
import App from './App1.vue'

createApp(App).mount('#app')
console.log("hallo123")