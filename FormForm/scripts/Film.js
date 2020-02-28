var ListCreator;
(function (ListCreator) {
    var Film = /** @class */ (function () {
        function Film(id, title, link) {
            this.id = id ? ko.observable(id) : ko.observable(0);
            this.title = title ? ko.observable(title) : ko.observable("vide");
            this.link = link ? ko.observable(link) : ko.observable("http://google.com");
            this.seen = ko.observable(false);
        }
        return Film;
    }());
    ListCreator.Film = Film;
})(ListCreator || (ListCreator = {}));
//# sourceMappingURL=Film.js.map