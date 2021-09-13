const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const orderButton = document.querySelector(".promo__button");
const cartButton = document.querySelectorAll(".product__price-cart");
const modalOverlay = document.querySelector(".modal__overlay");
const orderWindow = document.querySelector(".modal__overlay");

if(orderButton) {
  orderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    orderWindow.classList.add("modal__overlay--show");
  });
}

if(cartButton) {
  for (let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener("click", function() {
      orderWindow.classList.add("modal__overlay--show");
    });
  }
}

if(modalOverlay) {
  modalOverlay.addEventListener("click", function () {
    orderWindow.classList.remove("modal__overlay--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderWindow.classList.contains("modal__overlay--show")) {
      evt.preventDefault();
      orderWindow.classList.remove("modal__overlay--show");
    }
  }
});
