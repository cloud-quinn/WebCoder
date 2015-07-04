
$(document).ready(function () {
    //WebCoder doesn't function on mobile devices, but the mobile landing page provides information about the research
    if ($(window).width() < 1024) {
        window.location.href("http://localhost:6539/")
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
    $("#hint").hide();
    $("#example").hide();
    $("#hidden").hide();
    $("#checkCode").hide();
    setLineNums(); //line numbers not displayed in final solution due to minor bugs but used to inform caret positioning

    //disable copy paste in method similar to that of Varadharaj (2014)
    //Varadharaj V. (2014) Disabling Cut, Copy, and Paste Operations in Textbox and Textarea [source code] Available from: http://www.kvcodes.com/2014/03/disabling-textbox-cut-copy-and-paste-operations/ (Accessed 5 May 2015)
    $(".codeArea").bind('copy paste cut', function (e) {
        e.preventDefault();
    });

    //warning displayed when page is refreshed in method similar to that of Neal (2011)
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
    if (thisActivity <= 7 || thisActivity == 19) {
        populateHTML();
    }
    else if ((thisActivity >= 7 && thisActivity <= 15) || thisActivity == 20) {
        populateCSS();
    }
}
