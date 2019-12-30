import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Index from "./components/Index"
import About from "./components/About"
import ErrorPage from "./components/ErrorPage";
import Product from "./components/Product";
import Products from "./components/Products";


Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: Index,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
            children: [
                {
                    path: 'product/:name',
                    name: 'product',
                    component: Product
                }
            ]
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage
        }]
})

new Vue({
    router,
    data: function(){
        return{
            amount:1000
        }
    },
    methods:{
        double:function(number){
            return number*2
        }
    },
    render: h => h(App),


}).$mount('#app')
