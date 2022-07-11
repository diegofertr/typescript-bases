"use strict";
(function () {
    var thor = {
        name: 'Thor',
        age: 40,
        team: 'MARVEL',
        powers: ['rayo', 'fuerza']
    };
    console.log(thor);
    var firefox = {};
    (function () {
        var _animal = {
            name: 'tigre',
            tipo: 'carnivoro'
        };
        console.log(_animal);
        var _oso = {
            name: 'osito',
            tipo: 'carnivoro',
            miel: true
        };
        console.log(_oso);
    })();
    (function () {
        var oso = {
            name: 'Grizlie',
            miel: false
        };
        console.log(oso);
    })();
    (function () {
        var client = {
            nombre: 'Diego',
            edad: 25,
            direcciones: [{
                    id: 125,
                    zip: 'ADD',
                    ciudad: 'la paz'
                }]
        };
        console.log(client);
        var client2 = {
            nombre: 'Diego',
            edad: 25
        };
        console.log(client2);
        var perfilPublico = {
            nombre: 'asd',
            usuario: 'asd',
            correo: 'asd@test.com'
        };
        console.log(perfilPublico);
    })();
    (function () {
        var Mutante = (function () {
            function Mutante() {
                this.age = 2;
                this.realName = 'fake';
                this.name = 'fake';
            }
            Mutante.prototype.power = function () {
                return 'datos del poder';
            };
            ;
            return Mutante;
        }());
        var wolverine = new Mutante();
        console.log(wolverine);
    })();
    (function () {
        var funcionSumar;
        funcionSumar = function (a, b, c) {
            return 10;
        };
    })();
})();
