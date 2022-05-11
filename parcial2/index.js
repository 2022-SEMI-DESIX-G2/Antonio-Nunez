((Utils) => {
    const App = {
      htmlElements: {
        pokemonFinderForm: document.querySelector("#pokemon-finder-form"),
        pokemonFinderSearchType: document.querySelector(
          "#pokemon-finder-search-type"
        ),
        pokemonFinderInput: document.querySelector("#pokemon-finder-query"),
        pokemonFinderOutput: document.querySelector("#pokemon-finder-response"),
      },
      init: () => {
        App.htmlElements.pokemonFinderForm.addEventListener(
          "submit",
          App.handlers.pokemonFinderFormOnSubmit
        );
      },
      handlers: {
        pokemonFinderFormOnSubmit: async (e) => {
          e.preventDefault();
  
          const query = App.htmlElements.pokemonFinderInput.value;
          const searchType = App.htmlElements.pokemonFinderSearchType.value;
          console.log({ searchType });
          try {
            const response = await Utils.getPokemon({
              query,
              searchType,
            });
            const renderedTemplate = App.templates.render({
              searchType,
              response,
            });
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



        pokemonCard: ({ id, sprites, types, name, weight, height, abilities, species }) => {
          
          return `<div class="poke-card"><h1>${name} (${id})</h1>
          <div class="img-container">
          <img class="poke-img" src="${sprites.front_default}"></img>
          <img class="poke-img-back" src="${sprites.back_default}"></img>
          </div>
          <div class="poke-types">Types: ${types[0].type.name}   ${types[1]? types[1].type.name : ''} </div>
          <li>Weight: ${weight/10} kgs</li>
          <li>Height: ${height/10} mts</li>
          <li>Abilities: ${abilities[0].ability.name}, ${abilities[1]? abilities[1].ability.name : ''}</li>
          </div></div> 
          <button class="btn-clear" onclick="history.go(0);">Clear</button>`;
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
    };
    App.init();
  })(document.Utils);