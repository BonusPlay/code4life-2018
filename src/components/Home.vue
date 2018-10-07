<template>
	<div>
		<v-img :src="splash">
			<v-layout class="hidden-sm-and-down" align-start justify-center column fill-height>
				<v-flex md-3 offset-md1>
					<v-btn to="/questionnaire/start" large=true color="success">
						Wykonaj Test
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
					<v-btn to="/questionnaire/start" large=true color="success">
						Wykonaj Test
						<v-icon>arrow_forward</v-icon>
					</v-btn>
				</v-flex>
			</v-layout>
			<v-layout>
				<GmapMap
					:center="{lat:52.237049, lng:21.017532}">
					:zoom="7"
					map-type-id="terrain"
					style="width: 500px; height: 300px">
				</GmapMap>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import splash from "../assets/splash.jpg";
	import logo from "../assets/logo.png";

	export default {
		name: "Home",
		data() {
			return {
				splash: splash,
				logo: logo
			}
		}
	}
</script>

<style scoped>

</style>
