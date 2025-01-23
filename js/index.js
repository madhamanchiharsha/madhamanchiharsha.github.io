var isOpen = false;
window.addEventListener('message', function(event) {
  if (event.data === 'clickInsideIframe') {
    // You can handle the click event here
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
    isOpen=false;

  }
});
document.addEventListener('click', function(event) {
  const mySidebar = document.getElementById('mySidebar');
  const openbtn = document.getElementById('openbtn');
  // Check if the click was outside the 'myDiv' element
  if (!mySidebar.contains(event.target) && !openbtn.contains(event.target)) {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
    isOpen=false;
  }
});
function openOrCloseNav() {
  var screenWidth = window.innerWidth;
    isOpen = !isOpen
    if(isOpen & screenWidth <= 600){
    document.getElementById("mySidebar").style.width = "12em";
    document.getElementById("openbtn").style.marginLeft = "9em";
  } else if (isOpen & screenWidth >= 1024) {
    document.getElementById("mySidebar").style.width = "20em";
    document.getElementById("openbtn").style.marginLeft = "15.5em";
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
  }
}

function onClickOfTechStack(html){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src', "https://madhamanchiharsha.github.io/pages/skills.html");
  var header = document.getElementById("page-title").innerHTML = "Exposure on Technologies";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openbtn").style.marginLeft= "0";
  isOpen = false

}

function onClickOfContact(html){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src', "./pages/contact.html");
  var header = document.getElementById("page-title").innerHTML = "You can reach out to me &#128516;";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openbtn").style.marginLeft= "0";
  isOpen = false
}


function onClickAbout(){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src', "https://madhamanchiharsha.github.io/pages/aboutMe.html");
  var header = document.getElementById("page-title").innerHTML = "About Harsha Madhamanchi";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openbtn").style.marginLeft= "0";
  isOpen = false
}