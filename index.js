const PokemonService = require('./services/pokemon-service');
const express = require('express');

const app = express();
const port = 3000;

const pService = new PokemonService();

(async() => {

  app.get('/getPokemon', async (req, res) => {
    let pokemon = await pService.getData('https://pokeapi.co/api/v2/pokemon/');
    res.send(pokemon);
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })

})()
