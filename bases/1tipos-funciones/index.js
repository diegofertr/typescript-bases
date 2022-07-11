"use strict";
(function () {
    console.log('Booleans');
    var isSuperman = 'undefined';
    console.log(isSuperman);
    var lenguajes = 4;
    var lenguajes2 = 4;
    var proyectos = 34;
    var nombre = 'Pedro';
    var apellido = 'Rosales';
    console.log(typeof apellido);
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr strange';
    console.log(avenger);
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(1));
    var lista = [1, 2, 3, 4, '7', 5, 0];
    var lista2 = [];
    lista.push(888);
    console.log(lista);
    var avengers = ['iron', 'capi', 'strange'];
    console.log(avengers);
    avengers.forEach(function (element) {
        console.log(element.toUpperCase());
    });
    (function () {
        var hero = ['Dr strange', 100, false];
        hero[0] = 20;
        hero[1] = 'Iron first';
        hero[2] = true;
    })();
    (function () {
        var audioLevel = 5;
        var AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 1] = "min";
            AudioLevel[AudioLevel["med"] = 2] = "med";
            AudioLevel[AudioLevel["max"] = 10] = "max";
        })(AudioLevel || (AudioLevel = {}));
        var currentAudio = 10;
        console.log('currentAudio :: ', currentAudio);
    })();
    (function () {
        function callHeroe() {
            return;
        }
        var a = callHeroe();
        console.log(a);
    })();
    (function () {
        var tirarError = function (msg) {
            throw new Error(msg);
        };
        console.log('hello world');
    })();
    (function () {
        var nada = undefined;
        var nada2 = undefined;
        var nada3 = null;
        var isActive = undefined;
        var isActive2 = undefined;
        var isActive3 = undefined;
        console.log(nada);
    });
    (function () {
        var fullName = function (firstName, lastName, withUpper) {
            if (withUpper === void 0) { withUpper = false; }
            if (withUpper) {
                return "".concat(firstName, " ").concat(lastName || '---').toUpperCase();
            }
            else {
                return "".concat(firstName, " ").concat(lastName || '---');
            }
        };
        console.log('tipo :: ', typeof fullName);
        var name1 = fullName('Pedro');
        console.log(name1);
        var name2 = fullName('Pablo', 'Flores');
        console.log(name2);
        var name3 = fullName('Joaquin', 'Alves', true);
        console.log(name3);
        var getName = function (firstName) {
            var restArguments = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restArguments[_i - 1] = arguments[_i];
            }
            console.log('resto de argumentos :: ', restArguments);
            return "".concat(firstName);
        };
        var superman = getName('Clark', 'Joseph', 'Ken', 'Morden');
        console.log(superman);
    })();
    (function () {
        var addNumber = function (a, b) { return a + b; };
        var greet = function (name) { return "Hola ".concat(name); };
        var save = function () { return "Contenido guardado!"; };
        var myFunction;
        console.log(myFunction);
        myFunction = addNumber;
        console.log(myFunction(1, 5));
        myFunction = greet;
        console.log(myFunction('Carlos'));
        myFunction = save;
        console.log(myFunction());
    })();
})();
