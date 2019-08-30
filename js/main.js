const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu-list');

window.onload = function() {
  document.querySelector('.burger').onclick = function fun() {
    burger.classList.toggle('active');
    menuList.classList.toggle('visible');
  };
};
