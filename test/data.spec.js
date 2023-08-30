import { busquedaNomNum, filtrarPorTipo, sortData } from '../src/data.js';

//FUNCION BusquedaNomNum
describe('busquedaNomNum', () => {
  it('is a function', () => {
    expect(typeof busquedaNomNum).toBe('function');
  });

  it('throws an error when search input is empty', () => {
    expect(() => {
      busquedaNomNum(""); 
    }).toThrow(TypeError);
  });
  
  it('throws an error when search input is greater than 251', () => {
    expect(() => {
      busquedaNomNum(252);
    }).toThrowError(TypeError);
  });

  it('should return true if the name or number matches', () => {
    const data = {
      pokemon: [
        { name: 'Pikachu', num: '025' },
        { name: 'Charizard', num: '006' },
        { name: 'Bulbasaur', num: '001' }
      ]
    };
    
    const result = busquedaNomNum(data, 'pikachu'); // Llamando a la función bajo prueba
    const result1 = busquedaNomNum(data, 'charizard');
    const result2 = busquedaNomNum(data, 'pikachu');
    expect(result).toBeTruthy(); // Realizando la afirmación de la prueba
    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
  
  //FUNCION FiltraPorTipo
  describe('filtrarPorTipo', () => {
    it('is a function', () => {
      expect(typeof filtrarPorTipo).toBe('function');
    });
    it('should return the pokemons with that type',() => {
      const data = {
        pokemon: [
          { name: 'Pikachu', type:'electric' },
          { name: 'Charizard', type:'fire' },
          { name: 'Bulbasaur', type:('grass','posion') }
        ]
      
      };
      const filtrarPokemon = filtrarPorTipo(data, (pokemon) => {
        return pokemon.type.includes('electric')
      });
      expect(filtrarPokemon.length).toBe(1);
    });
  }); 


  //FUNCION sortData
  describe('sortData', () => {
    it('is a function', () => {
      expect(typeof sortData).toBe('function');
    })
  });
  
  it('should sort the data in ascending order',() => {
    const unSortedData = {
      pokemon: [
        {name: 'Pikachu'},
        {name: 'Charizard'},
        {name: 'Bulbasaur'}
      ]
    };
    const sortedData = sortData(unSortedData, 'name', 'asc');
    expect(sortedData[0].name).toBe('Bulbasaur');
    expect(sortedData[1].name).toBe('Charizard');
    expect(sortedData[2].name).toBe('Pikachu');
  });

  it('should sort the data in descending order',() => {
    const unSortedData = {
      pokemon: [
        {name: 'Pikachu'},
        {name: 'Charizard'},
        {name: 'Bulbasaur'}
      ]
    };
    const sortedData = sortData(unSortedData, 'name', 'desc');
    expect(sortedData[0].name).toBe('Pikachu');
    expect(sortedData[1].name).toBe('Charizard');
    expect(sortedData[2].name).toBe('Bulbasaur');
  
  });
  
});
