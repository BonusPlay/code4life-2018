// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'
import store from './store';
Vue.config.productionTip = false;

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(Vuetify);

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBgbUGOsNtDSRp0N9aGE8m1XsCE2MRviko',
		libraries: 'places'
	},
});

import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: {App},
	template: '<App/>'
});
