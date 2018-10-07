<template>
	<div>
		<v-img :src="splash">
			<v-layout class="hidden-sm-and-down" align-start justify-center column fill-height>
				<v-flex md-3 offset-md1>
					<v-btn to="/questionnaire/start" :large=true color="success" style="margin-top:150px;">
						Wykonaj Darmowy Test
						<v-icon>arrow_forward</v-icon>
					</v-btn>
				</v-flex>
			</v-layout>
		</v-img>
		<v-container>
			<v-layout>
				<v-flex s12 md6>
					<v-img :src="logo"/>
				</v-flex>
				<v-flex s12 md6 class="text-md-center">
					<p class="display-3">Test wczesnego wykrycia autyzmu</p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					<br>
					<v-btn to="/questionnaire/start" :large=true color="success">
						Wykonaj Darmowy Test
						<v-icon>arrow_forward</v-icon>
					</v-btn>
				</v-flex>
			</v-layout>
			<v-layout>
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
				<v-flex lg-5>
					<p class="display-2">Znajdź najbliższą placówkę</p>
					<GMapInfo :institute="institutes[selected]"/>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import splash from "../assets/splash.jpg";
	import logo from "../assets/logo.png";
	import GMapInfo from './GMapInfo';

	export default {
		name: "Home",
		data() {
			return {
				splash: splash,
				logo: logo,
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
