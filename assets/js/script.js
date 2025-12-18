// Interações básicas, ScrollSpy e UX para navegação/formulário
window.addEventListener('DOMContentLoaded', () => {
  // Ano dinâmico no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ScrollSpy
  if (typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNavbar',
      offset: 90,
    });
  }

  // Fecha menu colapsado ao clicar em um link (mobile UX)
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('#navbarContent .nav-link, #navbarContent .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const isVisible = window.getComputedStyle(navbarToggler).display !== 'none';
      if (isVisible) {
        const collapse = document.getElementById('navbarContent');
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
        bsCollapse.hide();
      }
    });
  });

  // Placeholder do formulário (CTA Final)
  const form = document.querySelector('#cta-final form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = /** @type {HTMLInputElement} */(document.getElementById('nome'))?.value?.trim() || 'Amigo(a)';
      alert(`Obrigado, ${nome}! Recebemos seus dados. Em breve entraremos em contato.`);
    });
  }

  // Navbar compacta ao rolar
  const navbar = document.getElementById('mainNavbar');
  const onScroll = () => {
    if (!navbar) return;
    const scrolled = window.scrollY > 10;
    navbar.classList.toggle('compact', scrolled);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal on scroll via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});
