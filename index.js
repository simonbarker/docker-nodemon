const PokemonService = require('./services/pokemon-service');
const express = require('express');

const app = express();
const port = 3000;

let pService = new PokemonService();
console.log(app);

(async() => {

  app.get('/getPokemon', async (req, res) => {
    let pokemon = await pService.getData('https://pokeapi.co/api/v2/pokemon/');

    console.log('got pokemon: ', pokemon);
    res.send(pokemon);
  })

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  })

})()
