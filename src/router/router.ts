// 一级路由
import Login from '../views/login';
import Main from '../views/main';

export default {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/list/content',
            component: ()=>null
        }]
    },{
        path: '/login',
        component: Login
    }]
}