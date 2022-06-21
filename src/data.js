// datos de la tarjeta
export const createCard = (pokemon) => {
  const {img, name, num, type,weaknesses,resistant } = pokemon;
  return `
      <section class="info-card-pokemon"> 
      <div class="img-pokemon">
        <img class="pokemon" src="${img}" loading="lazy">
      </div>
      <div class="data-pokemon">
        <span>${name}</span>
        <span>${num}</span>
        <span>Tipo: ${type.join(', ')} </span>
        <span>Resistencia: ${resistant.join(', ')} </span>
        <span>Debilidad: ${weaknesses.join(', ')} </span>
      </div>
    </section>
  `;
};

// ordenando alfabeticamente de la A a la Z.
export function ordenarAz(pokemonAsc){
  pokemonAsc.sort((a, b)=>{
  if(a.name < b.name){
     return -1;
  }
  if (a.name > b.name){
    return 1;
  }
     return 0;
 }
 );
 const pokemonAz = pokemonAsc.map((nombreAz)=>createCard(nombreAz));
 return pokemonAz.join('');
  
// ordenando de forma alfabetica de la Z a la A.

export function ordenarZa(pokemonsDes){
  pokemonsDes.sort((a, b)=>{
      if(a.name > b.name){
          return -1;
       }
       if(a.name < b.name){
          return 1;
       }
          return 0;
    }
    );
  const pokemonZa = pokemonsDes.map((nombreZa)=>createCard(nombreZa));
  return pokemonZa.join('');
}

// botones del filtrado en modal
export const createButton = (filters)=>{
  return `
  <button class="filter-option">${filters} </button>
  `;
}

//filtrar datos por tipos, generacion, resistencia, debilidades y huevos

  const filterType = (pokemons, type) => {
    return pokemons.filter((pokemon) => pokemon.type === type)
  }

 //const filterGeneration= (pokemons, generation) => {
   // return pokemons.filter((pokemon) => pokemon.generation == generation)
  //};

  const filterResistant= (pokemons, resistant) => {
    return pokemons.filter((pokemon) => pokemon.resistant == resistant)
  };

  const filterWeaknesses= (pokemons, weaknesses) => {
    return pokemons.filter((pokemon) => pokemon.weaknesses == weaknesses)
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


