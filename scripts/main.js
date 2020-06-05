const menuBtn = document.querySelector('.m-menu');
const menuSidebar = document.querySelector('.menu-sidebar');
menuBtn.addEventListener('click',
    event => {
        menuSidebar.classList.toggle('active');
    });
