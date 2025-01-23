var isOpen = false;
document.addEventListener('click', function(event) {
  const mySidebar = document.getElementById('mySidebar');
  const openbtn = document.querySelector('.openbtn');
  const iFrame = document.getElementById('main-content');
  // const iframeDoc = iFrame.contentDocument || iFrame.contentWindow.document;

  // Check if the click was outside the 'myDiv' element
  if (!mySidebar.contains(event.target) && !openbtn.contains(event.target) && iFrame.contains(event.target)) {
    console.log('hello');
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
    isOpen=false;
  }
});
function openOrCloseNav() {
  var screenWidth = window.innerWidth;
    var valueToPass;

    isOpen = !isOpen
    console.log(screenWidth,valueToPass,isOpen)
    if(isOpen & screenWidth <= 600){
    document.getElementById("mySidebar").style.width = "12em";
    document.getElementById("openbtn").style.marginLeft = "9em";
    //document.getElementById("openbtn").style.transition = "12em";
    //document.getElementById("main-content").style.marginLeft = "0vw";
  } else if (isOpen & screenWidth >= 1024) {
    document.getElementById("mySidebar").style.width = "20em";
    document.getElementById("openbtn").style.marginLeft = "15.5em";
    //document.getElementById("openbtn").style.transition = "";
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
    //document.getElementById("main-content").style.marginLeft = "10vw";
  }
}

function onClickOfTechStack(html){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src', "https://madhamanchiharsha.github.io/pages/skills.html");
  var header = document.getElementById("page-title").innerHTML = "Exposure on Technologies";
}

function onClickOfContact(html){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src', "./pages/contact.html");
  var header = document.getElementById("page-title").innerHTML = "You can reach out to me &#128516;";
}


function onClickAbout(){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src', "https://madhamanchiharsha.github.io/pages/aboutMe.html");
  var header = document.getElementById("page-title").innerHTML = "About Harsha Madhamanchi";
}