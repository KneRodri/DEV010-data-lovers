import data from './data/pokemon/pokemon.js';
import {busquedaNomNum, filtrarPorTipo, sortData} from './data.js';

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

    pokemonCard.addEventListener('click', async () => { //asincrónica con await
      const pokemonDetails = await busquedaNomNum(data, pokemonInfo.num);
      cardDetalladas(pokemonDetails);
    });
    rootElement.appendChild(pokemonCard);
  });  
}

document.addEventListener('DOMContentLoaded', () => {
  pokemonCards(data.pokemon);
});

function cardDetalladas(pokemonInfo){

  const modal = document.createElement("div");
  modal.classList.add('pokemon-modal');

  const contenidoModal = `
      <h2>${pokemonInfo.name}</h2>
      <p>Número: ${pokemonInfo.num}</p>
      <p>Tipo: ${pokemonInfo.type.join(', ')}</p>
      <p>
    `;
  const ventanaEmerge = window.open('', '_blank', 'width=200,height=300');//una nueva ventana,se abre en una pestaña.
  ventanaEmerge.document.write(`<html><body>${contenidoModal}</body></html>`);
  ventanaEmerge.document.close();
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
  } 
  if (!isNaN(recibeNomNum)){
    const num = parseInt(recibeNomNum);
    if (num < 1 || num > 251){ //verifica si el número está en el rango
      alert("Ingrese un número válido del 1 al 251");
    } else { throw new TypeError("Error"); //revisar
    }
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

const btnOrdenarNombre = document.getElementById('btn-ordenar-nombre');
btnOrdenarNombre.addEventListener('click', () => {
  const pokemonOrdenados = sortData(data, 'name', 'asc');
  rootElement.innerHTML = '';
  pokemonCards(pokemonOrdenados);
});

const btnOrdenarNumero = document.getElementById('btn-ordenar-numero');
btnOrdenarNumero.addEventListener('click', () => {
  const pokemonesOrdenados = sortData(data, 'num', 'asc',);
  rootElement.innerHTML = '';
  pokemonCards(pokemonesOrdenados);
});
