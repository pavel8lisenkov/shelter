const menuButton = document.querySelector('.menu__btn');
const menuBody = document.querySelector('.menu__body');

menuButton.addEventListener('click', function() {
  document.body.classList.toggle('_lock');
  menuButton.classList.toggle('_active');
  menuBody.classList.toggle('_active');
})

const menuLinks = document.querySelectorAll('.menu__link');

for (let menuLink of menuLinks) {
  menuLink.addEventListener('click', function() {
    if (menuButton.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      menuButton.classList.remove('_active');
      menuBody.classList.remove('_active');
    }
  })
}