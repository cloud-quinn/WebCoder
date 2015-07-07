
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//starting points
var x = [100, 40, 160];
var y = [200, 120, 40];
var msgX = 10;
var l = 0;

setInterval(function(){ 
drawBackground();
	for (i = 0; i < x.length; i++) {
	if (y[i] > -60) {
		y[i] -= 1;
		}
	else {
		y[i] = 200
		}
}
}, 
80
);

setInterval(function(){ 
drawBalloon(x[0], y[0]);
drawBalloon(x[1], y[1]);
drawBalloon(x[2], y[2]);
writeMessage();
}, 
80
);


function drawBackground() {
ctx.clearRect(0, 0, 200, 200);
ctx.rect(0, 0, 1024, 768);
ctx.stroke();
ctx.fillStyle = "#ADD9FB";
ctx.fill();
}

function drawBalloon(x, y) {

    //balloon
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.bezierCurveTo(x, y + 20, x - 14, y + 10, x - 10, y);
    ctx.arc(x, y, 14, 0, 2 * Math.PI);
    ctx.bezierCurveTo(x + 10, y, x + 14, y + 10, x, y + 20);
    ctx.bezierCurveTo(x, y + 20, x + 2, y + 22, x + 2, y + 22);
    ctx.bezierCurveTo(x + 2, y + 22, x - 2, y + 22, x - 2, y + 22);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#E62117";
    ctx.fill();

    //string
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.bezierCurveTo(x, y + 22, x + 1, y + 31, x + 1, y + 30);
    ctx.bezierCurveTo(x + 1, y + 30, x, y + 39, x - 1, y + 39);
    ctx.bezierCurveTo(x - 1, y + 39, x, y + 50, x + 1, y + 50);
    ctx.bezierCurveTo(x + 1, y + 50, x, y + 59, x - 1, y + 56);
    ctx.stroke();

}

function writeMessage() {
    ctx.font = "bold 22pt Georgia";
    //ctx.fillStyle = "#b98f2a";
    ctx.fillStyle = "#ced011";
    ctx.strokeStyle = "#000";
    var letters = ["T", "u", "t", "o", "r", "i", "a", "l", "C", "o", "m", "p", "l", "e", "t", "e", "!"];
    var xPos = [20, 45, 70, 86, 108, 129, 143, 165, 17, 40, 60, 90, 110, 121, 140, 153, 170];
    var yPos = [80, 80, 80, 80, 80, 80, 80, 80, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120];
    if (l > letters.length + 20) {
        l = 0;
    }
    else {
        l++;
    }
    for (i = 0; i < l; i++) {
        ctx.fillText(letters[i], xPos[i], yPos[i]);
        ctx.strokeText(letters[i], xPos[i], yPos[i]);
    }
}