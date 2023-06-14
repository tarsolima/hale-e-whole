export default class AnimacaoScroll {
  constructor(dataScroll) {
    this.sections = document.querySelectorAll(dataScroll);
    this.windowMetade = window.innerHeight * 0.8;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if(isSectionVisible)
        section.classList.add('ativo');
      else if(section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    if(this.sections.length) {
      this.animaScroll();

      window.addEventListener('scroll', this.animaScroll);
    }
  }
}
