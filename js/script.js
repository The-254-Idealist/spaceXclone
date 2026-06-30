const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('show');
});
const links = document.querySelectorAll('.mobile-menu a');

links.forEach(link=>{
    link.addEventListener('click',()=>{
        mobileMenu.classList.remove('show');
        menuBtn.classList.remove('open');
    });
});