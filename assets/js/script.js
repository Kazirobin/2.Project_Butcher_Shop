// navbar menu section 
const navMenu = document.querySelector('.navbar_menu');
const navBar = document.querySelector('.navbar_bar');
navBar.addEventListener('click',() => {
    navMenu.classList.toggle('active')
    navBar.classList.toggle('active')
});