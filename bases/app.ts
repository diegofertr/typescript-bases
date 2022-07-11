(() => {
  /**
   * Basicos de ts
   */

  const msg2 = 'Hello world';
  let msg3 = 'Hello world';
  const msg: string = 'Hello world';
  let mensaje2: string = 'Hola mundo';
  mensaje2 = 'Adios mundo';
  // // mensaje = 123;
  // console.log(mensaje2);

  // const hero = {
  //   name: 'Ironman',
  //   age: 43
  // };
  // // hero.age = '45'
  // console.log(hero.age + 1);

  /**
   * Inferencia de tipos de datos
   */

  const a: number = 10; // para una constante crea el tipo 10
  let b = 15; // infiere que es un numero debido al valor asignado

  let c: number = 20;
  let d: number;
  let e: string; // infiere que es de tipo ANY, ganamos flexibilidad pero perdemos control

  d = 3.1415;

  // e = true;
  // e = 3.1415;
  // e = {};
  // e = [];


  function sayHello( msg: string ) {
    console.log(msg);
  }

  sayHello('haloooooo!');
})();