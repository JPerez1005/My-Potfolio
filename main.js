// main.js
import { initHamburguerMenu } from './js/hamburguerMenu.js';
import { initRotateText } from './js/rotateText.js';
import { initAboutButtons } from './js/aboutButtons.js';
import { initPortfolioFilter } from './js/portfolioFilter.js';
import { initSwiperSlider } from './js/swiperSlider.js';
import { initSkillsProgress } from './js/skillsProgress.js';
import { initScrollProgress } from './js/scrollProgress.js';
import { initActiveMenu } from './js/activeMenu.js';
import { initScrollRevealEffects } from './js/scrollRevealEffects.js';

document.addEventListener('DOMContentLoaded', () => {
  initHamburguerMenu();
  initRotateText();
  initAboutButtons();
  initPortfolioFilter();
  initSwiperSlider();
  initSkillsProgress();
  initScrollProgress();
  initActiveMenu();
  initScrollRevealEffects();
});