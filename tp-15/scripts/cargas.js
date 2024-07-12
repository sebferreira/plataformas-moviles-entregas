export const mostrarCarga = () => {
  const error = document.querySelector(".error");
  error.innerHTML = "";
  error.classList.add("d-flex", "justify-content-center");
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add(
    "d-flex",
    "justify-content-center",
    "spinner-border",
    "mt-5",
    "text-light"
  );
  const span = document.createElement("span");
  span.classList.add("sr-only");
  loadingDiv.append(span);
  error.append(loadingDiv);
};
export const esconderCarga = () => {
  const error = document.querySelector(".error");
  error.classList.remove("d-flex", "justify-content-center");
  error.innerHTML = "";
};
