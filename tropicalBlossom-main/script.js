const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const hamburguerButton = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu2');

hamburguerButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');   

});