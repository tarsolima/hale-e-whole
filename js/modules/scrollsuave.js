export default function initScroller() {
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
}