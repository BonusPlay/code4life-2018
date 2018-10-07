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
		libraries: 'places', // This is required if you use the Autocomplete plugin
		// OR: libraries: 'places,drawing'
		// OR: libraries: 'places,drawing,visualization'
		// (as you require)
	},

	//// If you intend to programmatically custom event listener code
	//// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
	//// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
	//// you might need to turn this on.
	// autobindAllEvents: false,
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: {App},
	template: '<App/>'
});
