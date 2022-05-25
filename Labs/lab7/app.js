const { get } = require("express/lib/response");

function getPokemon() {
   
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur", )
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


/*function getEvolution() {

    fetch("https://pokeapi.co/api/v2/evolution-chain/1/")
.then(function(response) {
    response.json()
        .then(function(evoChain){

            let evoChain = [];

            function getEvo(arr) {
              if (arr[0].evolves_to.length > 0) {
                evoChain.push(arr[0].species.name);
                getEvo(arr[0].evolves_to);
              } else {
                evoChain.push(arr[0].species.name);
                return 0;
              }
            }
            getEvo([data.chain]);
    

    })
})
    
}*/
 

getPokemon();
//getEvolution();




