var isOpen = false;
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