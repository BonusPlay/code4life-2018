<template>
	<div>
		<v-img :src="splash">
			<div style="height: 65px; background-color: #4d4d4b;"></div>
			<v-img :src="logo"
				   height="120"
				   width="120"
				   style="margin-left: 20%; top: -15%;"/>

			<v-layout class="hidden-sm-and-down" align-start justify-center column>

				<v-flex md-3 offset-md1
						style="background-color: rgba(255, 255, 255, 0.7); padding: 5px; border-radius: 3% 6%;">

					<p style="font-size: 2em; margin-bottom: 0;">Test wczesnego</p>
					<p style="font-size: 2em; margin-bottom: 0;"> wykrycia autyzmu</p>
					<v-btn to="/questionnaire/start" :large=true color="success" style="float: left;">
						Wykonaj Darmowy Test
						<v-icon>arrow_forward</v-icon>
					</v-btn>
				</v-flex>

			</v-layout>
		</v-img>


		<v-flex sm12 lg8 offset-lg2>
			<v-container>
				<v-layout>
					<v-flex s12 md6>
						<v-img :src="kids" style="max-width: 500px;"/>
					</v-flex>
					<v-flex s12 md6 class="text-md-center">
						<p class="display-3">O TEŚCIE</p>
						<p>Każde dziecko rozwija się inaczej, ma inne potrzeby i inaczej odbiera świat. Jednak pewne
							sygnały, które rodzice obserwują u swoich dzieci mogą sugerować poważne problemy.</p>
						<p>Sprawdź czy Twoje dziecko może mieć spektrum autyzmu. Rozwiąż krótki test, który zweryfikuje
							Twoje przypuszczenia i podpowie czy zachowania Twojego malucha są odpowiednie dla jego wieku
							i etapu rozwoju. Pamiętaj, że badanie nie jest pełną diagnozą, a jedynie wskazówką czy
							powinieneś skonsultować się ze specjalistą.</p>
						<p>Bez względu na wynik, pamiętaj, że musisz potwierdzić informację u specjalistów.</p>

						<br>
						<v-btn to="/questionnaire/start" :large=true color="success">
							Wykonaj Darmowy Test
							<v-icon>arrow_forward</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
				<v-layout style="padding-top: 4em;">
					<v-flex md6>
						<p class="display-3">FUNDACJA JiM</p>
						<p style="padding: 0 8%;">Fundacja JiM tworzy lepszy świat dla osób z autyzmem.
							Opiekuje się ponad 3000 dzieci z całej Polski, zapewniając i finansując niezbędną terapię.
							Co roku, lekarze z Kliniki JiM dieagnozują bezpłatnie kilkaset maluchów. Ponadto Fundacja
							wspiera ponad 4000 rodziców dzieci z autyzmem z całego kraju, należących do Klubu Rodziców
							JiM, zapewniając im wiedzę, szkolenia i pomoc prawną.</p>

						<p style="padding: 0 8%;">Fundacja JiM prowadzi przedszkole i szkoły dla dzieci z autyzmem oraz wspiera osoby dorosłe.
							Tworzy kampanie społeczne niosące wiedzę o autyznie, takie jak Polska na Niebiesko.</p>
					</v-flex>
					<v-flex md6>
						<v-img :src="kid1" />
					</v-flex>
				</v-layout>
				<v-layout wrap style="padding-top: 4em;">
					<v-flex lg-5>
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
	import splash from "../assets/splash.jpg";
	import logo from "../assets/logo.png";
	import kid1 from "../assets/kid1.jpg";
	import kids from "../assets/kid2.jpg";
	import GMapInfo from './GMapInfo';

	export default {
		name: "Home",
		data() {

			return {
				splash: splash,
				logo: logo,
				kids: kids,
				kid1: kid1,
				mapZoom: 5,
				institutes: null,
				selected: 6
			}
		},
		methods: {
			click_institute(index) {
				this.selected = index;
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
