const PokemonService = require('./services/pokemon-service')

let pService = new PokemonService();

let pokemon = pService.getData('https://pokeapi.co/api/v2/pokemon/');

console.log('pokemon: ', pokemon);