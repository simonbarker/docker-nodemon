const expect = require('chai').expect;
const should = require('chai').should();
const PokemonService = require('../services/pokemon-service');

const pService = new PokemonService();

describe('getPokemon()', function () {
  it('should get object of pokemon', async () => {

    let pokemon = await pService.getData('https://pokeapi.co/api/v2/pokemon/');
    pokemon.should.be.an('object');
    pokemon.should.have.property('count');
    pokemon.should.have.property('next');
    pokemon.should.have.property('previous');
    pokemon.should.have.property('results');
  });
});