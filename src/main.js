import { createCard, ordenarAz,ordenarZa,filters, filtersItems, createButton,computeStats} from './data.js';
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

// creando eventos para agregar la descripcion a los botones del modal de filtrado, ya sea por tipo, resistencia o debilidad

const filter = document.querySelector('.btn-filter');
filter.addEventListener("click",addModalFilter)

function addModalFilter(){
    const { types,resistant:resistants, weaknesses } = filtersItems.getFiltersItems(data.pokemon);

    const containerOptionType = document.querySelector(".type");
    const myFilterTypes = types.map((type) => createButton(type, "type") );
    containerOptionType.innerHTML = myFilterTypes.join("");
  
    const containerOptionResistant =document.querySelector(".resistant");
    const myFiltersResistant = resistants.map((resistant) => createButton(resistant, "resistant") );
    containerOptionResistant.innerHTML=myFiltersResistant.join("");

    const containerOptionWeaknesses =  document.querySelector(".weaknesses")
    const myFilterWeaknesse = weaknesses.map((weaknesses)=> createButton(weaknesses, "weaknesses"));
    containerOptionWeaknesses.innerHTML= myFilterWeaknesse.join("");

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
        };
        if(dataGroup == "resistant"){
            pokemonsFilters = filters.filterResistant(data.pokemon, event.target.innerText);
        };
        if(dataGroup == "weaknesses"){
            pokemonsFilters = filters.filterWeaknesses(data.pokemon, event.target.innerText);   
        }
        let containerFilter = pokemonsFilters.map((pokemon) => createCard(pokemon))
        container.innerHTML =containerFilter.join("");

        //se agrega la linea de codigo para mostrar el mensaje de porcentajes cuando se haga click
        const messagePorcent= document.querySelector(".message");
        let porcentage = computeStats(data.pokemon.length,pokemonsFilters.length)
        messagePorcent.innerText=`EN EL MUNDO POKEMON EL ${porcentage}% DE TODOS LOS POKEMONES SON DE ${dataGroup.toUpperCase()} ${event.target.innerText.toUpperCase()}!!`;
        messagePorcent.classList.add("show-message");

    };

});
//cerrar modal de filtrado
const btnCloseFilter = document.querySelector('.btn-close-filter');
btnCloseFilter.addEventListener("click",closeModal)

function closeModal (){
    const btnClose = document.querySelector(".filter-sheet");
    btnClose.classList.remove("show-filter")
}

// calcular porcentajes de pokemones



//se utiliza el objeto getFiltersItems que viene desde el data exportado con el getPokemonType que 
//es una funcion que tiene como argumento el data.pokemon ya que se esta trayendo ess datos del archivo pokemon.js




