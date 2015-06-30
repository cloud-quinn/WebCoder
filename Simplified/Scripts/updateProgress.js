
function updateProgress(thisActivity) {
    var activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var percentage = ((thisActivity - 1) / activities.length) * 100;
    var progBar = document.getElementById("progress");
    progBar.value = percentage;
    var progReport;
    if (thisActivity == 0) {
        progReport = 0 + " of " + activities.length + " activities complete!";
        $("#success-text").text("Let's go!");
    }
    else {
        progReport = (thisActivity - 1) + " of " + activities.length + " activities complete!"
        $("#success-text").text("Activity complete!");
    }
    $("#progReport").text(progReport);
}


