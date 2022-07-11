(() => {
  /**
   * Otros usos de genericos
   */

  const funcionGenericaArrow = <T>( argument: T ): T =>{
    return argument;
  }

  interface Heroe {
    name: string;
    realName: string;
  }

  interface Villano {
    name: string;
    dangerLevel: number;
  }

  const deadpool = {
    name: 'Deadpool',
    realName: 'Juan Perez',
    dangerLevel: 30,
  }

  console.log(funcionGenericaArrow<Heroe>( deadpool).name);
  console.log(funcionGenericaArrow<Heroe>( deadpool).realName);
  console.log(funcionGenericaArrow<Villano>( deadpool).realName);

})();