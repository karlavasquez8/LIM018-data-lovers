import { createCard, anotherExample } from '../src/data.js';


describe('createCard', () => {
  it('is a function', () => {
    expect(typeof createCard).toBe('function');
  });

  it('returns string', () => {
    const pokemon = [{
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"},
      "type":[
          "grass",
          "poison"
      ]}]
    expect(createCard(pokemon)).toBe(
    `<section class="info-card-pokemon"> 
      <div class="img-pokemon">
       <img src="https://www.serebii.net/pokemongo/pokemon/001.png">
     </div>
     <div class="data-pokemon">   
       <span>"bulbasaur"</span>
       <span>"001"</span>
       <span>Tipo:"type":["grass","poison"]
       </span>
     </div>
   </section>`
    );
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
