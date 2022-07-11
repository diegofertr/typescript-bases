"use strict";
(function () {
    (function () {
        var flash = {
            name: 'Allan',
            age: 24,
            powers: ['Velocidad', 'Viaje en el tiempo']
        };
        flash = {
            name: 'Otto Octavios',
            age: 32,
            powers: ['fuerza'],
            getNombre: function () {
                return this.name;
            }
        };
        var otroHeroe = {};
        console.log(flash);
    })();
    (function () {
        var superman = {
            name: 'Clark kent',
            age: 32,
            powers: ['fuerza', 'vision'],
            getName: function () {
                return this.name;
            }
        };
        console.log(superman);
    })();
    var myCustom = 'Pedro';
    console.log(myCustom);
    myCustom = 20;
    console.log(myCustom);
    myCustom = {
        name: 'Bruce Banner',
        age: 43,
        powers: ['fuerza']
    };
    console.log(typeof myCustom);
    console.log(myCustom);
})();
