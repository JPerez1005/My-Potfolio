// js/portfolioFilter.js

export function initPortfolioFilter() {
    let mixer = mixitup('.portfolio-gallery', { // Utiliza la variable global 'mixitup'
      selectors: {
        target: '.portfolio-box'
      },
      animation: {
        duration: 500
      }
    });
}