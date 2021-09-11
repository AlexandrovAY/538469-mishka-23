const orderButton = document.querySelector(".promo__button");
const orderWindow = document.querySelector(".modal__overlay");

orderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderWindow.classList.add("modal__overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderWindow.classList.contains("modal__overlay--show")) {
      evt.preventDefault();
      orderWindow.classList.remove("modal__overlay--show");
    }
  }
});
