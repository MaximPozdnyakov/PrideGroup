window.addEventListener("load", function () {
  let sliderCount = 1;
  document
    .querySelector("#portfolio-arrow-left")
    .addEventListener("click", () => {
      document
        .querySelector(`#slide-${sliderCount}`)
        .classList.toggle("hidden");
      sliderCount = sliderCount - 1 == 0 ? 12 : sliderCount - 1;
      document.querySelector("#portfolio-slider-counter").textContent = String(
        sliderCount
      );
      document
        .querySelector(`#slide-${sliderCount}`)
        .classList.toggle("hidden");
    });
  document
    .querySelector("#portfolio-arrow-right")
    .addEventListener("click", () => {
      document
        .querySelector(`#slide-${sliderCount}`)
        .classList.toggle("hidden");
      sliderCount = sliderCount + 1 == 13 ? 1 : sliderCount + 1;
      document.querySelector("#portfolio-slider-counter").textContent = String(
        sliderCount
      );
      document
        .querySelector(`#slide-${sliderCount}`)
        .classList.toggle("hidden");
    });
});
