window.addEventListener("scroll", function() {
    let scrollHeight = window.scrollY;
    let contentHeight = document.body.offsetHeight - window.innerHeight;
    initMenubar(scrollHeight, contentHeight);
    console.log(contentHeight);
});


function initMenubar(scrollHeight, contentHeight) {
    let section1Height = document.getElementById('nav-Board').offsetHeight;
    let section2Height = document.getElementById('nav-work').offsetHeight;
    let section3Height = document.getElementById('nav-AddTask').offsetHeight;

    if (scrollHeight < contentHeight - section1Height) {
        document.getElementById('nav-Board').style.color = "red";
        document.getElementById('nav-work').style.color = "#c3c5cf";
        document.getElementById('nav-AddTask').style.color = "#c3c5cf";
    }
    if (scrollHeight > contentHeight / 2) {
        document.getElementById('nav-work').style.color = "red";
        document.getElementById('nav-Board').style.color = "#c3c5cf";
        document.getElementById('nav-AddTask').style.color = "#c3c5cf";
    }
    if (scrollHeight > contentHeight - section3Height) {
        document.getElementById('nav-work').style.color = "#c3c5cf";
        document.getElementById('nav-Board').style.color = "#c3c5cf";
        document.getElementById('nav-AddTask').style.color = "red";
    }
}


function openMenu() {
    menuOpen = !menuOpen;
    if (menuOpen == true) {
        document.getElementById('navbar').style.display = "flex";

    }
    if (menuOpen == false) {
        document.getElementById('navbar').style.display = "none";


    }

}