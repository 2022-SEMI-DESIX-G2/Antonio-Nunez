(() => {
  const App = {
    config: {
      getFormattedBackendUrl: "http://localhost:3000/pokemon",
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
        const pokemon = App.htmlElements.pokemonFinderInput.value;
        const url = App.utils.getUrl({ pokemon });
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

    utils: {
     /* getUrl: ({ pokemon }) => {
        return `${App.config.getFormattedBackendUrl}/${pokemon}`;
      },*/

      getFormattedBackendUrl: ({ query, searchType }) => {
        return `${Utils.settings.backendBaseUrl}/${searchType}/${query}`;
      },
      getPokemon: async ({ query, searchType = "pokemon" }) => {
        const pokemon = await Utils.fetch({
          url: Utils.getFormattedBackendUrl({ query, searchType }),
          searchType,
        });
        const species = await Utils.getSpecies(pokemon.species.url);
        const evolutionChain = await Utils.getEvolutionChain({
          url: species.evolution_chain.url,
          query: pokemon.order,
        });
        pokemon.evolutionChain = evolutionChain;
        return pokemon;
      }, 
      getSpecies: async (url, searchType = "pokemon-species") => {
        
        return await Utils.fetch({ url, searchType });
      },
      getEvolutionChain: async ({ url, searchType = "evolution-chain" }) => {
        return await Utils.fetch({
          url,
          searchType,
        });
      },
      getEvolutionsFromEvolutionChain: (evolutionChain) => {
        const evolutions = [];
        const getEvolutionsRecursive = (evolutionNext) => {
          evolutions.push(evolutionNext.species.name);
          if (evolutionNext.evolves_to[0]) {
            getEvolutionsRecursive(evolutionNext.evolves_to[0]);
          }
        };
        if (evolutionChain.chain) {
          getEvolutionsRecursive(evolutionChain.chain);
        }
  
        return evolutions;
      },
  
      getAbility: async ({ query, searchType = "ability" }) => {
        const ability = await Utils.fetch({
          url: Utils.getFormattedBackendUrl({ query, searchType }),
          searchType,
        });
        return ability;
      },
  
      fetch: async ({ url, searchType }) => {
        try {
          const rawResponse = await fetch(url);
          if (rawResponse.status !== 200) {
            throw new Error(`${searchType} not found`);
          }
          return rawResponse.json();
        } catch (error) {
          throw error;
        }
  
      },
    },

    templates: {
      render: ({ searchType, response }) => {
        const renderMap = { 
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
    },  
  };
  App.init();
})();