import * as types from '../mutation-types';
import router from '../../router';
import Question from '../../models/Question';

const state = {
	last_question: 0,
	question_list: [
		new Question("1",
			"Jeśli wskaże Pan/Pani ręką na jakiś obiekt w pokoju, to czy wtedy ___________ na niego spojrzy?",
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
				let count = 0;

				this.answers.slice(0, 4).forEach(value => {
					if (value)
						count++;
				});

				this.answers.slice(4, 7).forEach(value => {
					if (value)
						count--;
				});

				return count <= 0;
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
				return this.answers[0];
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
				return !this.answers.includes(true);
			}),
		new Question('8d',
			"Czy reaguje na inne dzieci przez ponad połowę wspólnie spędzonego czasu?",
			[],
			function () {
				router.push("9");
			},
			function () {
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
				return this.answers[0];
			})
	]
};

const getters = {
	question: state => id => state.question_list.filter(q => {
		return q.id === id
	})[0],
	last_question: state => state.last_question
};

const actions = {};

const mutations = {
	[types.UPDATE_ANSWERS] (state, {id, answers}) {
		state.question_list.filter(obj => obj.id === id)[0].answers = answers;
	},
	[types.SET_LAST_QUESTION] (state, value) {
		state.last_question = value;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
