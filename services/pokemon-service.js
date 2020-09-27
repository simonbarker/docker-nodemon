const fetch = require('node-fetch');

class PokemonService {
  constructor() {
    console.log('constructing a pokemon instance');
  }

  getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = PokemonService;