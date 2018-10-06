import * as types from '../mutation-types';
import router from '../../router';

class Question {
	constructor(id, text, questions, submitAnswer) {
		this.id = id;
		this.text = text;
		this.questions = questions;
		this.submitAnswer = submitAnswer;
		this.answers = [];
	}
}

const state = {
	question_list: [
		new Question("7",
			"Czy dziecko chce aby Pan/Pani zobaczył/a coś, co je zainteresowało, np.",
			[
				"Samolot lecący na niebie?",
				"Ciężarówka na ulicy?",
				"Robaka na ziemi?",
				"Zwierzę na podwórku?"
			],
			() => {
				this.answers.find(value => {
					// if there's any true answer
					if (value) {
						router.push('questionare/8');
						return;
					}
				});

				router.push('questionare/7b');
			}),
		new Question('7b',
			"W jaki sposób dziecko zwraca Pani/Pana uwagę na ten obiekt? Czy wskazuje palcem?",
			[],
			() => {
				this.answers.find(value => {
					// if there's any true answer
					if (value) {
						router.push('questionare/7c');
						return;
					}
				});

				this.$store.dispatch('incrementScore');
				router.push('questionare/8');
			}),
		new Question('7c',
			"Czy robi to, aby okazać swoje zainteresowanie, a nie po to, aby uzyskać pomoc?",
			[],
			() => {
				this.answers.find(value => {
					if (value) {
						router.push('questionare/8');
						return;
					}
				});

				this.$store.dispatch('incrementScore');
				router.push('questionare/8');
			})
	],
	score: 0
};

const getters = {
	question: state => id => state.question_list.find(question => {
		question.id = id;
	}),
	score: state => state.score
};

const actions = {
	incrementScore({commit}) {
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
