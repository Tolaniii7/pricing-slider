"use strict";

const rangeSlider = document.querySelector(".range-input");
const value = document.querySelector(".range-value");
const displayPrice = document.querySelector(".price-tag");
const button = document.querySelector(".toggle-button");
const trial = document.querySelector(".button--trial");
const years = document.querySelector(".yearly");

// 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

value.innerHTML = `0 views`;
displayPrice.textContent = `$0.00`;

const pageviews = [10, 50, 100, 500, 1];
const prices = [8, 12, 16, 24, 36];

myRange.addEventListener("input", function (e) {
  // this.style.background =
  //   "linear-gradient(to left, hsl(174, 77%, 80%), hsl(174, 86%, 45%))";

  // getting out value from the input
  const i = e.target.value;

  const figure = pageviews[i] === 1 ? "m" : "k";

  value.innerHTML = `${pageviews[i]}${figure} views `;
  displayPrice.textContent = `$${prices[i].toFixed(2)} `;
});

button.addEventListener("click", function () {
  myRange.value = 0;
  value.innerHTML = `0 views`;
  displayPrice.textContent = `$0.00`;

  button.classList.toggle("checked");
  myRange.addEventListener("input", function (e) {
    // getting out value from the input
    const i = e.target.value;

    const figure = pageviews[i] === 1 ? "m" : "k";

    value.innerHTML = `${pageviews[i]}${figure} views `;
    displayPrice.textContent = `$${prices[i].toFixed(2) * 0.25} `;
  });
});

trial.addEventListener("click", function () {
  myRange.value = 0;
  value.innerHTML = `0 views`;
  displayPrice.textContent = `$0.00`;
});
