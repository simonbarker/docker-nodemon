const fetch = require('node-fetch');

class PokemonService {
  constructor() { }

  getData = async url => {
    console.log(`[${__filename}]: Getting pokemon`);
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('error: ', error);
    }
  };
}

module.exports = PokemonService;