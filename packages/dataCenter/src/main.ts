import './publicPath'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.mount('#app');


declare global {
    interface Window {
        microApp: any
        __MICRO_APP_NAME__: string
        __MICRO_APP_ENVIRONMENT__: string
    }
}

// 监听卸载操作
window.addEventListener('unmount', function () {
    app.unmount();
});