import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example, data);

const rootElement = document.getElementById("root");

function pokemonCards(){
  const pokemonArray = data.pokemon;//data.pokemon accede a la matriz del objeto pokemon y se en la var pokemon Array 
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
document.addEventListener('DOMContentLoaded', pokemonCards);