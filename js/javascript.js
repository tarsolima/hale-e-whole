import MenuMobile from './modules/menu-mobile.js';
import Modal from './modules/modal.js';
import scrollSuave from './modules/scrollsuave.js';

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

scrollSuave();