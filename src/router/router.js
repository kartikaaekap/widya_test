import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import userManagement from '../pages/administration/userManagement'
import roleManagement from '../pages/administration/roleManagement'
import menuManagement from '../pages/administration/menuManagement'
import sessionManagement from '../pages/administration/sessionManagement'
import variableParameters from '../pages/administration/variableParameters'

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'userManagement',
        path: '/userManagement',
        component: userManagement
    },
    {
        name: 'roleManagement',
        path: '/roleManagement',
        component: roleManagement
    },
    {
        name: 'menuManagement',
        path: '/menuManagement',
        component: menuManagement
    },
    {
        name: 'sessionManagement',
        path: '/sessionManagement',
        component: sessionManagement
    },
    {
        name: 'variableParameters',
        path: '/variableParameters',
        component: variableParameters
    }
];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    routes
})

export default router;