// fullscreen.js

export function initFullscreen() {
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

        const styleEl = document.createElement('link');
        styleEl.setAttribute('rel', 'stylesheet');
        styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css');
        styleEl.addEventListener('load', function() {
            toggleBtn.hidden = false;
        });
        document.head.appendChild(styleEl);

        toggleBtn.addEventListener('click', function() {
            if (document.fullscreenElement) { // Standard API
                document.exitFullscreen();
            } else if (document.webkitFullscreenElement) { // Safari, older Chrome
                document.webkitCancelFullScreen();
            } else if (document.documentElement.requestFullscreen) { // Standard API
                document.documentElement.requestFullscreen();
            } else {
                document.documentElement.webkitRequestFullScreen(); // Safari, older Chrome
            }
        });

        document.addEventListener('fullscreenchange', handleFullscreen);
        document.addEventListener('webkitfullscreenchange', handleFullscreen);


        function handleFullscreen() {
            if (document.fullscreenElement || document.webkitFullscreenElement) {
                toggleBtn.classList.add('on');
                toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
            } else {
                toggleBtn.classList.remove('on');
                toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
            }
        }
    }
}