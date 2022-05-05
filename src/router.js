const { createRouter, createWebHistory } = require("vue-router");
import HelloWorld from '@/components/HelloWorld';
import Protected from '@/components/Protected';
import Callback from '@/static/Callback'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/protected', component: Protected,  meta: { requiresAuth: false}},
        { path: '/callback', component: Callback}
    ]
})

export default router;