var ListCreator;
(function (ListCreator) {
    var ListCreatorViewModel = /** @class */ (function () {
        function ListCreatorViewModel() {
            this.listeFilms = ko.observableArray([]);
            //generate test films
            for (var i = 0; i < 5; i++) {
                var f = new ListCreator.Film();
                f.id(i);
                f.titre("Les bronzés" + i);
                f.link("http://dl.wow.film/" + i);
                this.listeFilms.push(f);
            }
            this.lastname = ko.observable("Glotin-Sanchez");
            this.name = ko.observable("Pedrita");
            console.log(this.listeFilms);
        }
        //Variable pour regler le problème du this flottant
        ListCreatorViewModel.self = null;
        return ListCreatorViewModel;
    }());
    ListCreator.ListCreatorViewModel = ListCreatorViewModel;
})(ListCreator || (ListCreator = {}));
//# sourceMappingURL=ListCreatorViewModel.js.map