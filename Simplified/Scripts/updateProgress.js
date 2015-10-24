
function updateProgress(thisActivity) {
    var activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var percentage = ((thisActivity - 1) / activities.length) * 100; //percentage completed
    var progBar = document.getElementById("progress"); //progress element 
    progBar.value = percentage; //fill in progress bar
    var progReport;
    if (thisActivity == 0) {
        progReport = 0 + " of " + activities.length + " activities complete!"; //set text value under progress bar
        $("#success-text").text("Let's go!"); //set text for success dialog
    }
    else {
        progReport = (thisActivity - 1) + " of " + activities.length + " activities complete!" //update text value under progress bar
        $("#success-text").text("Activity complete!"); //set text for success dialog
    }
    $("#progReport").text(progReport);
}


