const menuBtn = document.querySelector('.m-menu');
const menuSidebar = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', event => {
    menuSidebar.classList.toggle('active');
});

const menuCollapse = () => {
    menuSidebar.classList.remove('active');
};

document.body.addEventListener('click', event => {

    if (!event.target.closest('.m-menu') && !event.target.closest('.menu-sidebar')) {
        menuCollapse();
    }
});