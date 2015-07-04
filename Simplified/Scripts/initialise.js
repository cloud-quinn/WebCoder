
$(document).ready(function () {
    //WebCoder doesn't function on mobile devices, but the mobile landing page provides information about the research
    if ($(window).width() < 1024) {
        window.location.href("http://localhost:6539/");
    }
    window.thisActivity = 0;
    updateProgress(thisActivity);
    setUpTask();
    loadInstructions(thisActivity);
    populateCSS();
    populateHTML();
    toggleHTML();
    $("#dialog-badge").hide();
    $("#dialog-success").hide();
    $("#dialog-failure").hide();
    $(".imgs").hide();
    $("#dialog-hint").hide();
    $("#example").hide();
    $("#hidden").hide();
    $("#checkCode").hide();
    $("#hintme").hide();
    $("#colors").hide();
    $("#fonts").hide();
    setLineNums();

    $("#hintme").click(function () {
        $("#dialog-hint").dialog({
            modal: true,
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }

        });
    });

    //disable copy paste
    //ref
    $(".codeArea").bind('copy paste cut', function (e) {
        e.preventDefault();
    });

    //warning when page is refreshed
    //Neal. (2011) Jquery detect page refresh [source code] Available from: http://stackoverflow.com/questions/8013429/jquery-detect-page-refresh (Accessed 25 June 2015)

    $(window).bind('beforeunload', function () {
        if (thisActivity < 20) {
            return "If you leave or reload this page, your progress will be lost. Are you sure you want to end the tutorial?";
        }
    });

});

updateAll = function () {
    window.thisActivity++;
    setUpTask(thisActivity);
    updateProgress(thisActivity);
    loadInstructions(thisActivity);
    window.activityCompleted = false;
    setLineNums();
    if (thisActivity == 8) {
        toggleCSS();
        $("#instructions").addClass("col-lg-7 col-md-7 col-sm-7 col-xs-7");
        $("#next").show();
        $("#checkCode").hide();
        $("#example").hide();
    }
    if (thisActivity >= 10) {
        $("#hintme").show();
        $("#colors").show();
        $("#fonts").show();
    }
    if (thisActivity <= 7 || thisActivity == 19) {
        populateHTML();
    }
    if ((thisActivity >= 7 && thisActivity <= 15) || thisActivity == 20) {
        populateCSS();
    }
}


