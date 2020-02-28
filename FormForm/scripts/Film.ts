module ListCreator {
    export class Film {

        public id: KnockoutObservable<number>;
        public title: KnockoutObservable<string>;
        public link: KnockoutObservable<string>;
        public seen: KnockoutObservable<boolean>;


        constructor(id?: number, title?: string, link?: string) {
            this.id = id ? ko.observable(id) : ko.observable(0);
            this.title = title ? ko.observable(title) : ko.observable("vide");
            this.link = link ? ko.observable(link) : ko.observable("http://google.com");
            this.seen = ko.observable(false);
        }

    }
}