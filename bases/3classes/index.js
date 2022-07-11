"use strict";
(function () {
    var Heroe = (function () {
        function Heroe(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Heroe.avgAge = 35;
        return Heroe;
    }());
    var antman = new Heroe('Antman', 'Marvel');
    console.log(antman);
    console.log(Heroe.avgAge);
    (function () {
        var Heroe = (function () {
            function Heroe(name, team, realName) {
                this.name = name;
                this.team = team;
                this.realName = realName;
            }
            Heroe.avgAge = 35;
            return Heroe;
        }());
        var antman = new Heroe('Antman', 'Marvel', 'Juan Perez');
        console.log(antman);
        console.log(Heroe.avgAge);
    })();
})();
