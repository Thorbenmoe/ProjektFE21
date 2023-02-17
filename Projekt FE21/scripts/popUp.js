let background = document.getElementById('projectPage');
let openPopUp = document.getElementById('');
let popUpForm = document.getElementById('popUpForm');
let menuOpen = false;


function init() {
    document.getElementById('popUpForm').style.display = 'none';
    document.getElementById('popUpForm2').style.display = 'none';
    document.getElementById('projectPage').classList.remove('blocking');
}


// open Popup 
function popUp(num) {

    divContent = document.getElementById('renderedIcons').innerHTML = "";
    document.getElementById('popUpForm').style.display = 'block';
    document.getElementById('popUpImg').innerHTML = `<img src="../img/user${num}.jpg" class="student">`;
    let h3Text = document.getElementById(`subtext${num}`);
    let showH3Text = h3Text.innerText;
    document.getElementById('popUpImgText').innerHTML = showH3Text;
    renderText(num);
    document.getElementById('projectPage').classList.add('blocking');
    document.getElementById('popUpForm').classList.add('allowed');
};


//close Popup
function closePopUp() {
    document.getElementById('popUpForm').style.display = 'none';

    document.getElementById('popUpForm2').style.display = 'none';
    document.getElementById('projectPage').classList.remove('blocking');

}


// Render the Popup Text
function renderText(id) {
    if (id == 1) {
        document.getElementById('popUpText').innerHTML = `Verwantwortlich für die Erstellung und Funktion sowie die Struktur der Projekte in Tia Portal. <br> Zusätzlich Ersteller der Verdrahtungspläne in EPLAN. <br>Link`;
        renderIcons(1);
    } else if (id == 2) {
        document.getElementById('popUpText').innerHTML = `Verantowrlich für die Dokumentation des Projektes und die Erstellung der Power-Point Präsentation. <br> Zusätzlich Ersteller der Mobilen Projekt-App. <br>Link`
        renderIcons(2)
    } else if (id == 3) {
        document.getElementById('popUpText').innerHTML = `Verantwortlich für die Kommunikation zwischen den beiden Softwares: Tia Portal und PLC Lab. <br>Link`
        renderIcons(3)
    } else if (id == 4) {
        document.getElementById('popUpText').innerHTML = `Verwantwortlich für die Umsetzung der benötigten Hardwareänderungen. <br>Link`
        renderIcons(4)
    }
}


// render icons
function renderIcons(count) {
    if (count == 1) {
        [2, 3, 4].forEach(j => divContent = document.getElementById('renderedIcons').innerHTML += `<a onclick="popUp(${j})" class="renderedIcon" href="#"><img class="renderedIconImg" src="../img/user${j}.jpg"></a>`);
    }
    if (count == 2) {
        [4, 3, 1].forEach(j => divContent = document.getElementById('renderedIcons').innerHTML += `<a onclick="popUp(${j})" class="renderedIcon" href="#"><img class="renderedIconImg" src="../img/user${j}.jpg"></a>`);
    }
    if (count == 3) {
        [4, 2, 1].forEach(j => divContent = document.getElementById('renderedIcons').innerHTML += `<a onclick="popUp(${j})" class="renderedIcon" href="#"><img class="renderedIconImg" src="../img/user${j}.jpg"></a>`);
    }
    if (count == 4) {
        [1, 2, 3].forEach(j => divContent = document.getElementById('renderedIcons').innerHTML += `<a onclick="popUp(${j})" class="renderedIcon" href="#"><img class="renderedIconImg" src="../img/user${j}.jpg"></a>`);
    }
}


//project popup
function projectPopUp() {
    document.getElementById('modulVideo').style.display = 'block';
    document.getElementById('popUpImg2').innerHTML = `<video width="400" height="400" controls autoplay loop muted>
    <source src="../videos/2023-01-09_11-37-52.mkv" type="video/mp4"></video>`;
    document.getElementById('projectPage').classList.add('blocking');
    document.getElementById('popUpForm2').classList.add('allowed');
}


//render demo
function openDemo() {
    let demoDiv = document.createElement("div");

    demoDiv.setAttribute("id", "demo");
    demoDiv.setAttribute("class", "demoClass");

    demoDiv.innerHTML = `<form class="row gy-4 border p-3 pb-5 needs-validation allowed" id="popUpFormVideo" style="display: block;">  <div class="closeVideo">
    <h3 id="videoHeader" class="videoHeader">Erstes Projekt im Tia Portal</h3><button type="button" onclick="closeVideo()">X</button></div><video width="400" height="400" controls="" autoplay="" loop="" muted="">
        <source src="../videos/2023-01-09_11-37-52.mkv" type="video/mp4"></video>
      </form>`;


    body.appendChild(demoDiv);

}