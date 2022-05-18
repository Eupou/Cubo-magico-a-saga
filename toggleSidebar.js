const sideBar = document.querySelector(".sidebar");
const btnMenu = document.querySelector(".menu-hamburguer");

const toggleMenu = () => {
  sideBar.classList.toggle("--active");
};

btnMenu.addEventListener("click", toggleMenu);
