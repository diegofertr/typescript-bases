(() => {
  /**
   * Clases
   */
  class Heroe {
    private name: string;
    public team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }

  }

  const antman: Heroe = new Heroe('Antman', 'Marvel');
  console.log(antman);
  console.log(Heroe.avgAge);// acceso a metodos o var estaticos

  (() => {

    class Heroe {
      // private name: string;
      // public team: string;
      // public realName?: string;
      static avgAge: number = 35;

      constructor(
        private name: string,
        public team: string,
        public realName?: string
      ) {}

    }

    const antman: Heroe = new Heroe('Antman', 'Marvel', 'Juan Perez');
    console.log(antman);
    console.log(Heroe.avgAge);// acceso a metodos o var estaticos

  })();

})();