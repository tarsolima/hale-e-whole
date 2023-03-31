import debounce from './debounce.js';

export default class headerSuave  {
    constructor(header, nossoPrograma) {
        this.header = document.querySelector(header);
        this.nossoPrograma = document.querySelector(nossoPrograma);
        this.activeClass = 'ativar-header';
        this.ativarHeaderDebounced = debounce(this.configHeader.bind(this), 200);
    }

    configHeader() {
        if (this.nossoPrograma.classList.contains('ativo')) {
            this.header.classList.add(this.activeClass);
        } else {
            this.header.classList.remove(this.activeClass);
        }
    }

    addEvent() {
        window.addEventListener('scroll', this.ativarHeaderDebounced);
    }

    init() {
        if (this.header && this.nossoPrograma) {
            this.addEvent();
        }
    }
}