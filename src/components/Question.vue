<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-progress-linear color="success" height="20px" :value="progress"/>

				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Pytanie {{this.id}}</v-toolbar-title>
					</v-toolbar>


					<v-card-text>
						<v-form v-if="this.questions.length > 0">
							{{this.text}}
						</v-form>

						<v-form v-else>
							{{this.text}}
						</v-form>
					</v-card-text>


					<v-card-actions>
						<div v-if="this.questions.length > 0">
							<v-spacer/>
							<v-btn v-on:click="go_back">Powrót</v-btn>
							<v-btn v-on:click="this.submitAnswer" color="primary">Dalej</v-btn>
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
		created() {
			this.data = this.$store.getters.questions.find(question => {
				question.id === this.$route.params.id;
			});
		},
		methods: {
			go_back() {
				this.$router.go(-1);
			}
		},
		data() {
			return new Question("7",
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
							this.$router.push('8');
							this.$store.dispatch('incrementProgress');
							return;
						}
					});

					this.$router.push('7b');
					this.$store.dispatch('incrementProgress');
				});
		},
		computed: {
			progress: function() {
				return this.id[0] * 5; // /20 * 100
			}
		}
	}
</script>

<style scoped>

</style>
