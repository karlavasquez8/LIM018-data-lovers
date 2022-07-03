// datos de la tarjeta
export const createCard = (pokemon) => {
  const {img, name, num, type,weaknesses,resistant } = pokemon;
  return `
      <section class="info-card-pokemon"> 
      <div class="img-pokemon same-style">
        <img class="pokemon" src="${img}" loading="lazy">
      </div>
      <div class="data-pokemon">
        <span class="name-pokemon description-pokemon">${name}</span>
        <span class="description-pokemon">${num}</span>
        <span class="description-pokemon">Tipo: ${type.join(', ')} </span>
        <span class="description-pokemon">Resistencia: ${resistant.join(', ')} </span>
        <span class="description-pokemon">Debilidad: ${weaknesses.join(', ')} </span>
      </div>
    </section>
  `;
};
export function sortBy(pokemons, order){
  const sortPokemons = pokemons.sort((a, b)=>{
    const conditionalOne = order == "desc"? a.name > b.name : a.name < b.name;
    const conditionalTwo = order == "desc"? a.name < b.name : a.name > b.name;
    if(conditionalOne){
      return -1;
    }
    if (conditionalTwo) {
      return 1;
    }
  return 0;
  }
 );
 return sortPokemons;
}

// botones del filtrado en modal
export const createButton = (filters, group)=>{
  return `
  <button class="filter-option font-color" data-group="${group}">${filters}</button>
  `;
}

//filtrar datos por tipos, generacion, resistencia, debilidades y huevos

  const filterType = (pokemons, type) => {
    return pokemons.filter((pokemon) => pokemon.type.includes(type))
  };

 //const filterGeneration= (pokemons, generation) => {
   // return pokemons.filter((pokemon) => pokemon.generation == generation)
  //};

  const filterResistant= (pokemons, resistant) => {
    return pokemons.filter((pokemon) => pokemon.resistant.includes(resistant))
  };

  const filterWeaknesses= (pokemons, weaknesses) => {
    return pokemons.filter((pokemon) => pokemon.weaknesses.includes(weaknesses))
  };

  //const filterEggs= (pokemons, eggs) => {
    //return pokemons.filter((pokemon) => pokemon.eggs == eggs)
  //};

  const getFiltersItems = (pokemons) =>{
    const items = {
      types:[],
      resistant:[],
      weaknesses:[],
    }
    return pokemons.reduce((prev,pokemon)=>{
      prev.types.push(...pokemon.type)
      prev.resistant.push(...pokemon.resistant)
      prev.weaknesses.push(...pokemon.weaknesses)

      return {
        types:Array.from(new Set(prev.types)),
        resistant:Array.from(new Set(prev.resistant)),
        weaknesses:Array.from(new Set(prev.weaknesses)),
      }
    },items)
  }
  
export const filters = {
  filterType,
  //filterGeneration,
  filterResistant,
  filterWeaknesses,
  //filterEggs
}
export const filtersItems = {
  getFiltersItems,
}

// porcentaje de pokemones

export function computeStats (numPokemons, numTypes){
   return parseFloat((numTypes * 100 / numPokemons).toFixed(2));
}
//esta funcion me retorna un numero pero con el toFixed le convierte en un string)

//funcion para el buscador

export function filtrarSearch(pokemons, name){
 return pokemons.filter(pokemon =>pokemon.name.startsWith(name));
}







