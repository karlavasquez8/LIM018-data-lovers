import { createCard, ordenarAz,ordenarZa,filters, filtersItems, createButton} from './data.js';
import data from './data/pokemon/pokemon.js';

//Agregamos tarjetas de Pokemones
const container = document.querySelector('.container-pokemon');

const myPokemons = data.pokemon.map((pokemon) => createCard(pokemon) );

container.innerHTML = myPokemons.join("");
//se agrega el join para convertirlo  un string, porque la iteracion del map devuelve un array

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

// creando eventos para filtrar

const filter = document.querySelector('.btn-filter');
filter.addEventListener("click",addModalFilter)

function addModalFilter(){
    const { types,resistant:resistants, weaknesses } = filtersItems.getFiltersItems(data.pokemon);

    const containerOptionType = document.querySelector(".type");
    const myFilterTypes = types.map((type) => createButton(type) );
    containerOptionType.innerHTML = myFilterTypes.join("");

    const containerOptionResistant =document.querySelector(".resistant");
    const myFiltersResistant = resistants.map((resistant) => createButton(resistant) );
    containerOptionResistant.innerHTML=myFiltersResistant.join("");

    const containerOptionWeaknesses =  document.querySelector(".weaknesses")
    const myFilterWeaknesse = weaknesses.map((weaknesses)=> createButton(weaknesses));
    containerOptionWeaknesses.innerHTML= myFilterWeaknesse.join("");

    const openModal = document.querySelector(".filter-sheet");
    openModal.classList.add("show-filter");
}


const btnCloseFilter = document.querySelector('.btn-close-filter');
btnCloseFilter.addEventListener("click",closeModal)

function closeModal (){
    const btnClose = document.querySelector(".filter-sheet");
    btnClose.classList.remove("show-filter")
}




//se utiliza el objeto getFiltersItems que viene desde el data exportado con el getPokemonType que 
//es una funcion que tiene como argumento el data.pokemon ya que se esta trayendo ess datos del archivo pokemon.js
 //console.log (filtersItems.getFiltersItems(data.pokemon)) 

// const buttonFilter= document.querySelector(".btn-meniFil");
// buttonFilter.addEventListener("click",pokemonType)

// }

// carType.appendChild(createCarType);
