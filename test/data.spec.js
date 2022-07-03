import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { createCard,createButton, computeStats, sortByAz} from '../src/data.js';
//import data from '../src/data/pokemon/pokemon.js';

describe('createCard', () => {
  it('should by a function', () => {
    expect(typeof createCard).toBe('function');
  });

  it('should return a pokemon card', () => {
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
describe('sortByAz',() =>{
  it('should by a function',() =>{
    expect(typeof sortByAz).toBe('function');
  });

  it('')
})

describe('createButton', () => {
  it('should by a function', () => {
    expect(typeof createButton).toBe('function');
  });

  it('should returns name Pokemon and group', () => {
    expect(createButton("grass","type")).toContain("grass");
    expect(createButton("grass","type")).toContain("type");
  });
});

describe('computeStats',() => {
  it('should by a function',() => {
    expect (typeof computeStats).toBe('function');
  });

  it('should return a calculation',()=>{
    expect(computeStats(251,17)).toBe(6.77)
  })
})
