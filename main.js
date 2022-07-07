import { createCard, sortBy,filters, filtersItems, createButton,computeStats, filtrarSearch} from './data.js';
import data from './data/pokemon/pokemon.js';

//se itera el array y por cada pokemon se crea una tarjeta
function fillPokemons(pokemons){
    let cardsPokemons = pokemons.map((pokemon) => createCard(pokemon))
    container.innerHTML =cardsPokemons.join("");
}
//Agregamos tarjetas al DOM
const container = document.querySelector('.container-pokemon');
fillPokemons(data.pokemon)
//se agrega el join para convertirlo  un string, porque la iteracion del map devuelve un array

 //ordenando pokemones
let pokemons = [...data.pokemon]

document.querySelector(".btn-sort-asc").addEventListener("click", () => {
    const pokemonSortAsc = sortBy(pokemons, 'asc');
    fillPokemons(pokemonSortAsc);
});
  
document.querySelector(".btn-sort-desc").addEventListener("click", () => {
    const pokemonSortDes = sortBy(pokemons, 'desc');
    fillPokemons(pokemonSortDes);
});

// creando eventos para agregar la descripcion a los botones del modal de filtrado, ya sea por tipo, resistencia o debilidad

//descativando y activando scroll
function blockScroll() {
    document.querySelector(".wallpaper").classList.add("hidden-scroll")
}
function activateScroll() {
    document.querySelector(".wallpaper").classList.remove("hidden-scroll")
}
function hiddenMessage() {
    document.querySelector(".message").classList.remove("show-message")
}
// para optimizar ya que el codigo se repite para el filtrado de tipo, resistencia y debilidad
function fillFilters(listFilter, selector, filterType) {
    const myFilter = listFilter.map((textFilter) => createButton(textFilter, filterType) );
    const containerOption = document.querySelector(selector);
    containerOption.innerHTML = myFilter.join("");
}
// boton de filtrar
const filter = document.querySelector('.btn-filter');
filter.addEventListener("click",addModalFilter);

function addModalFilter(){
    blockScroll();

    const { types, resistant:resistants, weaknesses } = filtersItems.getFiltersItems(data.pokemon);

    fillFilters(types, ".type", "type");
    fillFilters(resistants, ".resistant", "resistant");
    fillFilters(weaknesses, ".weaknesses", "weaknesses");

    const openModal = document.querySelector(".filter-sheet");
    openModal.classList.add("show-filter");
}
//agregando el filtrado mediante propagacion de eventos
const divFilter= document.querySelector("#filter-pokemons");

divFilter.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filter-option")){

        let pokemonsFilters;  

        let dataGroup= event.target.getAttribute("data-group");
        if(dataGroup == "type"){  
            pokemonsFilters = filters.filterType(data.pokemon, event.target.innerText);
        }
        if(dataGroup == "resistant"){
            pokemonsFilters = filters.filterResistant(data.pokemon, event.target.innerText);
        }
        if(dataGroup == "weaknesses"){
            pokemonsFilters = filters.filterWeaknesses(data.pokemon, event.target.innerText);   
        }
        fillPokemons(pokemonsFilters);

        //se agrega la linea de codigo para mostrar el mensaje de porcentajes cuando se haga click
        const messagePorcent= document.querySelector(".message");
        let porcentage = computeStats(data.pokemon.length,pokemonsFilters.length)
        messagePorcent.innerText=`EN EL MUNDO POKEMON EL ${porcentage}% DE TODOS LOS POKEMONES SON DE ${dataGroup.toUpperCase()} ${event.target.innerText.toUpperCase()}!!`;
        messagePorcent.classList.add("show-message");
    }
});

//cerrar modal de filtrado 
const closeFilter = document.querySelector(".filter-sheet");
closeFilter.addEventListener("click",closeModal)

function closeModal (){
    activateScroll();
    const close = document.querySelector(".filter-sheet");
    close.classList.remove("show-filter")
}
//Creando buscador

const pokemonSearch = [...data.pokemon];
// copiamos la data a una variable para poder manipularla en este caso pokemonSearch

const textUser = document.querySelector("#btn-search");
textUser.addEventListener("keyup", (event) => {
    hiddenMessage();
    
    let result = filtrarSearch(pokemonSearch, event.target.value);

    fillPokemons(result);

    if(result.length == 0){
        return  container.innerHTML = `
        <section class="error-message same-style"> 
            <div class="message-pikachu-sad">
                <span> Pokemon no encontrado...!!</span>
            </div>
            <div class="same-style">
                <img class="img-pikachu-message" src="./img/pikachu-sad.png" alt="Pikachu Llorando" loading="lazy">
            </div>
        </section>
        `
    }
});






