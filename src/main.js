
import data from './data/pokemon/pokemon.js';
import {busquedaNomNum, filtrarPorTipo} from './data.js';

const rootElement = document.getElementById("root");

function pokemonCards(pokemonArray){

  pokemonArray.forEach(pokemonInfo =>{
    
    const pokemonCard = document.createElement('div'); //Crear elementos HTML para guardar la informacion de cada pokemon
    pokemonCard.classList.add('pokemon-container'); //CSS

    const pokemonImg = document.createElement('img'); //HTML
    pokemonImg.classList.add('pokemon-img'); //CSS
    pokemonImg.src = pokemonInfo.img;
    pokemonCard.appendChild(pokemonImg);

    const pokemonName = document.createElement('h3');//HTML
    pokemonName.classList.add('pokemon-name');
    pokemonName.textContent = pokemonInfo.name;
    pokemonCard.appendChild(pokemonName);

    const pokemonNumber = document.createElement('p');
    pokemonNumber.classList.add('pokemon-number');
    pokemonNumber.textContent = `#${pokemonInfo.num}`;
    pokemonCard.appendChild(pokemonNumber);
    
    rootElement.appendChild(pokemonCard);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  pokemonCards(data.pokemon);
});

const inputElement = document.getElementById("input");
const btnBuscar =  document.getElementById("btn-buscar");

btnBuscar.addEventListener("click", () => {
  const recibeNomNum = inputElement.value;
  const busquedaInfo = busquedaNomNum(data, recibeNomNum);
  rootElement.innerHTML = "";

  if (busquedaInfo) {
    pokemonCards([busquedaInfo]);
  } else {
    console.error("El Pokemón que buscas no está disponible");
  }
});

const btnType = document.getElementById("btn-buscarType");
const tipoDeSeleccion = document.getElementById("types");

btnType.addEventListener("click", () => {
  const seleccion = tipoDeSeleccion.value;
  const filtrarPokemon = filtrarPorTipo(data, (pokemon) => {
    return pokemon.type.includes(seleccion);
  });
  rootElement.innerHTML = "";
  pokemonCards(filtrarPokemon);
});