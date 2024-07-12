export const Card = (pokemonData, divRow, button) => {
  const {name, sprites, types, abilities} = pokemonData;

  const divCols = document.createElement("div");
  const card = document.createElement("div");
  divCols.classList.add(
    "col-sm-12",
    "col-md-5",
    "col-lg-3",
    "py-2",
    "d-flex",
    "justify-content-center"
  );
  card.classList.add("card", "bg-dark");
  card.style.width = "18rem";
  const img = document.createElement("img");
  img.classList.add("card-img-top", "img-fluid", "rounded-circle");
  img.src = sprites.front_default;
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.textContent = name;
  h5.style.color = "white";
  const p = document.createElement("p");
  p.classList.add("card-text");
  p.style.color = "white";
  const modalImage = document.querySelector("#pokemon-img");
  const h2 = document.querySelector("#pokemon-nombre");
  const tipo = document.querySelector("#pokemon-tipo");
  const habilidades = document.querySelector("#pokemon-habilidades");

  button.addEventListener("click", () => {
    tipo.innerHTML = "";
    habilidades.innerHTML = "";
    modalImage.src = sprites.front_default;
    h2.textContent = name;
    types.map((type) => {
      const li = document.createElement("li");
      li.classList.add("ms-3");
      li.textContent = type.type.name;
      tipo.appendChild(li);
    });
    abilities.map((habilidad) => {
      const li = document.createElement("li");
      li.classList.add("ms-3");
      li.textContent = habilidad.ability.name;
      habilidades.appendChild(li);
    });
  });

  types.forEach((type) => {
    const span = document.createElement("span");
    span.classList.add("badge", "badge-primary", "mr-1");
    span.textContent = type.type.name;
    span.style.backgroundColor = "white";
    span.style.color = "black";
    span.style.marginRight = "10px";
    p.append(span);
  });
  cardBody.append(h5, p, button);
  card.append(img, cardBody);
  divCols.append(card);
  divRow.append(divCols);
};
