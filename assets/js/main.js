document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-menu');
  const year = document.querySelector('#year');
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (year) year.textContent = String(new Date().getFullYear());

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
    });
  }

  // Active nav by path
  navLinks.forEach(function (link) {
    try {
      const url = new URL(link.getAttribute('href'), window.location.origin);
      const linkPath = url.pathname.replace(/\/$/, '');
      if (linkPath && currentPath.endsWith(linkPath)) {
        link.classList.add('active');
      }
    } catch (_) {}
  });
});

