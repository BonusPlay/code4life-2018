<template>
	<v-card>
		<v-card-title primary-title>
			<v-container>
				<h2>{{institute.name}}</h2>
				<v-layout>
					<v-icon>location_on</v-icon>
					{{institute.address}}
				</v-layout>
				<v-layout>
					<v-icon>phone</v-icon>
					{{institute.phone}}
				</v-layout>
			</v-container>
		</v-card-title>

		<v-card-actions>
			<v-btn :href="institute.website" flat color="info">
				<v-icon>link</v-icon>
				strona internetowa
			</v-btn>
			<v-btn :href="'mailto:' + institute.email" flat color="info">
				<v-icon>email</v-icon>
				wyślij email
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: "GMapInfo",
		props: ['institute']
	}
</script>

<style scoped>

</style>
