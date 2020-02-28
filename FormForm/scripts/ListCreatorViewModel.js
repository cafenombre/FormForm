var ListCreator;
(function (ListCreator) {
    var ListCreatorViewModel = /** @class */ (function () {
        function ListCreatorViewModel() {
            //generate test films
            //app variables
            this.listeFilms = ko.observableArray([]);
            //variable pour savoir si une tache est selectionnée
            this.selectedRow = ko.observable(false);
            this.listeFilms.push(new ListCreator.Film());
            this.listeFilms.push(new ListCreator.Film(1, "Constantine", "http://glot.in"));
            this.listeFilms.push(new ListCreator.Film(2, "Harold & Kumar", "http://glot.in/experiences.php"));
            this.listeFilms.push(new ListCreator.Film(3, "The Hateful 8", "http://google.fr"));
            this.cacheFilm = ko.observable(new ListCreator.Film());
            ListCreatorViewModel.Self = this;
        }
        ListCreatorViewModel.prototype.addFilm = function () {
            this.cacheFilm().id = ko.observable(this.listeFilms().length + 1);
            this.listeFilms.push(this.cacheFilm());
            this.cacheFilm = ko.observable(new ListCreator.Film());
        };
        //unused for now
        ListCreatorViewModel.prototype.selectLine = function (data, event) {
            $(event.currentTarget).closest("tbody").children().removeClass("selected");
            $(event.currentTarget).addClass("selected");
            //on utilise self pour éviter le souci du this flottant
            var self = ListCreatorViewModel.Self;
            self.selectedRow(true);
        };
        //Variable pour regler le problème du this flottant
        ListCreatorViewModel.Self = null;
        return ListCreatorViewModel;
    }());
    ListCreator.ListCreatorViewModel = ListCreatorViewModel;
})(ListCreator || (ListCreator = {}));
//# sourceMappingURL=ListCreatorViewModel.js.map