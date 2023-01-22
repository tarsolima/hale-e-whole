export default class ScrollSuave {
    constructor(event) {
        this.scroller = document.querySelectorAll(event);
        this.windowMetade = window.innerHeight * .8;

        this.checkDistance = this.checkDistance.bind(this);
    }

    getDistance() {
        this.distance = [...this.scroller].map((event) => {
            const offset = event.offsetTop;
            return {
                element: event,
                offset: Math.floor(offset - this.windowMetade)
            };
        });
    }

    checkDistance() {
        this.distance.forEach((section) => {
            if (window.pageYOffset > section.offset) {
                section.element.classList.add('ativo');
            } else if (section.element.classList.contains('ativo')) {
                section.element.classList.remove('ativo');
            };
        });
    }

    init() {
        if (this.scroller.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener('scroll', this.checkDistance);                
        }
    }
}