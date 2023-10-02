const carouselImage = document.getElementById('carousel-image');


const startResizeWidth = 390; 


function resizeImage() {
  if (window.innerWidth <= startResizeWidth) {
    const scaleFactor = window.innerWidth / startResizeWidth;
    const newWidth = 60 * scaleFactor; 
    
    carouselImage.style.maxWidth = newWidth + 'px';
  } else {

    carouselImage.style.maxWidth = '100%';
  }
}

window.addEventListener('resize', resizeImage);

window.addEventListener('load', resizeImage);
