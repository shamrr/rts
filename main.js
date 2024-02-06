const hamburger = document.getElementById('hamburger');
const menuList = document.querySelector('.menu-list');
const body = document.body;

hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    menuList.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

const menuLinks = document.querySelectorAll('.menu-list__link');

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        menuList.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});