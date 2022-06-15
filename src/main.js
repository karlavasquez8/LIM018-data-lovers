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

//ordenando  de forma ascendente. de A a la Z
const nombreAz = data.pokemon;
document.querySelector(".btn-sort").addEventListener("click", ordenarAz);

nombreAz.sort((a, b)=>{
     if(a.name < b.name){
        return -1;
     }
     if (a.name > b.name){
       return 1;
     }
        return 0;
    }
);

function ordenarAz(){
    console.log(nombreAz);
};

  // ordenamos en for decendiente de Z a la A.





