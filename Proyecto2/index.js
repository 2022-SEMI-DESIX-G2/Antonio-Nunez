((Utils) => {
  const App = {

    config: {
      baseApiUrl: "http://localhost:3000/pokemon",
    },

    htmlElements: {
    
      pokemonFinderForm: document.querySelector("#pokemon-finder-form"),
      pokemonFinderSearchType: document.querySelector("#pokemon-finder-search-type"),
      pokemonFinderInput: document.querySelector("#pokemon-finder-query"),
      pokemonFinderOutput: document.querySelector("#pokemon-finder-response"), 
    },
    init: () => {
      App.htmlElements.pokemonFinderForm.addEventListener(
        "submit",
        App.handlers.pokemonFinderFormOnSubmit,
      );

    },
    handlers: {

      pokemonFinderFormOnSubmit: async (e) => {
        e.preventDefault();
        
        const query = App.htmlElements.pokemonFinderInput.value;
        const searchType = App.htmlElements.pokemonFinderSearchType.value;
        console.log({ searchType });
        const url = App.utils.getUrl({ query });
        console.log({ url });
        const { data } = await axios.post(url);
        console.log({ data });
        var response;
        var renderedTemplate;

        try {
         
          if(searchType === "pokemon"){
            response = await Utils.getPokemon({
            query,
            searchType,
          });

            renderedTemplate = App.templates.render({
            searchType,
            response,
          });
        }
        else{
          response = await Utils.getAbility({
            query,
            searchType,
          });

            renderedTemplate = App.templates.render({
            searchType,
            response,
          });

         }
   
          App.htmlElements.pokemonFinderOutput.innerHTML = renderedTemplate;
        } catch (error) {
          App.htmlElements.pokemonFinderOutput.innerHTML = `<h1>${error}</h1>`;
        }
      },
    },
   
    templates: {
      render: ({ searchType, response }) => {
        const renderMap = {
          ability: App.templates.abilityCard,
          pokemon: App.templates.pokemonCard,
        };
        return renderMap[searchType]
          ? renderMap[searchType](response)
          : App.templates.errorCard();
      },
      errorCard: () => `<h1>There was an error</h1>`,

    
      pokemonCard: ({ id, sprites, types, name, weight, height, abilities, species, evolutionChain}) => {
        const evolutions = Utils.getEvolutionsFromEvolutionChain(evolutionChain);
        return `<div class="poke-card-display">
        <div class= "poke-container-left">
        <h1>${name} (${id})</h1>
        <div class="img-container">
        <img class="poke-img" src="${sprites.front_default}"></img>
        <img class="poke-img-back" src="${sprites.back_default}"></img></div>

        <div class="poke-types">Types: ${types[0].type.name} ${types[1]? types[1].type.name : ''}</div>
        <div class="poke-types">Evolution Chain:${evolutions}</div>
        <div class="poke-container-right">
        <li>Weight: ${weight/10} kgs</li>
        <li>Height: ${height/10} mts</li>
        <li>Abilities: <label>${abilities[0].ability.name},</label> <label>${abilities[1]? abilities[1].ability.name : ''}</label></li></div>
        </div>
        
        <button class="btn-clear" onclick="history.go(0);">Clear</button> 
        </div>`;
    
      },

      abilityCard: ({ id, name, pokemon }) => {
        const pokemonList = pokemon.map(
          ({ pokemon, is_hidden }) =>
            `<div class="poke-card"><li>${pokemon.name}${
              is_hidden ? " (Hidden)" : ""
            }</li></div>`
        );
        return `<h1><div class="poke-types">${name} (${id})</div></h1><ul>${pokemonList.join("")}</ul>`;
      },
    },
    utils: {
      getUrl: ({ query }) => {
        return `${App.config.baseApiUrl}/${query}`;
      },
    },
  };
  App.init();
})(document.Utils);