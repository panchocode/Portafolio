const menu = document.querySelector(".menu-ico");
const lista = document.querySelector(".lista");

menu.addEventListener("click", () => {
  lista.classList.toggle("mostrar");
});

lista.addEventListener("click", () => {
  lista.classList.toggle("mostrar");
});