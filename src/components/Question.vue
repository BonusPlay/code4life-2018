<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-progress-linear color="success" height="20px" :value="progress"/>

				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Pytanie {{this.question.id}}</v-toolbar-title>
					</v-toolbar>


					<v-card-text>
						<v-form v-if="this.question.questions.length > 0">
							{{this.question.text}}

							<v-switch v-for="(q, index) in question.questions" :key="q" v-model="question.answers[index]"/>

							<v-text-field v-model="question.comment" label="Uwagi"/>
						</v-form>

						<v-form v-else>
							{{this.question.text}}
							<v-text-field v-model="question.comment" label="Uwagi"/>
						</v-form>
					</v-card-text>


					<v-card-actions>
						<div v-if="this.question.questions.length > 0">
							<v-spacer/>
							<v-btn v-on:click="go_back">Powrót</v-btn>
							<v-btn v-on:click="go_next" color="primary">Dalej</v-btn>
						</div>

						<div v-else>
							<v-btn color="success">Tak</v-btn>
							<v-btn color="error">Nie</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import Question from '../models/Question';

	export default {
		name: "Question",
		data() {
			return {
				question: null
			}
		},
		created() {
			this.fetch_question(this.$route.params.id);
		},
		methods: {
			fetch_question(id) {
				this.question = this.$store.getters.question(id);
			},
			go_back() {
				this.$router.go(-1);
			},
			go_next() {
				this.question.getNext();
			}
		},
		computed: {
			progress: function () {
				return this.question.id[0] * 5; // /20 * 100
			}
		},
		watch: {
			'$route.params.id'(newId) {
				this.fetch_question(newId);
			}
		}
	}
</script>

<style scoped>

</style>
