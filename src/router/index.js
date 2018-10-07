import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Main from '../components/Main';
import Home from '../components/Home';
import Questionnaire from '../components/Questionnaire';
import Question from '../components/Question';
import QStart from '../components/QStart';

export default new Router({
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					path: '',
					component: Home
				},
			]
		},
		{
			path: '/questionnaire',
			component: Questionnaire,
			children: [
				{
					path: 'start',
					component: QStart
				},
				{
					path: ':id',
					component: Question
				}
			]
		}
	]
})
