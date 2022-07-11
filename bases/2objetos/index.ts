(() => {
  /**
   * Objetos
   */

  (() => {
    let flash: {
      name: string,
      age: number,
      powers: string[],
      getNombre?: () => string
    } = {
      name: 'Allan',
      age: 24,
      powers: ['Velocidad', 'Viaje en el tiempo']
    }

    flash = {
      name: 'Otto Octavios',
      age: 32,
      powers: ['fuerza'],
      getNombre() {
        return this.name;
      }
    }

    const otroHeroe: {
      name?: string,
    } = {};
    console.log(flash);
  })();



  (() => {
    /**
     * Tipos Dinamicos
     * type
     */

    type Hero = {
      name: string,
      age?: number,
      powers: string[],
      getName?: () => string,
    }

    const superman: Hero = {
      name: 'Clark kent',
      age: 32,
      powers: ['fuerza', 'vision'],
      getName() {
        return this.name;
      }
    }
    console.log(superman);
  })();

  /**
   * Union types
   */

  type Hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string,
  }

  let myCustom: (string | number | Hero) = 'Pedro';

  console.log(myCustom);

  myCustom = 20;
  console.log(myCustom);

  myCustom = {
    name: 'Bruce Banner',
    age: 43,
    powers: ['fuerza'],
  };
  console.log(typeof myCustom);
  console.log(myCustom);


})();