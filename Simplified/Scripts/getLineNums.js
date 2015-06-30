function setLineNums() {
    $("#lineNums").empty();

    if (mode == "CSS") {
        code = $("#cssCode");
    }

    else {
        code = $("#htmlCode");
    }

    window.lines = code.val().split("\n").length;

    var lineNums = [];
    for (i = 1; i <= lines; i++) {
        var ln = i.toString() + "\n";
        lineNums.push(ln);
    }

    $("#lineNums").append(lineNums);
}

$(document).ready(function () {

    ////disable copy paste
    //$(".codeArea").bind('copy paste cut', function (e) {
    //    e.preventDefault();
    //});

    var rows = $(".codeArea").attr('rows');
    //update line numbers when user presses a key
    $(".codeArea").keydown(function (e) {
        setLineNums();

        
        //if (e.which == "13" && lines >= rows) {
        //    return false;
        //    //    var toSplice = lines - $(".codeArea").attr('rows');
        //    //    lineNums.splice(0, toSplice);
            
        //}
    }

    );
});



