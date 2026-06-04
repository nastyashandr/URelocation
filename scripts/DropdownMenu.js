class DropdownMenu {
  constructor() {
    this.triggers = document.querySelectorAll('.dropdown__trigger');
    this.init();
  }

  init() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();

        const menu = trigger.parentElement.querySelector('.dropdown__menu');

        const isOpen = menu.classList.contains('is-open');

        document.querySelectorAll('.dropdown__menu').forEach(m => {
          m.classList.remove('is-open');
        });
        document.querySelectorAll('.dropdown__trigger').forEach(t => {
          t.classList.remove('is-active');
        });

        if (!isOpen) {
          menu.classList.add('is-open');
          trigger.classList.add('is-active');
        }
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown__menu').forEach(menu => {
        menu.classList.remove('is-open');
      });
      document.querySelectorAll('.dropdown__trigger').forEach(trigger => {
        trigger.classList.remove('is-active');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.dropdown__menu').forEach(menu => {
          menu.classList.remove('is-open');
        });
        document.querySelectorAll('.dropdown__trigger').forEach(trigger => {
          trigger.classList.remove('is-active');
        });
      }
    });
  }
}

export default DropdownMenu;