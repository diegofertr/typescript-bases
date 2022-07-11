/**
 * Genericos
 */
(() => {
  // Una funcion generica es una funcion que puede recibir
  // cualquier tipo de argumento
  const printObject = (argument: any) => {
    console.log(argument);
  }

  printObject('hola mundo');
  printObject(123);
  printObject({ a: 1, b: 2, c: 3});
  printObject([1,2,3,4,5,6,7,8,9,10]);
  printObject(new Date());


  function genericFunction( argument: any ) {
    return argument;
  }
  // tendriamos que hacer una funcion para cada tipo?

  // console.log(genericFunction(3.1416));
  // console.log(genericFunction(3.1416).toFixed(2));
  // console.log(genericFunction('Hola mundo').toFixed(2));
  // console.log(genericFunction(new Date()).toFixed(2));

  // ----------------------------------------------------------------
  // se puede poner el tipo de dato generico dentro de < >
  function funcionGenerica<T>( argument: T ): T {
    return argument;
  }

  console.log(funcionGenerica(3.1416));
  console.log(funcionGenerica(3.1416).toFixed(2));
  // console.log(funcionGenerica('Hola mundo').toFixed(2)); // con error
  console.log(funcionGenerica('Hola mundo'));
  // console.log(funcionGenerica(new Date()).toFixed(2)); // Con error
  console.log(funcionGenerica(new Date()).getDay());


  const funcionGenericaArrow = <T>( argument: T ): T =>{
    return argument;
  }
  console.log(funcionGenericaArrow(3.1416));
  console.log(funcionGenericaArrow(7.3434343416).toFixed(2));
  // console.log(funcionGenericaArrow('Hola mundo').toFixed(2)); // con error
  console.log(funcionGenericaArrow('adios mundo').toUpperCase());
  // console.log(funcionGenericaArrow(new Date()).toFixed(2)); // Con error

})();