// hamburguerMenu.js
const menuIcon = document.querySelector('.menu_icon');
const navlist = document.querySelector(".navlist");

export function initHamburguerMenu() {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
  });

  navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
  });
}