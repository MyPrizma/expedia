let menuButton = document.querySelector('.header__btn');
let menu = document.querySelector('.header__mobnav')

menuButton.onclick = function () {
  menuButton.classList.toggle('header__btn_active');
  menu.classList.toggle('header__mobnav_active');
}