const { get } = require("express/lib/response");

function getPokemon() {
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(function(response) {
    response.json()
        .then(function(pokemon){
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
        console.log(pokemon.height);
        console.log(pokemon.abilities[0].ability.name);
        console.log(pokemon.abilities[1]?.ability.name);

    })
})
} 

function getSpecies() {
    fetch("https://pokeapi.co/api/v2/pokemon-species/ditto")
.then(function(response) {
    response.json()

    .then(function(species){
        var evoChain = [];
        var evoData = species.data.chain;
        
        do {
          var evoDetails = evoData['evolution_details'][0];
        
          evoChain.push({
            "species_name": evoData.species.name,
            "min_level": !evoDetails ? 1 : evoDetails.min_level,
            "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
            "item": !evoDetails ? null : evoDetails.item
          });
        
          evoData = evoData['evolves_to'][0];
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    
    })
   
    return evoChain;

    }) 
}
 

getPokemon();
getSpecies();