/* NAV MOBILE MENU */
const navMenu = document.getElementById('nav-menu');
const overlayMenu = document.getElementById('overlay-menu');

navMenu.addEventListener('click', () =>{
    overlayMenu.classList.toggle('show-overlay');
})

const navLink = document.querySelectorAll('.lista');

navLink.forEach(link => link.addEventListener('click', () => {
    overlayMenu.classList.remove('show-overlay');
}))

