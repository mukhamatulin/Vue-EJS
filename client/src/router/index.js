import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/components/Index.vue';
import Auth from '@/components/Auth.vue';
import Dashboard from '@/components/Dashboard.vue';
import Lesson1 from '@/components/Lesson1.vue';
import RunCode from '@/components/RunCode.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/auth/',
        name: 'Auth',
        component: Auth
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/lesson1',
        name: 'Lesson1',
        component: Lesson1
    },
    {
        path: '/run',
        name: 'RunCode',
        component: RunCode
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;