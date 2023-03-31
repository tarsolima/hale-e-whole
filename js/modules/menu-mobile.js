import outsideClick from './outside.js';

export default class MenuMobile {
    constructor(menuButtom, menuList, event) {
        this.menuButtom = document.querySelectorAll(menuButtom);
        this.menuList = document.querySelectorAll(menuList);
        this.activeClass = 'active';
        if (this.eventos === undefined) this.eventos = ['click', 'touchstart'];
        else this.eventos = event;

        this.initmenu = this.initmenu.bind(this);
    }

    initmenu(event) {
        event.preventDefault();
        this.menuButtom.forEach(itens => itens.classList.add(this.activeClass));
        this.menuList.forEach(itens => itens.classList.add(this.activeClass));
        this.menuList.forEach(menu => {
            outsideClick(menu, this.eventos ,() => {
                // this.menuButtom.classList.remove(this.activeClass);
                // this.menuList.classList.remove(this.activeClass);
                this.menuButtom.forEach(itens => itens.classList.remove(this.activeClass));
                this.menuList.forEach(itens => itens.classList.remove(this.activeClass));
            })
        });
    }

    addEvent() {
        this.eventos.forEach((userEvent) => {
            this.menuButtom.forEach(itens => {
                itens.addEventListener(userEvent, this.initmenu);
            });
        });
    }

    init() {
        if (this.menuButtom.length && this.menuList.length) {
            this.addEvent();
        }
        return this;
    }
}