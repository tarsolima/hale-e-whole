import debounce from './debounce.js';

export default function ativarHeader()  {
    const header = document.querySelector('[data-header]');
    const nossoPrograma = document.querySelector('[data-programa]');

    function configHeader() {
        if (nossoPrograma.classList.contains('ativo')) {
            header.classList.add('ativar-header');
        }
    }

    const ativarHeaderDebounced = debounce(configHeader, 200);

window.addEventListener('scroll', ativarHeaderDebounced);
}