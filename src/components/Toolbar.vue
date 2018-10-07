<template>
	<v-toolbar color="#4d4d4b">
		<v-img :src="logo"
			   height="160"
			   width="160"
			   contain=true
			   position="30% 50%"/>
	</v-toolbar>
</template>

<script>
	import logo from '../assets/logo.png';

	export default {
		name: "Toolbar",
		data() {
			return {
				logo: logo
			}
		}
	}
</script>

<style scoped>
	#logo {
		z-index: 99 !important;
	}
</style>
