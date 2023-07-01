const swiper = new Swiper('.swiper', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});

const buttonMenu = document.querySelector('.menu-button');
const headerMenu = document.querySelector('.header');
buttonMenu.addEventListener('click', ()=> {
    headerMenu.classList.toggle('header-active');
    buttonMenu.classList.toggle('menu-button-active');
})