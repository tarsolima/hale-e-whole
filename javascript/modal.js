function initModal() {
    const abrirModal = document.querySelectorAll('[data-modal="abrir"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('[data-modal="container"]');

    function initModal(event) {
        event.preventDefault();
        modalContainer.classList.toggle('ativo');
    }

    function fechar(event) {
        event.preventDefault();
        if(event.target == this) {
            initModal(event);
        }
    }

    abrirModal.forEach((itens) => {
        itens.addEventListener('click', initModal);
    })
    fecharModal.addEventListener('click', initModal);
    modalContainer.addEventListener('click', fechar);
}

initModal();


const scroller = document.querySelectorAll('[data-scroll]');
const windowMetade = window.innerHeight * .8;

if(scroller.length) {
    function initscroll() {
        scroller.forEach(element => {
            const sectionTop = element.getBoundingClientRect().top;
            const conta = (sectionTop - windowMetade) < 0;

            if(conta) {
                element.classList.add('ativo');
            }
        });
    }

    initscroll();

    window.addEventListener('scroll', initscroll);
}