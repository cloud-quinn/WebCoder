window.htmlLength = "";
window.cssLength = "";


//initial HTML code provided for the user
populateHTML = function () {
    $("#htmlCode").val(" ");
    var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "</body>", "\n", "</html>"];
    window.populaterHTML = [];
    for (i = 0; i < htmlStart.length; i++) {
        populaterHTML += (htmlStart[i]);
        htmlLength++;
    }
    $("#htmlCode").val(populaterHTML);
}

//initial CSS code provided for the user
populateCSS = function () {
    var cssStart = ["body {", "font-family: Arial;", "color: black;", "}"];
    window.populaterCSS = "";
    for (i = 0; i < cssStart.length; i++) {
        populaterCSS += (cssStart[i]);
        populaterCSS += "\n";
        cssLength++;
    }
    //populaterCSS += "\n";
    $("#cssCode").val(populaterCSS);
}
