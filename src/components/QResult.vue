<template>
	<div>
		<div style="height: 75px; background-color: #4d4d4b;"></div>
		<v-img :src="logo"
			   height="120"
			   width="120"
			   style="margin-left: 20%; top: -10%;"/>

		<v-flex xs12 sm10 offset-sm1 md8 offset-md2>
			<v-container>
				<v-layout>
					<v-flex sm12 lg8 offset-lg2>
						<h1>
							{{get_text()}}
						</h1>
					</v-flex>
				</v-layout>

				<v-layout v-if="calc_score > 2" wrap>
					<v-flex sm12 lg6>
						<gmap-map
							:center="{lat:52.11444444,lng:19.42361111}"
							:zoom="mapZoom"
							map-type-id="terrain"
							style="width: 500px; height: 300px">

							<gmap-marker
								v-for="(inst, index) in institutes"
								:key="index + 'marker'"
								:position="inst.coords"
								:clickable="true"
								@click="click_institute(index)"/>
						</gmap-map>
					</v-flex>
					<v-flex sm12 lg6>
						<GMapInfo :institute="institutes[selected]" style="height: 300px"/>
					</v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</div>
</template>

<script>
	import GMapInfo from './GMapInfo';
	import logo from '../assets/logo.png';

	export default {
		name: "QResult",
		computed: {
			questions() {
				//console.log(this);
				return this.$store.getters.questions;
			},
			calc_score() {
				this.$store.dispatch('sanitize');
				//this.questions.forEach(q => {
				//	console.log(q.id);
				//	console.log(q.answers);
				//	console.log(q.calculateScore());
				//});
				const answers = this.questions.map(question => question.calculateScore());
				//console.log(answers);
				return answers.filter(a => a === true).length;
			}
		},
		data() {
			return {
				mapZoom: 5,
				institutes: null,
				selected: 6,
				logo: logo
			}
		},
		methods: {
			click_institute(index) {
				this.selected = index;
			},
			get_text() {
				if (this.calc_score <= 2)
					return "Wybrane przez Ciebie odpowiedzi nie wskazują na to, że Twoje dziecko może mieć zaburzenia ze spektrum autyzmu. Obserwuj dalej zachowania dziecka i jeżeli zaobserwujesz niepokojące objawy lub będziesz mieć wątpliwości czy rozwija się prawidłowo skonsultuj się ze specjalistą.";
				if (this.calc_score < 8)
					return "Wybrane przez Ciebie odpowiedzi nie są jednoznaczne. Jeżeli czujesz że Twoje dziecko nie rozwija się prawidłowo udaj się do specjalisty – neurologa, psychologa bądź psychiatry i opowiedz mu o niepokojących objawach. Pamiętaj, że niektóre zachowania dziecka mogą wskazywać na inne zaburzenia niż spektrum autyzmu.";
				else
					return "Wybrane przez Ciebie odpowiedzi mogą sugerować, że Twoje dziecko ma spektrum autyzmu. Pamiętaj jednak, że rozwiązany test nie jest diagnozą. Udaj się do lekarza pierwszego kontaktu i poproś o skierowanie do Poradni dla osób z autyzmem dziecięcym. Na naszej stronie możesz znaleźć listę placówek, w których można zdiagnozować autyzm. Pamiętaj, że im wcześniej rozpoczniesz terapię, tym Twoje dziecko ma większe szanse na rozwój i samodzielność.";
			}
		},
		created() {
			this.institutes = this.$store.getters.institutes
		},
		components: {
			GMapInfo
		}
	}
</script>

<style scoped>

</style>
