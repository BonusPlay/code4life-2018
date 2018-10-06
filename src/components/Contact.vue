<template>
	<div>
		<GmapMap
			:center="{lat:52.237049, lng:21.017532}">
			:zoom="7"
			map-type-id="terrain"
			style="width: 500px; height: 300px">
		</GmapMap>
	</div>
</template>

<script>
	export default {
		name: "Contact",
	}
</script>

<style scoped>

</style>
