module ListCreator {
    export class ListCreatorViewModel {

        //app variables
        public name: KnockoutObservable<string>;
        public lastname: KnockoutObservable<string>;
        public listeFilms: KnockoutObservableArray<Film> = ko.observableArray([]);

        //Variable pour regler le problème du this flottant
        public static self: ListCreatorViewModel = null;

        public constructor() {

            //generate test films
            for (var i = 0; i < 5; i++) {
                var f = new Film();
                f.id(i);
                f.titre("Les bronzés" + i);
                f.link("http://dl.wow.film/" + i);
                this.listeFilms.push(f);                
            }
            this.lastname = ko.observable("Glotin-Sanchez");
            this.name = ko.observable("Pedrita");
            console.log(this.listeFilms);

        }
    }
}