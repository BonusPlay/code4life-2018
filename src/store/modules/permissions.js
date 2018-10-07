import * as types from '../mutation-types';

const state = {
	allow_cookies: false
};

const getters = {
	allow_cookies: state => state.allow_cookies
};

const actions = {};

const mutations = {
	[types.ALLOW_COOKIES] (state) {
		state.allow_cookies = true;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
