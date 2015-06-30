window.htmlLength = "";

//initial HTML code provided for the user. CSS will be blank.
populateHTML = function () {
    $("#htmlCode").val(" ");
    var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "\n", "</body>", "\n", "</html>"];
    window.populaterHTML = [];
    for (i = 0; i < htmlStart.length; i++) {
        populaterHTML += (htmlStart[i]);
        htmlLength++;
    }
    $("#htmlCode").val(populaterHTML);
}

//example HTML solution to show the user at the end of the session
exampleHTML = function () {
    var htmlEx = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "<h1>Welcome to my website</h1>", "\n", "<p>This is a paragraph of text about me.</p>", "\n", "<img src='mug.png' alt='a WebCoder coffee mug' />", "\n", "<a href='http://www.webcoder.org.uk'>Visit WebCoder</a>", "\n", "</body>", "\n", "</html>"];
    window.exHTML = [];
    for (i = 0; i < htmlEx.length; i++) {
        exHTML += (htmlEx[i]);
    }
    $("#htmlEx").val(exHTML);
}

//example CSS solution to show the user at the end of the session
exampleCSS = function () {
    var cssEx = ["h1 {", "\n", "color: blue;", "\n", "}", "\n", "\n", "p {", "\n", "font-family: Arial;", "\n", "}", "\n", "\n", "img {", "\n", "float: right;", "\n", "}", "\n", "\n", "a {", "\n", "margin: 40px 0 0 0;", "\n", "}"];
    window.exCSS = [];
    for (i = 0; i < cssEx.length; i++) {
        exCSS += (cssEx[i]);
    }
    $("#cssEx").val(exCSS);
}