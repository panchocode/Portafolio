const ham = document.querySelector(".ham");
const lista = document.querySelector(".lista");

ham.addEventListener("click", () => {
  lista.classList.toggle("activado");
});
