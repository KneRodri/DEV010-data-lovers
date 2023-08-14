
export function busquedaNomNum(data, nameOrNum) {
  return data.pokemon.find(pokemon => {
    return pokemon.name.toLowerCase() === nameOrNum.toLowerCase() || pokemon.num === nameOrNum;
  });
}

export function filtrarPorTipo (data, condition) {
  return data.pokemon.filter(pokemon => {
    return condition(pokemon);
  });
}



