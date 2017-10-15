import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index from '../views/index'
import list from '../views/list'
export const constantRouterMap = [
	{
		path: '/',
		component: index,
		redirect: '/index'
	},
	{
		path: '/index',
		component: index
	},
	{
		path: '/list',
		component: list,
		props: (route) => ({searchParam: route.query})
	}
]

export default new VueRouter({
  	routes: constantRouterMap
});

