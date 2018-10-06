<template>
	<v-toolbar>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat to="/home">Strong glowna</v-btn>
			<v-btn flat to="/contact">Kontakt</v-btn>
		</v-toolbar-items>
		<v-spacer/>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn color="success" to="/questionnaire/start">Przejdz do testu</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
	export default {
		name: "Toolbar"
	}
</script>

<style scoped>

</style>
