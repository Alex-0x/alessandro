
const menuOverlay = document.getElementById('menu-overlay');
const menuButton = document.querySelector('.navbar-toggler');


menuOverlay.addEventListener('click', () => {

  $('.navbar-collapse').collapse('toggle');
});


$('.navbar-collapse').on('show.bs.collapse', function () {
  menuOverlay.style.display = 'block';
});

$('.navbar-collapse').on('hide.bs.collapse', function () {
  menuOverlay.style.display = 'none';
});
