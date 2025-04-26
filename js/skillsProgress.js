// skillsProgress.js
let skillsPlayed = false;

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;
  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}

function skillsCounter() {
  const first_skill = document.querySelector(".skill:first-child");
  const sk_counters = document.querySelectorAll(".counter span");
  const progress_bars = document.querySelectorAll(".skills svg circle");

  if (!hasReached(first_skill)) return;
  skillsPlayed = true;
  sk_counters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 465 - 465 * (target / 100);
    progress_bars[i].style.setProperty("--target", strokeValue);
    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });
  progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}

export function initSkillsProgress() {
  window.addEventListener("scroll", () => {
    if (!skillsPlayed) {
      skillsCounter();
    }
  });
}