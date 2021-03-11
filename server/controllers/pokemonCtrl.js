const caughtPokemon = [];
let id = 1;

module.exports = {
    //This method will send the caughtPokemon array to the client-side
    getCaughtPokemon: (req, res) => {
        res.status(200).send(caughtPokemon);
    },
    //This method will take the req.body.pokemon object, add an id to it, and then push it
    //to the caughtPokemon array. It then increments the id variable to keep id's unique,
    //and then sends the caughtPokemon array to the client-side
    catchPokemon: (req, res) => {
        const {pokemon} = req.body;

        pokemon.id = id;
        id++;

        caughtPokemon.push(pokemon);
        res.status(200).send(caughtPokemon);
    },
    //This method takes an id parameter to find the item to be updated. We do this using findIndex.
    //Once the index is found, access the object using bracket notation and re-assign the name value
    //to the one passed in from req.body. Finally, send the caughtPokemon array to the client-side.
    editName: (req, res) => {
        const {id} = req.params,
              {name} = req.body;

        const pokemon = caughtPokemon.find(element => element.id === +id);
        pokemon.name = name;
        res.status(200).send(caughtPokemon);
    },
    //This method takes an id to find the object to be deleted. We do this by using findIndex, and
    //then splicing the object out of the caughtPokemon array. Then we send the caughtPokemon array
    //to the client-side.
    releasePokemon: (req, res) => {
        const {id} = req.params;

        const index = caughtPokemon.findIndex(element => element.id === +id);
        caughtPokemon.splice(index, 1);
        res.status(200).send(caughtPokemon);
    }
}