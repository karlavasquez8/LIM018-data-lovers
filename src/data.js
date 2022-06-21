// estas funciones son de ejemplo
export const createCard = (pokemon) => {
  const {img, name, num, type} = pokemon;
       return `
     <section class="info-card-pokemon"> 
        <div class="img-pokemon">
         <img src="${img}">
       </div>
       <div class="data-pokemon">   
         <span>${name}</span>
         <span>${num}</span>
         <span>Tipo: ${type.join(', ')}</span>
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






