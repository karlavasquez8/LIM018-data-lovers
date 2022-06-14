import { createCard } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
//import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//mostrando los pokemones 
const myPokemons = data.pokemon.map((pokemon)=> createCard(pokemon));

const container = document.querySelector(".container-pokemon");

container.innerHTML = myPokemons.join("");

//filtrando de forma ascendente. de A a la Z
const nombreAz = data.pokemon;

nombreAz.sort((a, b) =>{

    if( a.name < b.name){
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
        return 0;
  });

  console.log(nombreAz);
// tambien lo podemos hacer de esta forma return a - b
//console.log(nombreAz);

const nombreZa = nombreAz;

 nombreZa.sort((a, b) =>{
    if( a.name > b.name){
        return -1;
    }
    if ( a.name < b.nombre){
        return 1;
    }
        return 0;
});

  console.log(nombreZa);




// ahora filtramos de forma decendente Z a la A



// tambien lo podriamos hacer return b - a;

//console.log(createCard);


