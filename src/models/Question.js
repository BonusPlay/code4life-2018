export default class Question {
	constructor(id, text, questions, getNext, calculateScore) {
		this.id = id;
		this.text = text;
		this.questions = questions;
		this.getNext = getNext;
		this.calculateScore = calculateScore;
		this.answers = (questions.length === 0) ? [null] : questions.map(() => null);
		this.comment = "";
	}
}
