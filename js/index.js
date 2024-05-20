var isOpen = false;
var SkillsHTML = "https://madhamanchiharsha.github.io/pages/skills.html"
function openOrCloseNav() {
    isOpen = !isOpen
    console.log(isOpen)
    if(isOpen){
    document.getElementById("mySidebar").style.width = "16vw";
    document.getElementById("main").style.marginLeft = "16vw";
    document.getElementById("main-content").style.marginLeft = "0vw";
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main-content").style.marginLeft = "10vw";
  }
}

function onClickOfTechStack(html){
  var SkillsHTML = document.getElementById("main-content");
  SkillsHTML.setAttribute('src',)
  var header = document.getElementById("page-title").innerHTML = "Exposure on Technologies"
}