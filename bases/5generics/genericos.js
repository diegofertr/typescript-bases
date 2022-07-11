"use strict";
(function () {
    var printObject = function (argument) {
        console.log(argument);
    };
    printObject('hola mundo');
    printObject(123);
    printObject({ a: 1, b: 2, c: 3 });
    printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    printObject(new Date());
    function genericFunction(argument) {
        return argument;
    }
    function funcionGenerica(argument) {
        return argument;
    }
    console.log(funcionGenerica(3.1416));
    console.log(funcionGenerica(3.1416).toFixed(2));
    console.log(funcionGenerica('Hola mundo'));
    console.log(funcionGenerica(new Date()).getDay());
    var funcionGenericaArrow = function (argument) {
        return argument;
    };
    console.log(funcionGenericaArrow(3.1416));
    console.log(funcionGenericaArrow(7.3434343416).toFixed(2));
    console.log(funcionGenericaArrow('adios mundo').toUpperCase());
})();
