  // Ottieni il riferimento al pulsante di navigazione e ai link della navbar
  const navbarToggle = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Aggiungi un gestore di eventi al pulsante di navigazione
  navbarToggle.addEventListener('click', () => {
    const ftcoNav = document.getElementById('ftco-nav');
    if (ftcoNav.classList.contains('show')) {
      ftcoNav.classList.remove('show');
    } else {
      ftcoNav.classList.add('show');
    }
  });

  // Aggiungi un gestore di eventi a ciascun link della navbar
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const ftcoNav = document.getElementById('ftco-nav');
      ftcoNav.classList.remove('show');
    });
  });