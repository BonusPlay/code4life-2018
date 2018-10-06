import * as types from '../mutation-types';

const state = {
	question_list: [],
	score: 0
};

const getters = {
	questions: state => state.question_list,
	score: state => state.score
};

const actions = {
	incrementScore ({ commit }) {
		commit(types.INCREMENT_SCORE);
	}
};

const mutations = {
	[types.INCREMENT_SCORE](state) {
		state.score++;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
