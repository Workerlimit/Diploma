import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import "@/assets/css/variables.scss";
import "@/assets/css/main.scss";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
