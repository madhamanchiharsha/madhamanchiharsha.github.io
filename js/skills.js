var isOpen = false;
function onClickToViewSkillDetails(element) {
    var ele = document.getElementsByClassName("tech")[element];
    var ele1 = ele.querySelector("#tech-summary");
    if(ele1.style.display == ""){
    ele1.style.display = "block";
    } else {
        ele1.style.display = "";
    }
}