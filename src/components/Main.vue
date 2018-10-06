<template>
	<div>
		<Toolbar/>
		<v-content>
			<router-view/>
		</v-content>
	</div>
</template>

<script>
	import Toolbar from './Toolbar';

	export default {
		name: "Main",
		components: {Toolbar}
	}
</script>

<style scoped>

</style>
