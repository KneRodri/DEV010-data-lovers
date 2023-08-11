
import data from './data/pokemon/pokemon.js';
import {busquedaNomNum, filtrarPorTipo} from './data.js';



const rootElement = document.getElementById("root");
function pokemonCards(pokemonArray){
  //const pokemonArray = data.pokemon;//data.pokemon accede a la matriz del objeto pokemon y se en la var pokemon Array
  pokemonArray.forEach(pokemonInfo=>{
    //Crear elementos HTML para guardar la informacion de cada pokemon
    const pokemonCard = document.createElement('div'); //HTML
    pokemonCard.classList.add('pokemon-container'); //CSS

    const pokemonImg = document.createElement('img'); //HTML
    pokemonImg.classList.add('pokemon-img'); //CSS
    pokemonImg.src = pokemonInfo.img;
    pokemonCard.appendChild(pokemonImg);

    const pokemonName = document.createElement('h3');//HTML
    pokemonName.classList.add('pokemon-name'); //CSS
    pokemonName.textContent = pokemonInfo.name;
    pokemonCard.appendChild(pokemonName);

    const pokemonNumber = document.createElement('p');
    pokemonNumber.classList.add('pokemon-number');
    pokemonNumber.textContent = `#${pokemonInfo.num}`;
    pokemonCard.appendChild(pokemonNumber);
    
    rootElement.appendChild(pokemonCard);
    console.log(pokemonCard);
  });
}
//document.addEventListener('DOMContentLoaded', pokemonCards);
document.addEventListener('DOMContentLoaded', () => {
  pokemonCards(data.pokemon);
});

const inputElement = document.getElementById("input");
const btnBuscar = document.getElementById("btn-buscar");

btnBuscar.addEventListener("click", () => {
  const recibeNomNum = inputElement.value;

  const busquedaInfo = busquedaNomNum(data, recibeNomNum);
  //return pokemon.name.includes(recibeNomNum);
  rootElement.innerHTML = "";
  if (busquedaInfo) {
    pokemonCards([busquedaInfo]);
  } else {
    console.error("El Pokémon que buscaste no está disponible");
  }
});
//else{ TypeError("El pokemon que buscaste no esta disponible")
  

const btnType = document.getElementById("btn-buscarType");
const tipoDeSeleccion = document.getElementById("types");

btnType.addEventListener("click", () => {
  //const selectType = "";
  const seleccion = tipoDeSeleccion.value;
  const filtrarPokemon = filtrarPorTipo(data, (pokemon) => {
    return pokemon.type.includes(seleccion);
  });
  rootElement.innerHTML = "";
  pokemonCards(filtrarPokemon);
});


/*const inputElement = document.getElementById("input");
  const btnBuscar = document.getElementById("btn-buscar");

  const recibeNomNum = inputElement.value;

  if(recibeNomNum === "string")
  btnBuscar.addEventListener("click", )*/

  /* const partes = recibeNomNum.split(" ");
  let name = "";
  let num = "";
  if (partes.length === 1) {
    name = partes[0];
  }
  else if (partes.length === 2){
    num = partes[0];
    name = partes[1];
  }
  else {
    console.error("Formato incorrecto. Ingresa nombre o número de Pokémon.");
    return;
  }*/