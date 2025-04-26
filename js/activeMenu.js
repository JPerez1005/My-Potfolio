// activeMenu.js
export function initActiveMenu() {
    const menuLi = document.querySelectorAll("header ul li a");
    const section = document.querySelectorAll('section');
  
    function activeMenu() {
      let len = section.length;
      while (--len && window.scrollY + 97 < section[len].offsetTop) {}
      menuLi.forEach(sec => sec.classList.remove("active"));
      if (menuLi[len]) {
        menuLi[len].classList.add("active");
      }
    }
  
    activeMenu();
    window.addEventListener("scroll", activeMenu);
}