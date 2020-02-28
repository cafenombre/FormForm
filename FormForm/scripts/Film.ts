module ListCreator {
    export class Film {

        public id: KnockoutObservable<number> = ko.observable(0);
        public titre: KnockoutObservable<string> = ko.observable("");
        public link: KnockoutObservable<string> = ko.observable("");
        public seen: KnockoutObservable<boolean> = ko.observable(false);

    }
}