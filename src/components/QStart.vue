<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Informacje wstępne</v-toolbar-title>
					</v-toolbar>


					<v-card-text>
						<p>
							Proszę odpowiedzieć na poniższe pytania, dotyczące Pana/Pani dziecka.
							Weź pod uwagę jak Twoje ale zazwyczaj dziecko tego nie robi, odpowiedz „nie”.
							Zaznacz odpowiedź „tak” lub „nie” przy każdym pytaniu.
						</p>
						<p>
							Głównym celem M-CHAT-R jest <b>maksymalizacja czułości narzędzia</b>,
							tak aby wykryć jak najwięcej przypadków ASD.
							W związku z tym narzędzie ma wysoki współczynnik fałszywych wyników dodatnich.
							To oznacza, że nie u wszystkich dzieci, które znalazły się w grupie ryzyka,
							zostanie zdiagnozowane ASD.
						</p>
					</v-card-text>


					<v-card-actions>
						<v-spacer/>
						<v-btn @click="$router.go(-1)" color="error">Powrót</v-btn>
						<v-btn to="1" color="success">Wykonaj test</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		name: "QStart"
	}
</script>

<style scoped>

</style>
