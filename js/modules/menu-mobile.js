import outsideClick from './outside.js';

export default function menuMobile() {
    const menuButtom = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos  = ['touchstart', 'click'];

    function initmenu() {
        menuButtom.classList.add('active');
        menuList.classList.add('active');
        outsideClick(menuList, ['touchstart', 'click'] ,() => {
            menuButtom.classList.remove('active');
            menuList.classList.remove('active');
        })
    }

    eventos.forEach((userEvent) => {
        menuButtom.addEventListener(userEvent, initmenu);
    });
}