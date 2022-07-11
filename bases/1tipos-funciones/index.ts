(() => {
  console.log('Booleans');

  let isSuperman: boolean ='undefined';
  console.log(isSuperman);


  // numbers
  const lenguajes = 4;
  let lenguajes2 = 4;
  let proyectos: number = 34;

  // strings
  const nombre = 'Pedro';
  let apellido: string = 'Rosales';
  console.log(typeof apellido);
  // apellido = 24;


  // Any - deja de usar el tipado estricto
  let avenger: any = 123;
  const exists;
  let power;

  avenger = 'Dr strange';
  console.log(avenger);
  // tipos de casteos
  console.log((avenger as string).charAt(0));
  console.log((<string>avenger).charAt(1));


  /**
   * ARRAYS
   */
  const lista = [1,2,3,4,'7',5, 0];
  let lista2 = [];
  lista.push(888);
  console.log(lista);
  let avengers: string[] = ['iron', 'capi', 'strange']
  // avengers.push(true);
  console.log(avengers);

  // con error forzado
  avengers.forEach((element: string) => {
    console.log(element.toUpperCase());
  });


  (() => {
    /**
     * TUPLAS > solo disponible en ts
     */
    const hero: [string, number, boolean] = ['Dr strange', 100, false];
    hero[0] = 20;
    hero[1] = 'Iron first';
    hero[2] = true;
  })();


  (() => {
    /**
     * ENUMS > solo disponible en ts
     * valor semantico al leer codigo
     * limitar nuestras variables a un conjunto de valores predefinidos
     */

    let audioLevel = 5;
    enum AudioLevel {
      min = 1,
      med,
      max = 10,
    }
    const currentAudio = 10;
    console.log('currentAudio :: ', currentAudio);
  })();

  (() => {
    /**
     * Void - vacio
     */

    function callHeroe(): void {
      // return 1;
      // return undefined;
      return;
    }
    const a = callHeroe();
    console.log(a);
  })();


  (() => {
    /**
     * Never -> tipo de dato
     * no debe tener un punto alcanzable al finalizar la funcion
     */
    const tirarError = (msg: string): never => {
      throw new Error(msg);
    }

    // tirarError('Auxilio!');
    console.log('hello world');

  })();


  (() => {
    /**
     * null - undefined
     */

    let nada: undefined = undefined;
    let nada2: number = undefined;
    let nada3: null = null;
    // para poder hacer esto debemos
    // deshabilitar el strictNullChecks
    // en tsconfig
    let isActive: boolean = undefined;
    let isActive2: (boolean | undefined) = undefined;
    let isActive3: (boolean | null) = undefined;
    console.log(nada)
  });


  (() => {
    /**
     * Tipado en Funciones
     * > parametros obligatorios
     * > parametros opcionales
     * > parametros por defecto
     */

    const fullName = (firstName: string, lastName?: string, withUpper: boolean = false) => {
      if (withUpper) {
        return `${firstName} ${lastName || '---'}`.toUpperCase();
      } else {
        return `${firstName} ${lastName || '---'}`;
      }
    }
    console.log('tipo :: ', typeof fullName);

    const name1 = fullName('Pedro');
    console.log(name1);
    const name2 = fullName('Pablo', 'Flores');
    console.log(name2);
    const name3 = fullName('Joaquin', 'Alves', true);
    console.log(name3);

    /// Prametros rest
    const getName = (firstName: string, ...restArguments: string[]): string => {
      console.log('resto de argumentos :: ', restArguments);
      return `${ firstName }`;
    }

    const superman = getName('Clark', 'Joseph', 'Ken', 'Morden');
    console.log( superman );

  })();

  (() => {
    /**
     * Tipo Function
     */

    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const save = () => `Contenido guardado!`;

    // typescript logra inferir los tipos
    // luego de una asignacion

    // let myFunction: Function;
    let myFunction: (x: string) => string;

    // myFunction = 10;
    console.log(myFunction);

    myFunction = addNumber;
    console.log(myFunction(1, 5));

    myFunction = greet;
    console.log(myFunction('Carlos'));

    myFunction = save;
    console.log(myFunction());

  })();


})();