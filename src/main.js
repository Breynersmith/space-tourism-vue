import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

//importacion de paginas
import Home from './pages/Home.vue'
import Destinations from './pages/Destinations.vue'
import Crew from './pages/Crew.vue'
import Technology from './pages/Technology.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/destinations', component: Destinations },
    { path: '/crew', component: Crew },
    { path: '/technology', component: Technology },
]

const router = createRouter({
    history: createWebHistory('/space-tourism-vue/'),
    routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')
