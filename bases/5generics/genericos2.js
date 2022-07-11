"use strict";
(function () {
    var funcionGenericaArrow = function (argument) {
        return argument;
    };
    var deadpool = {
        name: 'Deadpool',
        realName: 'Juan Perez',
        dangerLevel: 30
    };
    console.log(funcionGenericaArrow(deadpool).name);
    console.log(funcionGenericaArrow(deadpool).realName);
    console.log(funcionGenericaArrow(deadpool).realName);
})();
