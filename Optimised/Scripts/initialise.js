
$(document).ready(function () {
    //WebCoder doesn't function on mobile devices, but the mobile landing page provides information about the research
    //if ($(window).width() < 1000) {
    //    window.location.replace("www.mobilesite.test" 
    //        )
    //    alert("Going to mobile site")
    //}
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
    setLineNums();

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


    //if (thisActivity == 21) {
    //    $("#instructions").text("Congratulations, you completed the tutorial. We hope you enjoyed it.");
    //    $("#instructions").animate({
    //            effect: fade,
    //        }, 5000, function() {
    //            $("#html").fade();
    //        });
    //}
    //else {
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
//}

$(document).ready(function () {
    //visual cues highlight the controls needed per activity
    var color1 = "#164874";
    var color2 = "#337AB7";
    var color = color1;
    var highlight1 = "1px solid rgb(220, 219, 219)";
    var highlight2 = "1px solid #337AB7";
    var shadow1 = "1px 1px rgb(220, 219, 219)";
    var shadow2 = "1px 1px #337AB7";
    var shadow = shadow1;
    var highlight = highlight1;
    //var toHighlight = $("#hidden");
    var p = "p";
    var h1 = "h1";
    var a = "a";
    var img = "img";
    if (thisActivity == 1 || thisActivity == 2 || thisActivity == 4 || thisActivity == 5 || thisActivity == 7) {
        //    toHighlight = $("#pTag");
        //}
        var bInterval = setInterval(function () { buttonCue() }, 750);

        highlightIcon(p); //amend this to call from setUpTask()

        function clear(toClear) {
            clearInterval(toClear);
        }

        function buttonCue() {
            $(".button").css("background-color", color);
            if (color == color1) {
                color = color2;
            }
            else {
                color = color1;
            }
            if (thisActivity > 0) {
                clear(bInterval);
                $(".button").css("background-color", color2);

            }
        }

        //highlight icon when it is required for the activity
        //this needs to be called from setUpTask(), I think...
        function highlightIcon(toHighlight) {
            if (toHighlight == "p") {
                $("#pTag").css("border", highlight);
                $("#pTag").css("box-shadow", shadow);
            }
            if (highlight == highlight1) {
                highlight = highlight2;
                shadow = shadow2;
            }
            else {
                highlight = highlight1;
                shadow = shadow1;
            }
            setInterval(highlightIcon, 750, p);
        }

        //clear icon when it has been added
        //this needs to be called from generateTag()?
        function clearIcon(toClear) {
            clear(hInterval);
            toHighlight.css("border", highlight1);
            toHighlight.css("box-shadow", shadow1);
        }
    }

});