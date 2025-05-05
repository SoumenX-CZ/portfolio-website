const slider = document.querySelector(".projects-slider");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let scrollPosition = 0; // Aktuální pozice posuvníku
const cardWidth = document.querySelector(".project-card").offsetWidth + 32; // Šířka karty + mezera (gap)
const visibleCards = 4; // Počet viditelných karet
const totalCards = document.querySelectorAll(".project-card").length; // Celkový počet karet
const maxScroll = -(cardWidth * (totalCards - visibleCards)); // Maximální posun vlevo

rightArrow.addEventListener("click", () => {
  if (scrollPosition > maxScroll) {
    scrollPosition -= cardWidth;
    slider.style.transform = `translateX(${scrollPosition}px)`;
  }
});

leftArrow.addEventListener("click", () => {
  if (scrollPosition < 0) {
    scrollPosition += cardWidth;
    slider.style.transform = `translateX(${scrollPosition}px)`;
  }
});
