video = [
    `../videos/2023-01-09_11-37-52.mkv`,
    `../videos/2023-01-09_11-37-52.mkv`,
];

videoHead = [
    `Erstes Projekt im Tia Portal`,
    `Video 2`,
    `Video 3`,
    `Video 4`,
    `Video 5`,
    `Video 6`,
    `Video 7`,
    `Video 8`,
    `Video 9`,
];

function openVideo(videoNum) {
    console.log(videoNum);
    document.getElementById('modulVideo').style.display = 'block';
    document.getElementById('popUpFormVideo').style.display = 'block';
    document.getElementById('popUpFormVideo').innerHTML = `  <div class="closeVideo">
    <h3 id="videoHeader" class="videoHeader"></h3><button type="button" onclick="closeVideo()">X</button></div><video width="400" height="400" controls autoplay loop muted>
        <source src="${video[videoNum]}" type="video/mp4"></video>
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
}