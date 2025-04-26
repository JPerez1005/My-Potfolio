// aboutButtons.js
export function initAboutButtons() {
    const buttons = document.querySelectorAll('.about-btn button');
    const contents = document.querySelectorAll('.content');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
}