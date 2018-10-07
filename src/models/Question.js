import router from "../router";

class Question {
	constructor(id, text, questions, getNext, calculateScore) {
		this.id = id;
		this.text = text;
		this.questions = questions;
		this.getNext = getNext;
		this.calculateScore = calculateScore;
		this.answers = (questions.length === 0) ? [null] : questions.map(() => null);
		this.comment = "";
	}
}

const QList = [
	new Question("1",
		"Jeśli wskaże Pan/Pani ręką na jakiś obiekt w pokoju, to czy wtedy dziecko na niego spojrzy?",
		[
			"Patrzy na obiekt",
			"Wskazuje obiekt",
			"Patrzy na obiekt i komentuje",
			"Patrzy, czy rodzic wskazuje i mówi „patrz!”",
			"Ignoruje rodzica",
			"Rozgląda się po pokoju w przypadkowych kierunkach",
			"Patrzy na palec rodzica"
		],
		function () {
			router.push("3");
		},
		function () {
			return this.answers.slice(0, 4).filter(x => x).length - this.answers.slice(4, 7).filter(x => x).length <= 0;
		}),
	new Question("3",
		"Czy dziecko bawi się w udawanie lub w zabawy na niby?",
		[
			"Udaje, że pije z zabawkowego kubka?",
			"Udaje, że je zabawkową łyżeczką lub widelcem?",
			"Udaje, że rozmawia przez telefon?",
			"Udaje, że karmi lalkę lub pluszaka prawdziwym, albo wymyślonym jedzeniem?",
			"Jeździ samochodzikiem po wymyślonej drodze?",
			"Udaje, że jest robotem, samolotem, baletnicą lub innym ulubionym bohaterem?",
			"Umieszcza zabawkowy garnek na udawanej kuchence?",
			"Miesza w garnuszku wymyślone jedzenie?",
			"Wkłada do samochodzika lub ciężarówki ludzika lub ",
			"jak gdyby miała ona być kierowcą lub pasażerem?",
			"Udaje, że odkurza dywan, zamiata podłogę lub kosi trawnik?"
		],
		function () {
			router.push("4");
		},
		function () {
			return !this.answers.includes(true);
		}),
	new Question("4",
		"Czy dziecko lubi się wspinać na przedmioty?",
		[
			"Czy lubi się wspinać na schody?",
			"Czy lubi się wspinać na krzesła?",
			"Czy lubi się wspinać na meble?",
			"Czy lubi się wspinać na elementy placu zabaw?"
		],
		function () {
			router.push("5");
		},
		function () {
			return !this.answers.includes(true);
		}),
	new Question("5",
		"Czy dziecko wykonuje nietypowe ruchy palcami dłoni blisko twarzy, przy swoich oczach?",
		[
			"Patrzy na dłonie?",
			"Rusza palcami podczas zabawy w „a ku ku”?",
			"Kręci paluszkami blisko przy oczach?",
			"Trzyma podniesione ręce przy oczach?",
			"Trzyma podniesione ręce z boku oczu?",
			"Trzepocze dłońmi blisko swojej twarzy?"
		],
		function () {
			if (this.answers.slice(2, 6).includes(true))
				router.push("5b");
			else
				router.push("6");
		},
		function () {
			return false;
		}),
	new Question("5b",
		"Czy dzieje się to częściej niż dwa razy w tygodniu?",
		[],
		function () {
			router.push("6");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question("6",
		"Czy dziecko wskazuje palcem aby o coś poprosić lub uzyskać pomoc?",
		[],
		function () {
			if (!this.answers[0])
				router.push("6b");
			else
				router.push("7");
		},
		function () {
			return false;
		}),
	new Question("6b",
		"Gdy Twoje dziecko chce dostać coś, co jest poza zasięgiem jego	rąk, np. przekąskę lub zabawkę, co wtedy robi?",
		[
			"Sięga po przedmiot całą dłonią?",
			"Prowadzi Cię do tego przedmiotu?",
			"Próbuje samo dostać się do tego przedmiotu?",
			"Prosi o przedmiot słowami lub dźwiękami?"
		],
		function () {
			if (!this.answers.includes(true))
				router.push("6c");
			else
				router.push("7");
		},
		function () {
			return false;
		}),
	new Question("6c",
		"Jeśli powie Pan/Pani „pokaż mi”, to czy wtedy dziecko wskaże na przedmiot?",
		[],
		function () {
			router.push("7");
		},
		function () {
			return !!this.answers[0];
		}),
	new Question("7",
		"Czy dziecko chce aby Pan/Pani zobaczył/a coś, co je zainteresowało, np.",
		[
			"Samolot lecący na niebie?",
			"Ciężarówka na ulicy?",
			"Robaka na ziemi?",
			"Zwierzę na podwórku?",
			"Inne (prosze opisa"
		],
		function () {
			if (this.answers.includes(true))
				router.push("8");
			else
				router.push("7b");
		},
		function () {
			return false;
		}),
	new Question('7b',
		"W jaki sposób dziecko zwraca Pani/Pana uwagę na ten obiekt? Czy wskazuje palcem?",
		[],
		function () {
			if (this.answers[0])
				router.push("7c");
			else
				router.push("8");
		},
		function () {
			return !this.answers[0];
		}),
	new Question('7c',
		"Czy robi to, aby okazać swoje zainteresowanie, a nie po to, aby uzyskać pomoc?",
		[],
		function () {
			router.push("8");
		},
		function () {
			return !this.answers[0];
		}),
	new Question('8',
		"Czy jest zainteresowany/a dziećmi, które nie są jego rodzeństwem?",
		[],
		function () {
			if (this.answers[0])
				router.push("9");
			else
				router.push("8b");
		},
		function () {
			return false;
		}),
	new Question('8b',
		"Gdy jesteście na placu zabaw albo w supermarkecie, czy Pana/Pani dziecko zazwyczaj reaguje na inne dzieci?",
		[],
		function () {
			if (this.answers[0])
				router.push("8c");
			else
				router.push("9")
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question('8c',
		"Czy Pana/Pani dziecko:",
		[
			"Bawi się z innymi dziećmi?",
			"Rozmawia z innymi dziećmi?",
			"Gaworzy lub wokalizuje?",
			"Obserwuje inne dziecko?",
			"Uśmiecha się do innego dziecka?",
			"Na początku jest nieśmiałe, ale potem się uśmiecha?",
			"Ekscytuje się w kontakcie z drugim dzieckiem?"
		],
		function () {
			if (this.answers.includes(true))
				router.push("8d");
			else
				router.push("9");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers.includes(true);
		}),
	new Question('8d',
		"Czy reaguje na inne dzieci przez ponad połowę wspólnie spędzonego czasu?",
		[],
		function () {
			router.push("9");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question("9",
		"Czy dziecko czasami przynosi Panu/Pani…",
		[
			"Obrazek lub zabawkę po to, aby je Panu/Pani pokazać?",
			"Rysunek, który zrobiło?",
			"Kwiatek, który zerwało?",
			"Robaka, którego znalazło w trawie?",
			"Kilka klocków, które samo połączyło?",
			"Inne (proszę opisać)"
		],
		function () {
			if (this.answers.includes(true))
				router.push("9b");
			else
				router.push("10");
		},
		function () {
			return !this.answers.includes(true);
		}),
	new Question("9b",
		"Czy robi tak czasami tylko po to, żeby pokazać, a nie uzyskać pomoc?",
		[],
		function () {
			router.push("11");
		},
		function () {
			return !!this.answers[0];
		}),
	new Question("10",
		"Czy dziecko reaguje, gdy woła go/ją Pan/Pani po imieniu?",
		[
			"Podnosi głowę?",
			"Mówi lub gaworzy?",
			"Przestaje robić to, co właśnie robiło?",
			"Nie reaguje?",
			"Wydaje się, że słyszy, ale ignoruje rodzica?",
			"Odpowiada tylko wtedy, gdy rodzic jest tuż przed twarzą dziecka?",
			"Odpowiada tylko wtedy, gdy się go dotknie?"
		],
		function () {
			router.push("11");
		},
		function () {
			return this.answers.slice(0, 3).filter(x => x).length - this.answers.slice(3, 7).filter(x => x).length <= 0;
		}),
	new Question("11",
		"Gdy uśmiechasz się do dziecko, czy on/ona również odpowiada uśmiechem?",
		[
			"Uśmiecha się, gdy Pan/Pani się uśmiecha?",
			"Uśmiecha się, gdy Pan/Pani wchodzi do pokoju?",
			"Uśmiecha się, gdy Pan/Pani wraca po nieobecności?",
			"Zawsze się uśmiecha?",
			"Uśmiecha się na widok ulubionej zabawki lub aktywności?",
			"Uśmiecha się od czasu do czasu bez widocznej przyczyny?"
		],
		function () {
			router.push("12");
		},
		function () {
			return this.answers.slice(0, 3).filter(x => x).length - this.answers.slice(3, 6).filter(x => x).length <= 0;
		}),
	new Question("12",
		"Czy dziecko bywa rozdrażniony/a z powodu codziennych głośnych dźwięków?",
		[],
		function () {
			if (this.answers[0])
				router.push("12b");
			else
				router.push("13");
		},
		function () {
			return false;
		}),
	new Question("12b",
		"Czy Pani/Pana dziecko reaguje negatywnie na dźwięk…",
		[
			"Pralki?",
			"Płaczu dziecka?",
			"Odkurzacza?",
			"Suszarki do włosów?",
			"Ruchu ulicznego?",
			"Piszczących lub wrzeszczących dzieci?",
			"Głośnej muzyki?",
			"Telefonu lub dzwonka do drzwi?",
			"Głośnych miejsc",
			"lub restauracja?",
			"Inne (proszę opisać)"
		],
		function () {
			if (this.answers.filter(x => x).length >= 2)
				router.push("12c");
			else
				router.push("13");
		},
		function () {
			return false;
		}),
	new Question("12c",
		"W jaki sposób Pani/Pana dziecko reaguje na te dźwięki?",
		[
			"Spokojnie zakrywa uszy dłońmi?",
			"Mówi, że nie podoba mu się ten dźwięk?",
			"Krzyczy?",
			"Płacze?",
			"Zatyka uszy kiedy jest rozdrażnione?"
		],
		function () {
			router.push("13");
		},
		function () {
			return this.answers.slice(0, 2).filter(x => x).length - this.answers.slice(2, 5).filter(x => x).length <= 0;
		}),
	new Question("13",
		"Czy chodzi, nie trzymając się niczego?",
		[],
		function () {
			router.push("14");
		},
		function () {
			return !this.answers[0];
		}),
	new Question("14",
		"Czy patrzy Panu/Pani w oczy… ",
		[
			"Gdy czegoś potrzebuje?",
			"Gdy Pan/Pani się z nim/nią bawi?",
			"Podczas karmienia?",
			"Podczas zmianiania pieluszki?",
			"Gdy czyta mu/jej Pan/Pani bajkę?",
			"Gdy mówi Pan/Pani do niego/niej?"
		],
		function () {
			if (this.answers.filter(x => x).length === 1)
				router.push("14b");
			else
				router.push("15");
		},
		function () {
			return !this.answers.includes(true);
		}),
	new Question("14b",
		"Czy to, że dziecko patrzy Panu/Pani w oczy, zdarza się codziennie?",
		[],
		function () {
			if (this.answers[0])
				router.push("14c");
			else
				router.push("15");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question("14c",
		"Gdy spędzacie ze sobą cały dzień, czy przez ten czas dziecko patrzy Panu/Pani w oczy przynajmniej 5 razy?",
		[],
		function () {
			router.push("15");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question("15",
		"Czy dziecko próbuje Pana/ Panią naśladować, gdy Pan/Pani…",
		[
			"Wystawia język?",
			"Wydaje zabawny dźwięk?",
			"Macha na „do widzenia”?",
			"Klaszcze w dłonie?",
			"Przykłada palec do ust w geście „ciii”?",
			"Przesyła całusa?",
			"Inne (proszę opisać)"
		],
		function () {
			router.push("16");
		},
		function () {
			return this.answers.filter(x => x).length < 2;
		}),
	new Question("16",
		"Jeśli przekręca Pan/Pani głowę, by na coś spojrzeć, czy dziecko również się odwraca, by sprawdzić, na co Pan/Pani patrzy?",
		[],
		function () {
			if (this.answers[0])
				router.push("17");
			else
				router.push("16b");
		},
		function () {
			return false;
		}),
	new Question("16b",
		"Co dziecko robi, gdy Pan/Pani odwraca się, by na cos spojrzeć?",
		[
			"Patrzy w kierunku rzeczy, na którą Pan/Pani patrzy?",
			"Wskazuje w kierunku rzeczy, na którą Pan/Pani patrzy?,",
			"Odwraca się, by zobaczyć, na co Pan/Pani patrzy",
			"Ignoruje Pana/Panią?",
			"Patrzy na Pana/Pani twarz?"
		],
		function () {
			router.push("17");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return this.answers.slice(0, 3).filter(x => x).length - this.answers.slice(3, 5).filter(x => x).length <= 0;
		}),
	new Question("17",
		"Czy dziecko…",
		[
			"Mówi „Zobacz!” albo „Patrz na mnie!”?",
			"Gaworzy lub wydaje dźwięk, aby sprawić, że Pan/Pani będzie patrzeć na to, co on/a robi?",
			"Patrzy na Pana/Panią, by dostać nagrodę lub usłyszeć komentarz?",
			"Przygląda się czy Pan/Pani patrzy?",
			"Inne (proszę opisać):"
		],
		function () {
			router.push("18");
		},
		function () {
			return !this.answers.includes(true);
		}),
	new Question("18",
		"Czy dziecko wykona polecenie, gdy z kontekstu sytuacji będzie można jasno wywnioskować o co chodzi? Na przykład gdy Pan/Pani stoi już ubrany/a gotowy/a do wyjścia i mówi dziecku „weź swoje buty”, to czy wtedy zrozumie, o co chodzi?",
		[],
		function () {
			if (this.answers[0])
				router.push("18c");
			else
				router.push("18b");
		},
		function () {
			return false;
		}),
	new Question("18b",
		"W czasie pory obiadowej, gdy jedzenie jest już na stole i mówi Pan/Pani dziecku aby usiadło, czy wtedy ono przyjdzie i usiądzie przy stole?",
		[],
		function () {
			if (this.answers[0])
				router.push("18c");
			else
				router.push("19");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question("18c",
		"Gdy nie ma żadnych podpowiedzi w związku z kontekstem sytuacji, to czy wtedy dziecko potrafi wykonać polecenie? Na przykład…",
		[
			"(1.) Jeśli powie Pan/Pani „pokaż mi swój but”, bez wskazywania, bez wykonywania żadnego gestu i bez innych podpowiedzi(np.wtedy gdy, nie zamierzacie wychodzić z domu), to czy wtedy dziecko pokaże Panu / Pani swój but ?",
			"(2.) Jeśli powie Pan/Pani „przynieś mi kocyk” lub poprosi o inny przedmiot bez wskazywania, wykonywania żadnych gestów lub bez innych wskazówek, to czy dziecko go Panu / Pani przyniesie ? ",
			"(3.) Jeśli powie Pan/Pani „połóż książkę na krześle” bez wskazywania, wykonywania żadnych gestów lub bez innych wskazówek, to czy dziecko położy książkę na krześle ?"
		],
		function () {
			router.push("19");
		},
		function () {
			return !this.answers.includes(true);
		}
	),
	new Question("19",
		"Jeśli dzieje się coś nowego, to czy dziecko patrzy na Pana/Pani twarz, aby sprawdzić jak Pan/Pani na to reaguje?",
		[],
		function () {
			if (this.answers[0])
				router.push("20");
			else
				router.push("19b");
		},
		function () {
			return false;
		}),
	new Question("19b",
		"Jeśli dziecko słyszy dziwny, albo przerażający dźwięk, to czy wtedy popatrzy na Pana/Panią zanim samo zareaguje?",
		[],
		function () {
			if (this.answers[0])
				router.push("20");
			else
				router.push("19c");
		},
		function () {
			return false;
		}),
	new Question("19c",
		"Czy dziecko patrzy na Pana/Panią, gdy przytrafia mu się coś nieznanego lub coś lekko niepokojącego?",
		[],
		function () {
			router.push("20");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers[0];
		}),
	new Question("20",
		"Czy dziecko lubi aktywności ruchowe?",
		[],
		function () {
			if (this.answers[0])
				router.push("20b");
			else
				router.push("20c");
		},
		function () {
			return false;
		}),
	new Question("20b",
		"Czy dziecko lubi być podrzucane lub kołysane?",
		[],
		function () {
			if (this.answers[0])
				router.push("result");
			else
				router.push("20c");
		},
		function () {
			return false;
		}),
	new Question("20c",
		"Gdy Pan/Pani podrzuca dziecko lub je kołysze, to jak ono reaguje? Czy dziecko...",
		[
			"Śmieje się lub uśmiecha?",
			"Mówi lub gaworzy?",
			"Domaga się jeszcze, trzymając w górze ręce?",
			"Inne (proszę opisać)"
		],
		function () {
			router.push("result");
		},
		function () {
			if (this.answers[0] === null)
				return false;
			else
				return !this.answers.includes(true);
		})
];

export {
	Question,
	QList
}
