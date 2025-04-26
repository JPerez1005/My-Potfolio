// rotateText.js
export function initRotateText() {
    let text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerHTML.split('').map((char, i) =>
        `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
      ).join('');
    }
}