(() => {

  /**
   * Interfaces
   */

  // type Hero = {
  //   name: string,
  //   age?: number,
  //   team: string,
  //   powers: string[],
  //   // getName?: () => string,
  // }
  interface Hero {
    name: string,
    age?: number,
    team: string,
    powers: string[],
    // getName?: () => string,
  }

  let thor: Hero = {
    name: 'Thor',
    age: 40,
    team: 'MARVEL',
    powers: ['rayo', 'fuerza'],
  }

  console.log(thor);
  // Diferencias entre types e interfaces

  // Usando type dsde archivo .d.ts
  const firefox: Programa = {};

  /// * Extendiendo una interface
  (() => {
    interface Animal {
      name: string;
    }

    interface Oso extends Animal {
      miel: boolean;
    }

    const _animal: Animal = {
      name: 'tigre',
      tipo: 'carnivoro'
    }
    console.log(_animal);

    interface Animal {
      tipo: string,
    }

    const _oso: Oso = {
      name: 'osito',
      tipo: 'carnivoro',
      miel: true
    };
    console.log(_oso);
  })();

  ///  * Extendiendo un type
  (() => {
    type Animal = {
      name: string,
    }

    type Oso = Animal & {
      miel: boolean,
    }

    // type Animal = {
    //   tipo: string,
    // }

    const oso: Oso = {
      name: 'Grizlie',
      miel: false,
    };
    console.log(oso);
  })();

  (() => {
    /**
     * Estructuras complejas
     */

    // interface Cliente {
    //   nombre: string;
    //   edad: number;
    //   direcciones?: {
    //     id: number;
    //     zip: string;
    //     ciudad: string;
    //   }
    // }

    interface Direccion {
      id: number;
      zip: string;
      ciudad: string;
    }

    interface Cliente {
      nombre: string;
      edad: number;
      direcciones?: Direccion[]
    }

    const client: Cliente = {
      nombre: 'Diego',
      edad: 25,
      direcciones: [{
        id: 125,
        zip: 'ADD',
        ciudad: 'la paz'
      }]
    }
    console.log(client);

    const client2: Cliente = {
      nombre: 'Diego',
      edad: 25,
    }
    console.log(client2);

    // Plus - Omit con types
    type Persona = {
      nombre: string;
    }

    type Usuario = {
      correo: string;
      usuario: string;
      dinero: number;
    }

    type UsuarioPublicoType = Persona & Omit<
      Usuario,
      "dinero"
    >
    const perfilPublico: UsuarioPublicoType = {
      nombre: 'asd',
      usuario: 'asd',
      correo: 'asd@test.com',
    }
    console.log(perfilPublico);

  })();


  (() => {
    /**
     * Trabajando interfaces con Clases
     */

    interface Xmen {
      name: string;
      power: () => string;
    }

    interface Human {
      realName: string;
      age: number;
    }

    // class Mutante extends Xmen {} // no extiende
    class Mutante implements Xmen, Human {
      public age: number = 2;
      public realName: string = 'fake';
      public name: string = 'fake';

      public power() {
        return 'datos del poder';
      };
    }

    const wolverine = new Mutante();
    // wolverine.name = 'Alan Brito';
    console.log(wolverine);
  })();

  (() => {
    /**
     * Interfaces con funciones
     */

    interface addTwoNumbers {
      (a: number, b: number): number,
    }

    let funcionSumar: addTwoNumbers;

    funcionSumar = (a: number, b: number, c: string) => {
      return 10;
    }
  })();

})();