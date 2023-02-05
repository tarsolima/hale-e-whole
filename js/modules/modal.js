export default class Modal {
    constructor(abrir, fechar, container) {
        this.abrirModal = document.querySelectorAll(abrir);
        this.fecharModal = document.querySelector(fechar);
        this.containerModal = document.querySelector(container);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.fechar = this.fechar.bind(this);
    }

    modal() {
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.modal();
    }

    fechar(event) {
        event.preventDefault();
        if (event.target === this.containerModal) {
            this.modal();
        }
    }

    addEvent() {
        this.abrirModal.forEach(itens => itens.addEventListener('click', this.eventToggleModal));
        this.fecharModal.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.fechar);
    }

    init() {
        if (this.abrirModal && this.fecharModal && this.containerModal) {
            this.addEvent();
        }
        return this;
    }
}