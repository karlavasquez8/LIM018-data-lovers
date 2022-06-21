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
}


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






