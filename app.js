const btnHamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

btnHamburguesa.addEventListener("click", () => {
  menu.classList.toggle("activo");
});
