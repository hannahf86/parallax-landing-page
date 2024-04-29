import "./style.css";

// IMAGE SLIDER
const slideBtns = document.querySelectorAll("[data-slideBtn]");
const slideContainer = document.querySelector("[data-slideContainer]");
const slides = [...document.querySelectorAll("[data-slide]")];

// index
let currentIndex = 0;

// button handle functions
function handleSlideBtnClick(e) {
  // 1. see if slider is already moving
  e.currentTarget.id === "prev" ? currentIndex-- : currentIndex++;
  console.log("~ handleSlideBtnClick ~ currentIndex", currentIndex);
  slideContainer.dispatchEvent(new Event("sliderMove"));
}

// remove/add attributes function
const removeDisabledAttribute = (els) =>
  els.forEach((el) => el.removeAttribute("disabled"));

const addDisabledAttribute = (els) =>
  els.forEach((el) => el.setAttribute("disabled", true));

// event listeners
slideBtns.forEach((btn) => btn.addEventListener("click", handleSlideBtnClick));

slideContainer.addEventListener("sliderMove", () => {
  // 1. translate the container to the right or the left
  slideContainer.style.transform = `translateX(-${
    currentIndex * slides[0].clientWidth
  }px)`;

  // 2. remove the disabled attributes
  removeDisabledAttribute(slideBtns);

  // 3. re enable disabled attribute if needed
  currentIndex === 0 && addDisabledAttribute([slideBtns[0]]);
  console.log("it has moved!");
});
