import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Main from '../components/Main';
import Home from '../components/Home';
import Contact from '../components/Contact';

export default new Router({
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					path: 'home',
					component: Home
				},
				{
					path: 'contact',
					component: Contact
				}
			]
		},
	]
})
