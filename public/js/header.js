initBurgerMenu();

function initBurgerMenu() {
  const menuNavbar = document.getElementById("nav-menu");
  const menuButton = document.getElementById("nav-toggle");
  
  menuButton.addEventListener("click", () => {
    menuNavbar.classList.toggle("expanded");
  });
}