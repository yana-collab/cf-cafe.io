var sliderIndex = 1;

showSlides(sliderIndex);

function plusSlide(n) {
  showSlides(sliderIndex+= n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("about__slides-item");

  if (n > slides.length) {
    sliderIndex = 1
  }
  if (n < 1) {
    sliderIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[sliderIndex-1].style.display = 'block';
}

  