const slider = document.querySelector(".projects-slider");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const projectsContainer = document.querySelector(".projects-container");

let scrollPosition = 0; // Aktuální pozice posuvníku
const cardWidth = document.querySelector(".project-card").offsetWidth + 24; // Šířka karty + mezera (gap)
const visibleCards = 3; // Počet viditelných karet
const totalCards = document.querySelectorAll(".project-card").length; // Celkový počet karet
const maxScroll = -(cardWidth * (totalCards - visibleCards)) + cardWidth / 2; // Maximální posun vlevo (zohlednění kousku další karty)

// Funkce pro aktualizaci viditelnosti šipek a gradientů
function updateArrowsAndGradients() {
  // Skrytí levé šipky a gradientu, pokud je na začátku
  if (scrollPosition >= 0) {
    leftArrow.style.display = "none"; // Skrytí levé šipky
    projectsContainer.classList.remove("show-left-gradient"); // Skrytí levého gradientu
  } else {
    leftArrow.style.display = "flex"; // Zobrazení levé šipky
    projectsContainer.classList.add("show-left-gradient"); // Zobrazení levého gradientu
  }

  // Skrytí pravé šipky a gradientu, pokud je na konci
  if (scrollPosition <= maxScroll) {
    rightArrow.style.display = "none"; // Skrytí pravé šipky
    projectsContainer.classList.remove("show-right-gradient"); // Skrytí pravého gradientu
  } else {
    rightArrow.style.display = "flex"; // Zobrazení pravé šipky
    projectsContainer.classList.add("show-right-gradient"); // Zobrazení pravého gradientu
  }
}

// Skrytí levé šipky a gradientu na začátku
updateArrowsAndGradients();

rightArrow.addEventListener("click", () => {
  if (scrollPosition > maxScroll) {
    scrollPosition -= cardWidth;
    slider.style.transform = `translateX(${scrollPosition}px)`;
    updateArrowsAndGradients();
  }
});

leftArrow.addEventListener("click", () => {
  if (scrollPosition < 0) {
    scrollPosition += cardWidth;
    slider.style.transform = `translateX(${scrollPosition}px)`;
    updateArrowsAndGradients();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Zabráníme výchozímu chování formuláře

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Parametry pro EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      // Odeslání e-mailu pomocí EmailJS
      emailjs.send("service_5rc7hhu", "template_xeytbyk", templateParams).then(
        function (response) {
          alert("E-mail byl úspěšně odeslán!"); // Zpráva o úspěchu
          document.querySelector(".contact-form").reset(); // Reset formuláře
        },
        function (error) {
          alert("Došlo k chybě při odesílání e-mailu: " + error.text); // Zpráva o chybě
        }
      );
    });
});
