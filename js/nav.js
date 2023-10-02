  const navbarToggle = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navbarToggle.addEventListener('click', () => {
    const ftcoNav = document.getElementById('ftco-nav');
    if (ftcoNav.classList.contains('show')) {
      ftcoNav.classList.remove('show');
    } else {
      ftcoNav.classList.add('show');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const ftcoNav = document.getElementById('ftco-nav');
      ftcoNav.classList.remove('show');
    });
  });