// #####Canvas#####
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");




// Y-axis
ctx.font = "16px Arial";
ctx.textAlign = "center";
ctx.fillText("Verdrahtung", 75, 400);
ctx.fillText("Virtuelle Modelle", 70, 70);
ctx.fillText("App", 75, 300);
ctx.fillText("Dokumentation", 75, 180);
ctx.fillText("Rot=gebrauchte Zeit", 90, 550);
ctx.fillText("Grün=tatsächliche Zeit", 90, 500);


// bar
let x = 100;
let y = 150;
let height = 50;
let time = [5, 10, 15, 20];


// flip canvas
ctx.translate(0, canvas.height);
ctx.rotate(-Math.PI / 2);

for (let i = 0; i < time.length; i++) {

    // red bar
    let heightRed = time[i] * 5;
    ctx.fillStyle = "Red";
    ctx.fillRect(x, y, height, heightRed);


    // green bar 
    let heightGreen = (time[i] + 5) * 5;
    ctx.fillStyle = `Green`;
    ctx.fillRect(x + height + 10, y, height, heightGreen);



    //distance
    x += height * 2 + 20;
    // ####canvas ends
}