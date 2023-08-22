import { busquedaNomNum, filtrarPorTipo } from '../src/data.js';


describe('busquedaNomNum', () => {
  it('is a function', () => {
    expect(typeof busquedaNomNum).toBe('function');
  });

  it('throws an error when search input is empty', () => {
    expect(() => {
      busquedaNomNum("");
    }).toThrow(TypeError);
  });

  it('throws an error when search input is greater than 251',() => {
    expect(() => {
      busquedaNomNum(252);
    }).toThrowError(TypeError);
  });

  it('should return true if the name or number matches', () => {
    const data = {
      pokemon: [
        { name: 'Pikachu', num: '025'},
        { name: 'Charizard', num: '006'},
        { name: 'Bulbasaur', num: '001'},
      ]
    };

    const result = busquedaNomNum(data, 'pikachu'); //Llamando a la función bajo prueba

    expect(result).toBeTruthy(); //Realizando la afirmación de la prueba
  });

  
  describe('filtrarPorTipo', () => {
    it('is a function', () => {
      expect(typeof filtrarPorTipo).toBe('function');
    });
  });
});