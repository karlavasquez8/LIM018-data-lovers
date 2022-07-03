import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { createCard,createButton, computeStats, sortBy,filters, filtersItems,filtrarSearch} from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

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
describe('sortBy',() => {
  it('should by a function',() => {
    expect(typeof sortBy).toBe('function');
  });

  it('should return array of pokemon',() => {
    const pokemons = [
      {"name": "bulbasaur"},
      {"name": "charmander"},
      {"name": "charmander"}
    ]
    expect(sortBy(pokemons,'asc')).toEqual(
      [
        {"name": "bulbasaur"},
        {"name": "charmander"},
        {"name": "charmander"}
      ])
    expect(sortBy(pokemons,'desc')).toEqual(
      [
        {"name": "charmander"},
        {"name": "charmander"},
        {"name": "bulbasaur"}
        
      ])
  })
})

describe('filters',() => {
  const caterpie = data.pokemon[9];
  const ninetales = data.pokemon[37];
  const rattata = data.pokemon[18];

  it('should by a function filterType', () => {
    expect(typeof filters.filterType).toBe('function');
  });

  it('should returns pokemons filters type',() => {
    expect (filters.filterType([ninetales,caterpie,rattata],'normal')).toEqual([rattata])
    expect (filters.filterType([ninetales,caterpie,rattata],'bug')).toEqual([caterpie])
    expect (filters.filterType([ninetales,caterpie,rattata],'fire')).toEqual([ninetales])
  });

  it('should returns pokemons filters resistant',() => {
   expect (filters.filterResistant([ninetales,caterpie,rattata],'ghost')).toEqual([rattata])
   expect (filters.filterResistant([ninetales,caterpie,rattata],'grass')).toEqual([ninetales,caterpie])
   expect (filters.filterResistant([ninetales,caterpie,rattata],'fire')).toEqual([ninetales])
  });
  it('should returns pokemons filters weaknesses',() => {
    expect (filters.filterWeaknesses([ninetales,caterpie,rattata],'water')).toEqual([ninetales])
    expect (filters.filterWeaknesses([ninetales,caterpie,rattata],'fighting')).toEqual([rattata])
    expect (filters.filterWeaknesses([ninetales,caterpie,rattata],'fire')).toEqual([caterpie])
   });
});

describe('filterItems',() => {
  const caterpie = data.pokemon[9];
  const ninetales = data.pokemon[37];
  const rattata = data.pokemon[18];

  it('should by a function', () => {
    expect(typeof filtersItems.getFiltersItems).toBe('function');
  });
  it( 'should return pokemon card',()=> {
    expect(filtersItems.getFiltersItems([ninetales,caterpie,rattata])).toEqual({
      types:['fire','bug','normal'],
      resistant:['fire','grass','ice','bug','steel','fighting','ground','ghost'],
      weaknesses:['water','ground', 'rock','fire','flying','fighting',]
    })
  });
});

describe('createButton', () => {
  it('should by a function', () => {
    expect(typeof createButton).toBe('function');
  });

  it('should return name Pokemon and group', () => {
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

describe('filtrarSearch',() => {
  it('should by a function',() => {
    expect (typeof filtrarSearch).toBe('function');
  })
  it ('should return seach pokemon for name',() => {
    const pokemons = [
      {"name": "bulbasaur"},
      {"name": "charmander"},
      {"name":"rattata"}
    ]
    expect(filtrarSearch(pokemons,"bul")).toEqual([{"name":'bulbasaur'}])
  });
})