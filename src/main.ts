import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import ApexCharts from 'apexcharts';

const appElement = document.getElementById('app') as HTMLElement & {
    __vue_app__?: { unmount: () => void };
  };

if (appElement.__vue_app__) {
  appElement.__vue_app__.unmount();
}

const app = createApp(App)
app.component('apexcharts', ApexCharts)
app.use(router)


app.mount('#app')
