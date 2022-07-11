/**
 * Ejemplo con api's
 */
// import axios from 'axios';
// const axios = require('axios');

(() => {

  const getPokemon = async (pokemonId: string) => {
    console.log('obtener pokemons');
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`,
    {
      method: 'GET'
    });
    resp.json();
    // console.log(resp.json());
    // if (true) throw new Error('Ayuda!!!');
    // return 1;
    return resp.json();
  }

  getPokemon('ditto')
    .then(response => {
      console.log(JSON.stringify( response, null, 2 ));
      console.log(response);
    })
    .catch(console.error);

})();