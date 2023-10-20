// Open menu sheet when click menu button
const menuButton = document.querySelector("#menu_button");
const menuSheet = document.querySelector("#menu_sheet");
const menu = document.querySelector("#menu");
// On click menu button
menuButton.addEventListener("click", () => {
    // Open menu
    menuButton.classList.toggle("open");
    menuSheet.classList.toggle("open");
    menu.classList.toggle("open");
});


// Slider
const slider = document.getElementById("slider");
const prevButton = document.getElementById("prev_button");
const nextButton = document.getElementById("next_button");
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
// Create slider indicators
const sliderIndicatorsContainer = document.getElementById("slider_indicators_container");
for (let i = 0; i < slides.length; i++) {
    const sliderIndicator = document.createElement("div");
    const sliderIndicatorParent = document.createElement("div");
    sliderIndicatorParent.className = "slider_indicator_parent";
    sliderIndicator.className = "slider_indicator";
    sliderIndicatorParent.appendChild(sliderIndicator);
    sliderIndicatorsContainer.appendChild(sliderIndicatorParent);
}
const sliderIndicatorParents = document.querySelectorAll(".slider_indicator_parent");
const sliderIndicators = document.querySelectorAll(".slider_indicator");
function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update slider indicators
    sliderIndicators.forEach((sliderIndicator, i) => {
        sliderIndicator.classList.toggle("active", i == slideIndex);
    })
}
// Previous
prevButton.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});
// Next
nextButton.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});
// Automatically slide
function autoAdvance() {
    slideIndex++;
    showSlide(slideIndex);
}
setInterval(autoAdvance, 3000);
showSlide(slideIndex);