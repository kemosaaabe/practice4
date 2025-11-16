const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const modal = document.querySelector('.modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show');
});

const revealElements = document.querySelectorAll('.reveal');

// Если при загрузке элемент в зоне видимости — делаем его видимым без анимации
function revealOnLoad() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('load', revealOnLoad);

// Observer для повторных анимаций
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // вход в область → плавное появление
        entry.target.classList.add('visible');
      } else {
        // выход из видимости → скрываем, чтобы анимация могла повториться
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((el) => observer.observe(el));
