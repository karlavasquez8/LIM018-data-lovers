import { createCard, ordenarAz,createButton} from '../src/data.js';
//import data from '../src/data/pokemon/pokemon.js';

describe('createCard', () => {
  it('is a function', () => {
    expect(typeof createCard).toBe('function');
  });

  it('returns string', () => {
    const pokemon = {
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
      ],
      "resistant": [
        "water",
        "electric",
        "grass",
        "fighting",
        "fairy"
      ],
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]}
    expect(createCard(pokemon)).toMatchSnapshot()
  
  });
});

describe('ordenarAz', () => {

  it('is a function', () => {
    expect(typeof ordenarAz).toBe('function');
  });

  it('returns string', () => {
   expect(ordenarAz("pikachu")).toContain("pikachu");
  });
});

describe('createButton', () => {
  it('is a function', () => {
    expect(typeof createButton).toBe('function');
  });

  it('returns string', () => {
    expect(createButton("grass","type")).toContain("grass");
    expect(createButton("grass","type")).toContain("type");
  });
});
