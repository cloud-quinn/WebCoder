window.mode = "HTML";

//HTML mode can be accessed via its tab 
function toggleHTML() {
        window.mode = "HTML";
        $("#toggle-HTML").css("font-weight", "bold");
        $("#toggle-CSS").css("font-weight", "normal");
    $("#htmlCode").show();
    $("#cssCode").hide();
    $(".css").hide();
    }


//CSS mode can be accessed via its tab
function toggleCSS() {
        window.mode = "CSS";
        $("#toggle-CSS").css("font-weight", "bold");
        $("#toggle-HTML").css("font-weight", "normal");
        $("#cssCode").show();
        $(".css").show();
        $("#htmlCode").hide();
    }
    


