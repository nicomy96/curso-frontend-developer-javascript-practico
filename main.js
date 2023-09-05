const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    closeIfOpen(aside);
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    closeIfOpen(aside);
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    closeIfOpen(mobileMenu);
    closeIfOpen(desktopMenu);
    aside.classList.toggle('inactive');

}
function closeIfOpen(element){
    const isElementClose = element.classList.contains('inactive');
    if(!isElementClose){
        element.classList.add('inactive');
    }
}