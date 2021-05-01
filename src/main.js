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

  let carouselLeft = 0;
  let carouselClientX = 0;

  document
    .querySelector("#company-cards")
    .addEventListener("touchstart", (e) => {
      carouselClientX = e.touches[0].clientX;
    });

  document
    .querySelector("#company-cards")
    .addEventListener("touchmove", (e) => {
      const newLeft = carouselLeft - carouselClientX + e.touches[0].clientX;
      if (newLeft > 0) {
        document.querySelectorAll(".company-card").forEach((el) => {
          el.style.left = "0px";
        });
        return;
      }

      const containerWidth =
        document.querySelector(".container").clientWidth -
        2 *
          parseInt(
            getComputedStyle(document.querySelector(".container")).paddingRight
          );
      if (containerWidth - newLeft > 1140) {
        document.querySelectorAll(".company-card").forEach((el) => {
          el.style.left = containerWidth - 1140 + "px";
        });
        return;
      }

      e.preventDefault();
      carouselLeft = newLeft;
      document.querySelectorAll(".company-card").forEach((el) => {
        el.style.left = carouselLeft + "px";
      });
      carouselClientX = e.touches[0].clientX;

      const currentDotIndex = Math.floor(
        -newLeft / ((1140 - containerWidth) / 4)
      );
      document.querySelectorAll(".company-dot").forEach((el, i) => {
        if (i == currentDotIndex) {
          el.classList.add("current");
        } else {
          el.classList.remove("current");
        }
      });
    });

  window.addEventListener("resize", () => {
    const containerWidth =
      document.querySelector(".container").clientWidth -
      2 *
        parseInt(
          getComputedStyle(document.querySelector(".container")).paddingRight
        );

    const currentDotIndex = Math.floor(
      -carouselLeft / ((1140 - containerWidth) / 4)
    );
    document.querySelectorAll(".company-dot").forEach((el, i) => {
      if (i == currentDotIndex) {
        el.classList.add("current");
      } else {
        el.classList.remove("current");
      }
    });

    if (containerWidth - carouselLeft > 1140) {
      document.querySelectorAll(".company-card").forEach((el) => {
        el.style.left = containerWidth - 1140 + "px";
      });
      return;
    }
  });
});
