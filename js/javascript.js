import menuMobile from './modules/menu-mobile.js';
import Modal from './modules/modal.js';
import ScrollSuave from './modules/scrollsuave.js';

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const scrollSuave = new ScrollSuave('[data-scroll]');
scrollSuave.init();

menuMobile();