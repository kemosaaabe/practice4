const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
});

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
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

function revealOnLoad() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('load', revealOnLoad);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((el) => observer.observe(el));
