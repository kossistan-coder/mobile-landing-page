
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import * as Heroicons from "@vue-hero-icons/outline"

const app = createApp(App)

app.use(router)
app.use(Heroicons)

app.mount('#app')
