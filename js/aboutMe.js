
let slideIndex = 1;
let isSetIntervelOn = false;
window.onload = function()
{ 
  console.log("triggered")
  showSlides()
  setInterval(showSlides,5000);
  
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log("slide length : "+slides.length);
  if (n > slides.length || slideIndex > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
}
