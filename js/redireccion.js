// scrollProgress.js
export function initScrollProgress() {
    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
  
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      }else{
        scrollProgress.style.display = "grid";
      }
  
      scrollProgress.addEventListener("click", () => {
        // document.documentElement.scrollTop = 0;
        window.location.href="https://jperez1005.github.io/My-Potfolio/index.html#portfolio";
      });
  
      scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#64babe ${scrollValue}%)`;
    };
  
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
}