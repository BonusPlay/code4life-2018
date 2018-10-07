<template>
	<div>
		Your score is {{calc_score}}/20.

		<p v-for="q in questions.filter(x => x.calculateScore())">
			{{JSON.stringify(q)}}
		</p>
	</div>
</template>

<script>
	export default {
		name: "QResult",
		computed: {
			questions() {
				console.log(this);
				return this.$store.getters.questions;
			},
			calc_score() {
				this.$store.dispatch('sanitize');
				this.questions.forEach(q => {
					console.log(q.id);
					console.log(q.answers);
					console.log(q.calculateScore());
				});
				const answers = this.questions.map(question => question.calculateScore());
				console.log(answers);
				return answers.filter(a => a === true).length;
			}
		}
	}
</script>

<style scoped>

</style>
