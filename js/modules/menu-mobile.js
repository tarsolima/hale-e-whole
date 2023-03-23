import outsideClick from './outside.js';

export default class MenuMobile {
    constructor(menuButtom, menuList, event) {
        this.menuButtom = document.querySelector(menuButtom);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';
        if (this.eventos === undefined) this.eventos = ['click', 'touchstart'];
        else this.eventos = event;

        this.initmenu = this.initmenu.bind(this);
    }

    initmenu(event) {
        event.preventDefault();
        this.menuButtom.classList.add(this.activeClass);
        this.menuList.classList.add(this.activeClass);
        outsideClick(this.menuList, this.eventos ,() => {
            this.menuButtom.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        })
    }

    addEvent() {
        this.eventos.forEach((userEvent) => {
            this.menuButtom.addEventListener(userEvent, this.initmenu);
        });
    }

    init() {
        if (this.menuButtom && this.menuList) {
            this.addEvent();
        }
        return this;
    }
}