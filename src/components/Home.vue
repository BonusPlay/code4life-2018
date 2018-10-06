<template>
	<div>
		<v-img :src="splash"/>
		<v-layout>
			<v-flex s12 md6>
				<v-img :src="logo"/>
			</v-flex>
			<v-flex s12 md6 class="text-md-center">
				<p class="display-3">Test wczesnego wykrycia autyzmu</p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</v-flex>
		</v-layout>
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
