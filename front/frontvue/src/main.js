import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import PostPreview from './components/PostPreview'

createApp(App)
    .component('PostPreview',PostPreview)
    .use(router)
    .mount('#app');
