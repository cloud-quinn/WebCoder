
var badge = document.getElementById("badgeCanvas");
var ctx = badge.getContext("2d");
gotBadges = -1;
ctx.fillStyle = "#C8CAD2";
ctx.fillRect(0, 0, 25, 25);
ctx.fillRect(30, 0, 25, 25);
ctx.fillRect(60, 0, 25, 25);
ctx.fillRect(90, 0, 25, 25);
ctx.fillRect(120, 0, 25, 25);
ctx.fillRect(150, 0, 25, 25);
ctx.fillRect(0, 30, 25, 25);
ctx.fillRect(30, 30, 25, 25);
ctx.fillRect(60, 30, 25, 25);
ctx.fillRect(90, 30, 25, 25);
ctx.fillRect(120, 30, 25, 25);
ctx.fillRect(150, 30, 25, 25);

addBadge();

function addBadge() {
    gotBadges++;
    ctx.fillStyle = "#1E78C0";
    if (gotBadges >= 1)
        ctx.fillRect(0, 0, 25, 25);
    if (gotBadges >= 2)
        ctx.fillRect(30, 0, 25, 25);
    if (gotBadges >= 3)
        ctx.fillRect(60, 0, 25, 25);
    if (gotBadges >= 4)
        ctx.fillRect(90, 0, 25, 25);
    if (gotBadges >= 5)
        ctx.fillRect(120, 0, 25, 25);
    if (gotBadges >= 6)
        ctx.fillRect(150, 0, 25, 25);
    if (gotBadges >= 7)
        ctx.fillRect(0, 30, 25, 25);
    if (gotBadges >= 8)
        ctx.fillRect(30, 30, 25, 25);
    if (gotBadges >= 9)
        ctx.fillRect(60, 30, 25, 25);
    if (gotBadges >= 10)
        ctx.fillRect(90, 30, 25, 25);
    if (gotBadges >= 11)
        ctx.fillRect(120, 30, 25, 25);
    if (gotBadges >= 12)
        ctx.fillRect(150, 30, 25, 25);
    ctx.font = "1em Arial";
    ctx.strokeText("1", 8, 17);
    ctx.font = "1em Arial";
    ctx.strokeText("2", 38, 17);
    ctx.font = "1em Arial";
    ctx.strokeText("3", 68, 17);
    ctx.font = "1em Arial";
    ctx.strokeText("4", 98, 17);
    ctx.font = "1em Arial";
    ctx.strokeText("5", 128, 17);
    ctx.font = "1em Arial";
    ctx.strokeText("6", 158, 17);
    ctx.font = "1em Arial";
    ctx.strokeText("7", 8, 47);
    ctx.font = "1em Arial";
    ctx.strokeText("8", 38, 47);
    ctx.font = "1em Arial";
    ctx.strokeText("9", 68, 47);
    ctx.font = "1em Arial";
    ctx.strokeText("10", 94, 47);
    ctx.font = "1em Arial";
    ctx.strokeText("11", 124, 47);
    ctx.font = "1em Arial";
    ctx.strokeText("12", 154, 47);
    ctx.fillStyle = "#476cd1";
}
