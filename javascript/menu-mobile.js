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

function outsideClick(element, events ,callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
    if(!element.hasAttribute(outside)) {
        events.forEach((eventos) => {
            setTimeout(() => {
                html.addEventListener(eventos, handleOutsideClick);  
            });
        });
        element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            events.forEach((eventos) => {
                html.removeEventListener(eventos, handleOutsideClick);
            })
            element.removeAttribute(outside);
            callback();
        }
    }
}