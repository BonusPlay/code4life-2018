<template>
	
</template>

<script>
	export default {
		name: "Question",
		created() {
			console.log(this.$store.getters.question("7"));
		}
	}
</script>

<style scoped>

</style>
