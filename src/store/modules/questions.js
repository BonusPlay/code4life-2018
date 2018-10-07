import * as types from '../mutation-types';
import {QList} from '../../models/Question';

const state = {
	last_question: 0,
	question_list: QList
};

const getters = {
	question: state => id => state.question_list.filter(q => q.id === id)[0],
	questions: state => state.question_list,
	last_question: state => state.last_question
};

const actions = {};

const mutations = {
	[types.UPDATE_ANSWERS](state, {id, answers}) {
		state.question_list.filter(q => q.id === id)[0].answers = answers;
	},
	[types.SET_LAST_QUESTION](state, value) {
		state.last_question = value;
	},
	[types.SET_COMMENT](state, {id, comment}) {
		state.question_list.filter(q => q.id === id)[0].comment = comment;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
