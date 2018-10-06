<template>
	<div>
		Your score is {{calc_score}}/20.
	</div>
</template>

<script>
	export default {
		name: "QFinal",
		computed: {
			calc_score: function() {
				const answers = this.$store.getters.questions.map(question => question.calculateScore());
				return answers.filter(true).length;
			}
		}
	}
</script>

<style scoped>

</style>
