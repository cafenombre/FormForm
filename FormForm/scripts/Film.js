var ListCreator;
(function (ListCreator) {
    var Film = /** @class */ (function () {
        function Film() {
            this.id = ko.observable(0);
            this.titre = ko.observable("");
            this.link = ko.observable("");
            this.seen = ko.observable(false);
        }
        return Film;
    }());
    ListCreator.Film = Film;
})(ListCreator || (ListCreator = {}));
//# sourceMappingURL=Film.js.map