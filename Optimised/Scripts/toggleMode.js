window.mode = "";

//HTML mode can be accessed via its tab 
function toggleHTML() {
    if (thisActivity <= 7 || thisActivity >= 18) {
        window.mode = "HTML";
        $("#toggle-HTML").css("font-weight", "bold");
        $("#toggle-CSS").css("font-weight", "normal");
    //setLineNums();
    $("#htmlCode").show();
    $("#cssCode").hide();
    $(".css").hide();
    }
    else {
        $("#dialog-otherErrors").text("You still have a few things to learn on CSS - then you can add some more HTML.")
        $("#dialog-otherErrors").dialog({
            modal: true,
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }
        });
    }
}

//CSS mode can be accessed from Activity 8 onwards
function toggleCSS() {
    if (thisActivity >= 8) {
        window.mode = "CSS";
        //setLineNums();
        $("#toggle-CSS").css("font-weight", "bold");
        $("#toggle-HTML").css("font-weight", "normal");
        $("#cssCode").show();
        $(".css").show();
        $("#htmlCode").hide();
    }
    else {
        $("#dialog-otherErrors").text("Love your enthusiasm, but you need to learn HTML before you can learn CSS! Don't worry, it won't take long.")
        $("#dialog-otherErrors").dialog({
            modal: true,
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }
        });
    }
}

