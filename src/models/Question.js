export default class Question {
	constructor(id, text, questions, submitAnswer) {
		this.id = id;
		this.text = text;
		this.questions = questions;
		this.submitAnswer = submitAnswer;
		this.answers = [];
	}
}
