const menu = document.querySelector(".menu-ico");
const lista = document.querySelector(".lista");
const x = document.querySelector(".x-ico");
//mostrar menu
menu.addEventListener("click", () => {
  lista.classList.toggle("mostrar-lista");
  x.classList.toggle("mostrar");
  menu.classList.toggle("ocultar");
});

x.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
  lista.classList.toggle("ocultar");
  x.classList.toggle("ocultar");
});
