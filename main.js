const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleMenuEmail);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
menuHamIcon.addEventListener('click', toggleMenuHam);

function toggleMenuEmail () {
    desktopMenu.classList.toggle('inactive')

    if (!aside.classList.contains('inactive')){
        aside.classList.toggle('inactive');}
}

function toggleMenuHam() {
    mobileMenu.classList.toggle('inactive')
    
    if (!aside.classList.contains('inactive')){
        aside.classList.toggle('inactive');}
}

function toggleCarritoAside() {

aside.classList.toggle('inactive');
    
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    } else if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
}