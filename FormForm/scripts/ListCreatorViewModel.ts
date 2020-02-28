module ListCreator {
    export class ListCreatorViewModel {

        //app variables
        public listeFilms: KnockoutObservableArray<Film> = ko.observableArray([]);
        public cacheFilm: KnockoutObservable<Film>;

        //variable pour savoir si une tache est selectionnée
        public selectedRow: KnockoutObservable<boolean> = ko.observable(false);

        //Variable pour regler le problème du this flottant
        public static Self: ListCreatorViewModel = null;

        public constructor() {

            //generate test films
            
            this.listeFilms.push(new Film());
            this.listeFilms.push(new Film(1, "Constantine", "http://glot.in"));
            this.listeFilms.push(new Film(2, "Harold & Kumar", "http://glot.in/experiences.php"));
            this.listeFilms.push(new Film(3, "The Hateful 8", "http://google.fr"));

            this.cacheFilm = ko.observable(new Film());
            ListCreatorViewModel.Self = this;

        }

        public addFilm() {
            this.cacheFilm().id = ko.observable(this.listeFilms().length+1);
            this.listeFilms.push(this.cacheFilm());
            this.cacheFilm = ko.observable(new Film());
        }

        //unused for now
        public selectLine(data: Film, event: Event) {
            $(event.currentTarget).closest("tbody").children().removeClass("selected");
            $(event.currentTarget).addClass("selected");

            //on utilise self pour éviter le souci du this flottant
            var self = ListCreatorViewModel.Self;
            self.selectedRow(true);
        }
    }
}