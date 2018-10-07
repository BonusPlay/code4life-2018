<template>
	<v-container fluid grid-list-md>
		<v-card v-for="question in questions">
			<v-card-title>
				{{question.text}}
			</v-card-title>
		</v-card>

	</v-container>
</template>

<script>
	export default {
		name: "Printable",
		computed: {
			questions() {
				return this.$store.questions.filter(q => q.calculateScore === 1);
			}
		}
	}
</script>

<style scoped>

</style>
