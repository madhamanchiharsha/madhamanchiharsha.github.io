
let slideIndex = 1;
let isSetIntervelOn = false;
window.onload = function()
{ 
  console.log("triggered");
  showSlides (slideIndex)
  setInterval(showSlides,5000);
  
}
function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log("slide Index  : "+slideIndex);
  if (n > slides.length || slideIndex > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  console.log("test inedx : "+slideIndex);
  slideIndex = slideIndex % 3;
  slideIndex++;
  console.log("EOF : "+slideIndex);
}
