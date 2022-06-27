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
 const pokemonAz = pokemonAsc.sort((a, b)=>{
  if(a.name < b.name){
     return -1;
  }
  if (a.name > b.name){
    return 1;
  }
     return 0;
 }
 );

 const pokemonAzCards = pokemonAz.map((nombreAz)=>createCard(nombreAz));
 return pokemonAzCards.join('');
}
// ordenando de forma alfabetica de la Z a la A.

export function ordenarZa(pokemonsDes){
 const pokemonZa = pokemonsDes.sort((a, b)=>{
      if(a.name > b.name){
          return -1;
       }
       if(a.name < b.name){
          return 1;
       }
          return 0;
    }
    );
  const pokemonZaCards = pokemonZa.map((nombreZa)=>createCard(nombreZa));
  return pokemonZaCards.join('');
}

// botones del filtrado en modal
export const createButton = (filters, group)=>{
  return `
  <button class="filter-option" data-group="${group}">${filters}</button>
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
  return (numTypes * 100 / numPokemons).toFixed(2);
}
//estaa funcinon me retorna un numero)






//funcion para el buscador

export function filtrarSearch(pokemons, name){
 return pokemons.filter(pokemon =>pokemon.name.startsWith(name));
}









