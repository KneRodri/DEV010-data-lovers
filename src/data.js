// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
import data from './data/pokemon/pokemon.js';

//Funcion busqueda de nombre o numero

function busquedaNomNum (){
  const inputElement = document.getElementById("input");
  const btnBuscar = document.getElementById("btn-buscar");

  const recibeNomNum = inputElement.value;

  if(recibeNomNum === "string")

}

btnBuscar.addEventListener("click", )








//Llama elementos del DOM
/*const elementosSelect = document.getElementById("types");
const btnBuscar = document.getElementById("btn-buscarType");
const pokemonList = data.pokemon.pokemon

//Funcion de filtrado
function filtrarPorTipo(pokemonType) {
  return pokemonList.filter(pokemon => pokemon.type.includes(pokemonType));

}

//Agregar un evento al boton de busqueda 

btnBuscar.addEventListener("click", () => {
  const tipoSeleccionado = elementosSelect.value;
  const pokemonesFiltrados = filtrarPorTipo(tipoSeleccionado);
  actualizarTarjetas(pokemonesFiltrados)

  function actualizarTarjetas (pokemones){
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

  }
})*/

