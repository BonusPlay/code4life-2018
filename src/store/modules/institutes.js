import * as types from '../mutation-types';
import {IList} from '../../models/Institute';

const state = {
	institute_list: IList
};

const getters = {
	institutes: state => state.institute_list
};

const actions = {};

const mutations = {

};

export default {
	state,
	getters,
	actions,
	mutations
}
