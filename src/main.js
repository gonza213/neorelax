import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from "@meforma/vue-toaster";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


createApp(App).use(store).use(router).use(Toaster, {position: 'top', duration: 5000}).use(Toast).mount('#app')
