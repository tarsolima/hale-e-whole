import MenuMobile from './modules/menu-mobile.js';
import Modal from './modules/modal.js';
import ScrollAnima from './modules/scroll-anima.js';
import ScrollSuave from './modules/scroll-suave.js';
import AtivarHeader from './modules/teste.js';

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();


AtivarHeader();
ScrollAnima();