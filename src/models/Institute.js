class Institute {
	constructor(name, address, website, email, phone, coords) {
		this.name = name;
		this.address = address;
		this.website = website;
		this.email = email;
		this.phone = phone;
		this.coords = coords;
	}
}

const IList = [
	new Institute(
		"Stowarzyszenie Rodziców i Przyjaciół Działających na Rzecz Dzieci z Dysfunkcjami \"Dzieci Kociewia\"",
		"ul. Market 19, 83-200 Starogard Gdański, Polska",
		"dziecikociewia.pl",
		"dziecikociewia@wp.pl",
		"+48 58 562 02 65",
		{lat: 53.965614, lng: 18.5162736}
	),
	new Institute(
		"NZOZ Centrum Terapii Autyzmu Alpha",
		"Cicha 10, 20-078 Lublin, Polska",
		"autyzmlublin.pl",
		"biuro@autyzmlublin.pl",
		"+48 81 532 58 06",
		{lat: 51.2498346, lng: 22.556766}
	),
	new Institute(
		"Koszalińskie Stowarzyszenie Pomocy Osom Autystycznym",
		"Morska 2, 75-950 Koszalin, Polska",
		"autyzmkoszalin.pl",
		"biuro@autyzmkoszalin.pl",
		"+48 72 873 11 80",
		{lat: 54.1948209, lng: 16.1696559}
	),
	new Institute(
		"Być Jak Inni. Fundacja Pomocy Dzieciom, Młodzieży i Dorosłym Niepełnosprawnym",
		"Niechodzka 14A, 06-400 Ciechanów, Polska",
		"bycjakinni.org.pl",
		"bycjakinni@op.pl",
		"+48 23 674 35 32",
		{lat: 52.865193, lng: 20.6020631}
	),
	new Institute(
		"Powiatowa Poradnia Psychologiczno-Pedagogiczna w Koszalinie",
		"Racławicka 13, 75-620 Koszalin, Polska",
		"poradnia.powiat.koszalin.pl",
		"poradnia@powiat.koszalin.pl",
		"+48 94 714 02 02",
		{lat: 54.1881515, lng: 16.1932748}
	),
	new Institute(
		"Stowarzyszenie Pomocy Dzieciom \"Bratek\"",
		"Henryka Sienkiewicza 15, 74-320 Barlinek, Polska",
		"bratek-barlinek.pl",
		"bratekbarlinek@gmail.com",
		"+48 95 746 24 47",
		{lat: 52.9988374, lng: 15.2236336}
	),
	new Institute(
		"Fundacja JiM",
		"Tatrzańska 105, 93-279 Łódź, Polska",
		"jim.org",
		"klinika@jim.org",
		"+48 42 643 46 70",
		{lat: 51.73892, lng: 19.494522}
	),
	new Institute(
		"Samodzielny Publiczny Dziecięcy Szpital Kliniczny w Warszawie, Poradnia Zdrowia Psychicznego",
		"Żwirki i Wigury 63A, 02-091 Warszawa, Polska",
		"spdsk.edu.pl",
		"poliklinika@spdsk.edu.pl",
		"+48 22 317 91 64",
		{lat: 52.2072878, lng: 20.9838813}
	),
	new Institute(
		"Instytut Pomnik Centrum Zdrowia Dziecka Poradnia Psychiatryczna dla Dzieci i Młodzieży",
		"Ludwika Kickiego 24, 00-001 Warszawa, Polska",
		"szpzlo.praga-pld.pl",
		"wizyta@ipczd.pl",
		"+48 22 810 44 36",
		{lat: 52.2514683, lng: 21.0802396}
	),
	new Institute(
		"Poradnia Psychologiczno-Pedagogiczna w Łapach",
		"Bohaterów Westerplatte 8, 18-100 Łapy, Polska",
		"poradnia.idsl.pl",
		"poradnialapy@wp.pl",
		"+48 85 715 23 34",
		{lat: 52.9897271, lng: 22.8759626}
	)
];

export {
	Institute,
	IList
}
