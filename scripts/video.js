videoHead = [
    `Erstes Projekt im Tia Portal`,
    `Hardware Konfiguration`,
    `Erste Logische Schaltung`,
    `Simulation starten`,
    `PLC Lab mit Tia verbinden`,
    `PLC Lab Schalter erstellen`,
    `PLC Lab Zähler erstellen`,
    `PLC Lab mit Tia verbinden`,
    `Grafcet Studio hinzufügen`,
];

function openVideo(videoNum) {
    console.log(videoNum);
    document.getElementById('modulVideo').style.display = 'block';
    document.getElementById('popUpFormVideo').style.display = 'block';
    document.getElementById('popUpFormVideo').innerHTML = `  <div class="closeVideo">
    <h3 id="videoHeader" class="videoHeader"></h3><button type="button" onclick="closeVideo()">X</button></div><img class="modulImg" src="../img/anleitung${videoNum}.jpg" alt=""></video>
      `;
    document.getElementById('projectPage').classList.add('blocking');
    document.getElementById('popUpFormVideo').classList.add('allowed');
    document.getElementById('videoHeader').innerText = `${videoHead[videoNum]}`
}


function closeVideo() {
    document.getElementById('modulVideo').style.display = 'none';
    document.getElementById('popUpFormVideo').style.display = 'none';
    document.getElementById('projectPage').classList.add('allowed');
    document.getElementById('popUpFormVideo').classList.add('blocking');
    document.getElementById("videoContent").style.display = "none";
    document.getElementById("videoDemo").style.display = "none";
    document.getElementById("closeButton").style.display = "none";
}


function playVideo() {
    document.getElementById("videoContent").style.display = "block";
    document.getElementById("videoDemo").style.display = "block";
    document.getElementById("closeButton").style.display = "flex";
}