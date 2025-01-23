
let slideIndex = 1;
let isSetIntervelOn = false;
window.onload = function()
{ 
  showSlides()
  setInterval(showSlides,5000);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length || slideIndex > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex = slideIndex % 3;
  slideIndex++;
}
