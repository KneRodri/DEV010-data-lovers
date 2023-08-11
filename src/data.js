// estas funciones son de ejemplo



export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


//Funcion busqueda de nombre o numero

export function busquedaNomNum (data, name, num){
  return data.pokemon.find(pokemon => {
    return pokemon.name.toLowerCase() === name.toLowerCase() || pokemon.num === num;
  
  });

}


export function filtrarPorTipo (data, condition){
  return data.pokemon.filter(pokemon => {
    return condition(pokemon); 
  });
}



