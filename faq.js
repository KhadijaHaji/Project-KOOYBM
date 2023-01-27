const buttons = document.querySelectorAll(".faq-title");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
const buttons2 = document.querySelectorAll(".faq-toggle");

buttons2.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
