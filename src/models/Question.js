export default class Question {
	constructor(id, text, questions, getNext, calculateScore) {
		this.id = id;
		this.text = text;
		this.questions = questions;
		this.getNext = getNext;
		this.calculateScore = calculateScore;
		this.answers = questions.map(() => false);
		this.comment = "";
	}
}
