import {Card} from "./card.js";
import {mostrarCarga, esconderCarga} from "./cargas.js";

async function fetchPokemons(url) {
  mostrarCarga();
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  esconderCarga();
  return data;
}
const Datos = (arrayPokemons, divRow) => {
  arrayPokemons.map(async (pokemon) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "btn-block");
    button.textContent = "Ver más";
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#Modal");
    const pokemonData = await fetchPokemons(pokemon.url);
    Card(pokemonData, divRow, button);
  });
};

async function displayPokemons() {
  const divRow = document.querySelector(".row");
  let dataPokemons = await fetchPokemons(
    "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0"
  );
  let arrayPokemons = dataPokemons.results;
  const adelante = document.querySelector(".adelante");
  const atras = document.querySelector(".atras");
  const nav = document.querySelector(".navbar-brand");

  nav.addEventListener("click", async () => {
    const res = await fetchPokemons(
      "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0"
    );
    dataPokemons = res;
    arrayPokemons = [];
    arrayPokemons.push(...res.results);
    divRow.innerHTML = "";
    Datos(arrayPokemons, divRow);
  });

  adelante.addEventListener("click", async () => {
    const res = await fetchPokemons(`${dataPokemons.next}`);
    dataPokemons = res;
    arrayPokemons = [];
    arrayPokemons.push(...res.results);
    divRow.innerHTML = "";
    Datos(arrayPokemons, divRow);
  });

  atras.addEventListener("click", async () => {
    if (!dataPokemons.previous) return;
    const res = await fetchPokemons(`${dataPokemons.previous}`);
    dataPokemons = res;
    arrayPokemons = [];
    arrayPokemons.push(...res.results);
    divRow.innerHTML = "";
    Datos(arrayPokemons, divRow);
  });
  Datos(arrayPokemons, divRow);
}

displayPokemons();
