//start with what you are working with. an empty array

const caughtPokemon = [];

//then an ID. keep track of unique ids

// for it to be full crud 

//dont need to edit entire project
let id = 1;

module.exports = {
    getCaughtPokemon: (req, res) => {
        res.status(200).send(caughtPokemon);
    },
    catchPokemon: (req, res) => {
        const {pokemon} = req.body;

        pokemon.id = id;
        id++;

        caughtPokemon.push(pokemon);
        res.status(200).send(caughtPokemon);
    },
    editName: (req, res) => {
        const {id} = req.params,
              {name} = req.body;

        const pokemon = caughtPokemon.find(element => element.id === +id);
        pokemon.name = name;
        res.status(200).send(caughtPokemon);
    },
    releasePokemon: (req, res) => {
        const {id} = req.params;

        const index = caughtPokemon.findIndex(element => element.id === +id);
        caughtPokemon.splice(index, 1);
        res.status(200).send(caughtPokemon);
    }
}