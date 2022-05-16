const menu = document.querySelector(".menu-ico");
const lista = document.querySelector(".lista");

//mostrar menu
menu.addEventListener("click", () => {
  lista.classList.toggle("mostrar-lista");
});

//ocultar menu
lista.addEventListener("click", () => {
  lista.classList.toggle("mostrar-lista");
});
