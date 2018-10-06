<template>
	<v-toolbar>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat to="/home">Home</v-btn>
			<v-btn flat to="/contact">Kontakt</v-btn>
			<v-btn flat>Link Three</v-btn>
		</v-toolbar-items>
		<v-spacer/>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn color="success">Przejdz do testu</v-btn>
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
