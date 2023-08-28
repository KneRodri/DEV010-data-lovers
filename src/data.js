
//Funcion busqueda de nombre o numero

export function busquedaNomNum (data, nameOrNum){
  return data.pokemon.find(pokemon => {
    return pokemon.name.toLowerCase() === nameOrNum.toLowerCase() || pokemon.num === nameOrNum;
  });

}

export function filtrarPorTipo (data, condition){
  return data.pokemon.filter(pokemon => {
    return condition (pokemon); 
  });
}

export function sortData(data, sortBy, sortOrder) {
  const sortedData = [...data.pokemon]; //Clonar el arreglo no modifica el original

  sortedData.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (sortOrder === 'asc') {
      return valueA.localeCompare(valueB);
    } if (sortOrder === 'desc') {
      return valueB.localeCompare(valueA);
    }
  

  });
  
  return sortedData;
}






