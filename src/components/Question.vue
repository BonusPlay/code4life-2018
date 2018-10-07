<template>
	<v-container fluid fill-height >
		<v-layout align-center justify-center>
			<v-flex xs12 sm10 md8>
				<v-progress-linear color="success" height="20px" :value="progress"/>

				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Pytanie {{this.question.id}}/20</v-toolbar-title>
					</v-toolbar>


					<v-card-text>
						<v-form>
							<p class="display-1">{{this.question.text}}</p>
							<v-radio-group v-if="question.questions.length > 0"
										   v-for="(q, index) in question.questions"
										   :key="q"
										   :label="q"
										   v-model="answers[index]"
										   @change="on_change"
										   row>
								<v-spacer/>
								<v-radio label="TAK" color="success" value="true"/>
								<v-radio label="NIE" color="error" value="false"/>
							</v-radio-group>
							<v-radio-group v-if="question.questions.length === 0"
										   v-model="answers[0]"
										   @change="on_change"
										   row style="transform: scale(1.5, 1.5); margin-top: 5%">
								<v-spacer/>
								<v-radio label="TAK" color="success" value="true"/>
								<v-radio label="NIE" color="error" value="false"/>
								<v-spacer/>
							</v-radio-group>
							<v-text-field v-model="comment" label="Dodatkowe komentarze na temat pytania"/>
						</v-form>
					</v-card-text>


					<v-card-actions>
						<v-btn v-on:click="go_back">
							<v-icon>arrow_back</v-icon>
							Powrót
						</v-btn>
						<v-spacer/>
						<v-btn
							:disabled="!show_next()"
							@click="go_next"
							color="primary">
							Dalej
							<v-icon>arrow_forward</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import Question from '../models/Question';
	import * as types from '../store/mutation-types';

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
			show_next() {
				if (this.question.id < this.last_question)
					return true;
				return !this.answers.includes(null);
			},
			go_back() {
				this.$router.go(-1);
			},
			go_next() {
				this.question.getNext();
			},
			on_change() {
				this.$store.commit(types.UPDATE_ANSWERS, {id: this.question.id, answers: this.answers});
			}
		},
		computed: {
			progress() {
				return this.question.id.replace(/\D/g, '') * 5; // /20 * 100
			},
			last_question() {
				return this.$store.getters.last_question;
			},
			answers: {
				get() {
					return [...this.question.answers];
				}
			},
			comment: {
				get() {
					return this.question.comment
				},
				set(value) {
					this.$store.commit(types.SET_COMMENT, {id: this.question.id, comment: value});
				}
			}
		},
		watch: {
			'$route.params.id'(newId) {
				if (newId > this.last_question)
					this.$store.commit(types.SET_LAST_QUESTION, newId);
				this.fetch_question(newId);
				window.scroll(0, 0);
			}
		}
	}
</script>

<style scoped>

</style>
