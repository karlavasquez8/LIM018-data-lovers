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


// ordenando de forma alfabetica 




export const anotherExample = () => {
  return `OMG`;
};




console.log();




