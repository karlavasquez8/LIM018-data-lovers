import { createCard, ordenarAz, ordenarZa } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
//import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//mostrando los pokemones 
const myPokemons = data.pokemon.map((pokemon)=> createCard(pokemon));

const container = document.querySelector(".container-pokemon");

container.innerHTML = myPokemons.join("");

 //ordenando  de forma ascendente. de A a la Z
const pokemonAsc = [...data.pokemon]

document.querySelector(".btn-sort-asc").addEventListener("click", () => {
    container.innerHTML = ordenarAz(pokemonAsc);
});


//ordenando en forma  decendiente de Z a la A

  const pokemonsDes = [...data.pokemon]
  
  document.querySelector(".btn-sort-desc").addEventListener("click", () => {
    container.innerHTML = ordenarZa(pokemonsDes)
  });


 
 
    