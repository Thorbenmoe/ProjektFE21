let headline = ["Modernisierung", "Probleme und Lösungen", "Zeitplanung(in Tage)", "Hardware und Software", "Physisches Modell", "Wieso PLC LAB?"];

// content for the red box
let problem1 = ["Alte Hardwareschnittstelle", "Keine Lizenzen verfügbar", "", "SPS S7-1500", "Verdrahtung der Hardwareschnittstelle (SUB-D)", "Übersichtliches Interface"];
let problem2 = ["Alte Software", "Lieferengpässe (SPS nicht lieferbar)", "", "25-poliges SUB-D Kabel", "Umverdrahtung an der SPS", ""];
let problem3 = ["Neue Hardware", "", "", "Palettenhubtisch", "", "Anwenderfreundlich"];
let problem4 = ["Alte Hardware kann nicht mit der neuen kommunizieren", "", "Siemens TIA Portal", "", "Verbindung zwischen Hard- und Software"];

// content for the green box
let solution1 = ["Neue Software", "Kontakt mit MHJ Softwares", "", "PLC-Lab", "Ansteuerung der Hardware mit TIA-Portal", "Unterstützt S7 und TIA Portal"];
let solution2 = ["Neue Hardwareschnittstelle", "Absprache zwischen Projektleiter und MHJ", "", "Grafcet Studio", "", ""];
let solution3 = ["Step7 → TIA Portal", "Bereitstellung eines Ausweichmodells", "", "Visual Studio Code", "", "Kompatibel mit Grafcet Studio"];
let solution4 = ["GrafcetStudio", "War den Anforderungen gerecht", "", "sPlan", "", ""];
let content = 0;

function init() {
    initHandout(content);
}


function initHandout(content) {
    navBarColor(content);
    renderBars(content);
    document.getElementById("h2").innerText = headline[content];
    document.getElementById("problemh31").innerText = problem1[content];
    document.getElementById("problemh32").innerText = problem2[content];
    document.getElementById("problemh33").innerText = problem3[content];
    document.getElementById("problemh34").innerText = problem4[content];

    document.getElementById("solutionh31").innerText = solution1[content];
    document.getElementById("solutionh32").innerText = solution2[content];
    document.getElementById("solutionh33").innerText = solution3[content];
    document.getElementById("solutionh34").innerText = solution4[content];
}

function renderBars(content) {
    if (content == 2) {
        document.getElementById("canvas").style.display = "block";
        document.getElementById("problem").style.display = "none";
        document.getElementById("solution").style.display = "none";
        document.getElementById("handOutBoxContent").style.minHeight = "0px";
    } else {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("problem").style.display = "block";
        document.getElementById("solution").style.display = "block";
        document.getElementById("handOutBoxContent").style.minHeight = "600px";
    }
}


function next() {
    if (content >= headline.length - 1) {
        content = 0;
    } else {
        content++;
    }
    initHandout(content);
}


function back() {
    if (content <= 0) {
        content = headline.length - 1;
    } else {
        content--;
    }
    initHandout(content);
}


// change color from current point
function navBarColor(content) {
    for (let i = 0; i <= 5; i++) {
        if (i === content) {
            document.getElementById(`${i}`).style.color = "white";
        } else {
            document.getElementById(`${i}`).style.color = "black";
        }
    }
}


//choose a point
function initHandoutClick(content) {
    navBarColor(content);
    initHandout(content);
}