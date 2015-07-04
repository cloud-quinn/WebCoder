
var badges = new Array('<img src="/Content/images/1.png" />', '<img src="/Content/images/2.png" />', '<img src="/Content/images/3.png" />', '<img src="/Content/images/4.png" />', '<img src="/Content/images/5.png" />', '<img src="/Content/images/6.png" />', '<img src="/Content/images/7.png" />', '<img src="/Content/images/8.png" />', '<img src="/Content/images/9.png" />', '<img src="/Content/images/10.png" />', '<img src="/Content/images/11.png" />', '<img src="/Content/images/12.png" />');

var currentBadge = 0;
var missingP = "Your web page needs a paragraph of text, e.g. <p>Hello World</p>.";
var missingH1 = "Your web page needs a heading, e.g. <h1>My Website</h1>";
var missingA = "Your web page needs a link, e.g. <a href='http://www.webcoder.org.uk'>Visit WebCoder</a>.";
var missingIMG = "Your web page needs an image, e.g. <img src='mug.png' alt='a lovely coffee mug for super coders' />.";
var emptyP = "Make sure you type some words between <p> and </p> to make a paragraph. For example: <p>Hello World</p>.";
var emptyH1 = "Make sure you type some words between <h1> and </h1> to make a heading. For example: <h1>My Site</h1>.";
var emptyAlink = "Make sure you type a valid hyperlink after <a href='. For example: <a href='http://www.webcoder.org.uk'>Visit WebCoder</a>.";
var emptyAtext = "Make sure you type some text just before the </a>. For example: <a href='http://www.webcoder.org.uk'>Visit WebCoder</a>.";
var emptyIMGlink = "Make sure you type a valid image address after <img src='. For example: <img src='mug.png' alt='a lovely coffee mug for super coders' />.";
var emptyIMGtext = "Make sure you type some text just after the alt=. For example: <img src='mug.png' alt='a lovely coffee mug for super coders' />.";
var emptyPstyle = "Make sure you give the paragraph a style after the p {. For example: p { font-family: Arial; }.";
var missingStyle = "You need to add some more styles: look again at the instructions.";
var emptyH1style = "Make sure you give the header a style after the h1 {. For example: h1 { color: blue; }.";
var emptyIMGstyle = "Make sure you give the image a style after the img {. For example: img { float: right; }.";
var emptyAstyle = "Make sure you give the link a style after the a {. For example: a { margin-left: 40px; }.";
var missingColon = "Did you remember to add a colon in the middle of the style? For example: font-family: Arial;.";
var missingSemicolon = "Did you remember to add a semicolon to the end of the style? For example: font-family: Arial;.";
var invalidColor = "Did you remember to set a value for color? For example: color: red;.";
var invalidFont = "Did you remember to set a value for font-family? For example: font-family: Arial;.";
var invalidFloat = "Did you remember to set a value of 'left' or 'right' for float? For example: float: left;.";
var invalidMargin = "Did you remember to set a number value in pixels? For example, margin: 50px 0px 0px 0px;.";
var pRequired;
var hRequired;
var aRequired;
var iRequired;
var badge;
var pCSS;
var hCSS;
var aCSS;
var iCSS;
var pCSSreq;
var hCSSreq;
var aCSSreq;
var iCSSreq;

setUpTask = function () {

    //set number of p, h1, a, and img tags required for each task
    //indicate if task carries a badge

    if (thisActivity == 0) {
        badge = false;
        pRequired = 0;
        hRequired = 0;
        aRequired = 0;
        iRequired = 0;
        pCSSreq = 0;
        hCSSreq = 0;
        aCSSreq = 0;
        iCSSreq = 0;
    }

    if (thisActivity == 1) {
        badge = true;
        pRequired = 1;
        hRequired = 0;
        aRequired = 0;
        iRequired = 0;
        $("#example").show();
    }

    if (thisActivity == 2) {
        badge = true;
        pRequired = 1;
        hRequired = 1;
        aRequired = 0;
        iRequired = 0;
    }

    if (thisActivity == 3) {
        badge = true;
        pRequired = 0;
        hRequired = 0;
        aRequired = 1;
        iRequired = 0;
    }

    if (thisActivity == 4) {
        badge = false;
        pRequired = 1;
        hRequired = 1;
        aRequired = 1;
        iRequired = 0;
    }

    if (thisActivity == 5) {
        badge = true;
        pRequired = 0;
        hRequired = 0;
        aRequired = 0;
        iRequired = 1;
        $(".imgs").show();
    }

    if (thisActivity == 6) {
        badge = false;
        pRequired = 0;
        hRequired = 1;
        aRequired = 0;
        iRequired = 1;
        $(".imgs").show();
    }

    if (thisActivity == 7) {
        badge = true;
        pRequired = 1;
        hRequired = 1;
        aRequired = 1;
        iRequired = 1;
        $(".imgs").show();
    }

    if (thisActivity == 8) {
        badge = true;
        pCSSreq = 1;
        hCSSreq = 0;
        aCSSreq = 0;
        iCSSreq = 0;
        $(".imgs").hide();
    }

    if (thisActivity == 9) {
        badge = true;
        pCSSreq = 0;
        hCSSreq = 1;
        aCSSreq = 0;
        iCSSreq = 0;
        $(".imgs").hide();
    }

    if (thisActivity == 10) {
        badge = false;
        pCSSreq = 1;
        hCSSreq = 1;
        aCSSreq = 0;
        iCSSreq = 0;
        $(".imgs").hide();
    }

    if (thisActivity == 11) {
        badge = true;
        pCSSreq = 0;
        hCSSreq = 0;
        aCSSreq = 0;
        iCSSreq = 1;
        $(".imgs").hide();
    }

    if (thisActivity == 12) {
        badge = false;
        pCSSreq = 0;
        hCSSreq = 0;
        aCSSreq = 0;
        iCSSreq = 1;
        $(".imgs").hide();
    }

    if (thisActivity == 13) {
        badge = true;
        pCSSreq = 0;
        hCSSreq = 1;
        aCSSreq = 0;
        iCSSreq = 0;
        $(".imgs").hide();
    }

    if (thisActivity == 14) {
        badge = false;
        pCSSreq = 0;
        hCSSreq = 0;
        aCSSreq = 1;
        iCSSreq = 1;
        $(".imgs").hide();
    }

    if (thisActivity == 15) {
        badge = false;
        pCSSreq = 1;
        hCSSreq = 1;
        aCSSreq = 1;
        iCSSreq = 1;
        $(".imgs").hide();
        $("#example").hide();
        missingP = "You seem to be missing a paragraph.";
        missingH1 = "You seem to be missing a heading.";
        missingA = "You seem to be missing a link.";
        missingIMG = "You seem to be missing an image.";
    }

    if (thisActivity == 16) {
        badge = false;
        pCSSreq = 0;
        hCSSreq = 1;
        aCSSreq = 0;
        iCSSreq = 0;
        $(".imgs").hide();
        $("#example").hide();
    }

    if (thisActivity == 17) {
        badge = true;
        pCSSreq = 1;
        hCSSreq = 1;
        aCSSreq = 0;
        iCSSreq = 0;
        $(".imgs").hide();
        $("#example").hide();
    }

    if (thisActivity == 18) {
        badge = false;
        pRequired = 1;
        hRequired = 1;
        aRequired = 1;
        iRequired = 1;
        $(".imgs").show();
        $("#example").hide();
    }

    if (thisActivity == 19) {
        badge = true;
        pRequired = 1;
        hRequired = 1;
        aRequired = 1;
        iRequired = 1;
        $("#example").hide();
    }

    if (thisActivity == 20) {
        badge = true;
        pCSSreq = 1;
        hCSSreq = 1;
        aCSSreq = 1;
        iCSSreq = 1;
        $(".imgs").hide();
        $("#example").hide();
        missingStyle = "Make sure you give all of the elements a style.";
    }
}

function checkCode() {
    var output = $("iframe.col-md-12").contents();
    getCode(); //update array of code contents    
    var aMove = false;
    var iMove = false;

    //keep track of characters for caret positioning
    var chars = 0;

    //HTML validation
    if (mode == "HTML") {

        //find how many p, h1, img, and a tags exist in the output
        var hOutput = output.find("h1").length;
        var pOutput = output.find("p").length;
        var iOutput = output.find("img").length;
        var aOutput = output.find("a").length;

        //store number of validated p, h1, img, and a tags in the code
        var p = 0;
        var h = 0;
        var a = 0;
        var img = 0;



        for (i = 0; i < line.length; i++) {

            //stop counting chars if adjustment is needed
            if (aMove == false && iMove == false) {
                chars += line[i].length;
            }

            //find char values at positions following tag identifying character(s), e.g. "p", "h1"
            var tag = line[i].charAt(1);
            var c1 = line[i].charAt(2);
            var c2 = line[i].charAt(3);
            var c3 = line[i].charAt(4);
            var c4 = line[i].charAt(5);
            var c5 = line[i].charAt(6);
            var c6 = line[i].charAt(7);

            //validate P
            if (pRequired > 0 && pOutput > 0) {
                if (tag == "p") {
                    if (c1 == ">" && c2 == "<") {
                        $("#dialog-text").text(emptyP); //p is empty, generate error
                        $(".codeArea").focus();
                    }
                    else {
                        p++; //p is valid, increment by 1
                    }
                }
            }
            if (pRequired > 0 && pOutput == 0) {
                $("#dialog-text").text(missingP); //no p tag found, generate error
            }

            //validate H1
            if (hRequired > 0 && hOutput > 0) {
                if (tag == "h" && c1 == "1") {
                    if (c2 == ">" && c3 == "<") {
                        $("#dialog-text").text(emptyH1); //h1 is empty, generate error
                    }
                    else {
                        h++;
                    }
                }
            }
            if (hRequired > 0 && hOutput == 0) {
                $("#dialog-text").text(missingH1); //no h1 tag found, generate error
            }


            //validate a
            if (aRequired > 0 && aOutput > 0) {

                if (tag == "a" && c2 == "h" && c3 == "r" && c4 == "e" && c5 == "f" && c6 == "=") {
                    var tagLine = line[i];

                    //search the line for the website prefix
                    if (tagLine.includes("http://www.")) {

                        //search the line for a valid domain extension
                        var domains = [".com", ".co.uk", ".org", ".info", ".edu", ".gov", ".biz", ".net", ".eu"];
                        var validDomains = 0;
                        for (x = 0; x < domains.length; x++) {
                            if (tagLine.includes(domains[x])) {
                                validDomains++;
                            }
                        }

                        //search the tag for hyperlink text content 
                        if (tagLine.charAt(tagLine.length - 4) == "<" && tagLine.charAt(tagLine.length - 5) == ">") {
                            var linkText = false;
                        }
                        else {
                            linkText = true;
                        }

                        //validate link if domain and text included
                        if (validDomains > 0 && linkText == true) {
                            a++;
                        }

                        if (validDomains > 0 && linkText == false) {
                            aMove = true;
                            $("#dialog-text").text(emptyAtext); //a is empty or incomplete, generate error
                        }

                        else {
                            $("#dialog-text").text(emptyAlink);
                        }
                    }

                    else {
                        $("#dialog-text").text(emptyAlink);
                    }
                }
            }
            if (aRequired > 0 && aOutput == 0) {
                $("#dialog-text").text(missingA); //no a tag found, generate error
            }


            //validate img
            if (iRequired > 0 && iOutput > 0) {
                if (tag == "i" && c1 == "m" && c2 == "g" && c4 == "s" && c5 == "r" && c6 == "c") {
                    var tagLn = line[i];

                    //search the line for added content
                    if (tagLn.length > 25) {

                        //search the line for a valid image extension
                        var exts = [".png", ".jpg", ".bmp", ".gif", ".tiff"];
                        var validExts = 0;
                        for (y = 0; y < exts.length; y++) {
                            if (tagLn.includes(exts[y])) {
                                validExts++;
                            }
                        }

                        //search the tag for alt content 
                        if (tagLn.includes("alt")) {
                        if (tagLn.charAt(tagLn.length - 4) == "'" && tagLn.charAt(tagLn.length - 5) == "'") {
                            var altText = false;
                        }
                        else if (tagLn.charAt(tagLn.length - 4) == " " || tagLn.charAt(tagLn.length - 5) == " ") {
                            var altText = false;
                        }
                        else {
                            altText = true;
                        }
                        }

                        //validate image if src and alt values included
                        if (validExts > 0 && altText == true) {
                            img++;
                        }

                        if (validExts > 0 && altText == false) {
                            iMove = true;
                            $("#dialog-text").text(emptyIMGtext); //image is empty or incomplete, generate error
                        }

                        else {
                            $("#dialog-text").text(emptyIMGlink);
                        }
                    }

                    else {
                        $("#dialog-text").text(emptyIMGlink);
                    }
                }
            }
            if (iRequired > 0 && iOutput == 0) {
                $("#dialog-text").text(missingIMG); //no img tag found, generate error
            }

            if (iRequired > 0 && iOutput == 0) {
                $("#dialog-text").text(missingIMG); //no img tag found, generate error
            }


        }

    }

    //validate CSS
    if (mode == "CSS") {
        //store number of validated p, h1, img, and a style tags in the CSS code
        pCSS = 0;
        hCSS = 0;
        aCSS = 0;
        iCSS = 0;
        $("#dialog-text").text(missingStyle);
        //pCSSreq = 0;
        //hCSSreq = 0;
        //aCSSreq = 0;
        //iCSSreq = 1;

        //keep track of characters for caret positioning
        var charsCSS = 0;

        //getCode(); //update array of code contents

        for (c = 0; c < line.length; c++) {

            //stop counting chars if adjustment is needed
            //if (aMove == false && iMove == false) {
            charsCSS += line[c].length;
            //}

            //find char values at positions following tag identifying character(s), e.g. "p", "h1"
            var cTag = line[c].charAt(0);
            var t1 = line[c].charAt(1);
            var t2 = line[c].charAt(2);
            var t3 = line[c].charAt(3);
            var t4 = line[c].charAt(4);
            var t5 = line[c].charAt(5);
            var t6 = line[c].charAt(6);

            //allowed styles
            var styles = ["color", "font-family", "float", "margin"];

            //validate P styles     
            if (pCSSreq > 0) {
                if (cTag == "p") {
                    p++;
                    //check color styles
                    if (line[c + 1].includes(styles[0])) {
                        if (validateColors(line[c + 1])) {
                            pCSS += 1;
                        }
                    }

                        //check font styles
                    else if (line[c + 1].includes(styles[1])) {
                        if (validateFonts(line[c + 1])) {
                            pCSS += 1;
                        }
                    }

                        //check floats
                    else if (line[c + 1].includes(styles[2])) {
                        if (validateFloats(line[c + 1])) {
                            pCSS += 1;
                        }
                    }

                        //check margins
                    else if (line[c + 1].includes(styles[3])) {
                        if (validateMargins(line[c + 1])) {
                            pCSS += 1;
                        }
                    }

                    else {
                        $("#dialog-text").text(emptyPstyle);
                    }
                }

            }

            //validate H1 styles
            if (hCSSreq > 0) {
                if (cTag == "h" && t1 == "1") {
                    //check color styles
                    if (line[c + 1].includes(styles[0])) {
                        if (validateColors(line[c + 1])) {
                            hCSS += 1;
                        }
                    }

                        //check font styles
                    else if (line[c + 1].includes(styles[1])) {
                        if (validateFonts(line[c + 1])) {
                            hCSS += 1;
                        }
                    }

                        //check floats
                    else if (line[c + 1].includes(styles[2])) {
                        if (validateFloats(line[c + 1])) {
                            hCSS += 1;
                        }
                    }

                        //check margins
                    else if (line[c + 1].includes(styles[3])) {
                        if (validateMargins(line[c + 1])) {
                            hCSS += 1;
                        }
                    }

                    else {
                        $("#dialog-text").text(emptyH1style);
                    }

                }

                //else {
                //    $("#dialog-text").text(errorText + " " + missingPstyle);
                //}
            }

            //validate A styles
            if (aCSSreq > 0) {
                if (cTag == "a") {
                    //check color styles
                    if (line[c + 1].includes(styles[0])) {
                        if (validateColors(line[c + 1])) {
                            aCSS += 1;
                        }
                    }

                        //check font styles
                    else if (line[c + 1].includes(styles[1])) {
                        if (validateFonts(line[c + 1])) {
                            aCSS += 1;
                        }
                    }

                        //check floats
                    else if (line[c + 1].includes(styles[2])) {
                        if (validateFloats(line[c + 1])) {
                            aCSS += 1;
                        }
                    }

                        //check margins
                    else if (line[c + 1].includes(styles[3])) {
                        if (validateMargins(line[c + 1])) {
                            aCSS += 1;
                        }
                    }

                    else {
                        $("#dialog-text").text(emptyAstyle);
                    }

                }
            }

            //validate IMG styles
            if (iCSSreq > 0) {
                if (cTag == "i" && t1 == "m" && t2 == "g") {
                    //check color styles
                    if (line[c + 1].includes(styles[0])) {
                        if (validateColors(line[c + 1])) {
                            iCSS += 1;
                        }
                    }

                        //check font styles
                    else if (line[c + 1].includes(styles[1])) {
                        if (validateFonts(line[c + 1])) {
                            iCSS += 1;
                        }
                    }

                        //check floats
                    else if (line[c + 1].includes(styles[2])) {
                        if (validateFloats(line[c + 1])) {
                            iCSS += 1;
                        }
                    }

                        //check margins
                    else if (line[c + 1].includes(styles[3])) {
                        if (validateMargins(line[c + 1])) {
                            iCSS += 1;
                        }
                    }

                    else {
                        $("#dialog-text").text(emptyIMGstyle);
                    }

                }

            }

        }
    }

    if (p >= pRequired && h >= hRequired && a >= aRequired && img >= iRequired || pCSS >= pCSSreq && hCSS >= hCSSreq && aCSS >= aCSSreq && iCSS >= iCSSreq) { // ) {
        //success
        successDialog();
    }

    else {
        //error
        failureDialog();
    }

};

function validateColors(checkable) {
    var colorValid = false;
    var colors = ["black", "navy", "blue", "teal", "turquoise", "green", "lime", "skyblue", "cyan", "purple", "maroon", "red", "orange", "tan", "silver", "pink", "yellow", "white"];
    for (cl = 0; cl < colors.length; cl++) {
        if (checkable.includes(colors[cl])) {
            var colorValid = true;
        }
    }
    if (colorValid == true) {
        if (checkable.includes(":")) {
            if (checkable.includes(";")) {
                return true;
            }
            else {
                $("#dialog-text").text(missingSemicolon);
                failureDialog();
            }
        }
        else {
            $("#dialog-text").text(missingColon);
            failureDialog();
        }
    }
    else {
        $("#dialog-text").text(invalidColor);
        failureDialog();
    }
}

function validateFonts(checkable) {
    var fontValid = false;
    var fonts = ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Sans Unicode", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"];
    for (f = 0; f < fonts.length; f++) {
        if (checkable.includes(fonts[f])) {
            var fontValid = true;
        }
    }
    if (fontValid == true) {
        if (checkable.includes(":")) {
            if (checkable.includes(";")) {
                return true;
            }
            else {
                $("#dialog-text").text(missingSemicolon);
                failureDialog();
            }
        }
        else {
            $("#dialog-text").text(missingColon);
            failureDialog();
        }
    }
    else {
        $("#dialog-text").text(invalidFont);
        failureDialog();
    }
}

function validateFloats(checkable) {
    var floatValid = false;
    var floats = ["left", "right"];
    for (fl = 0; fl < floats.length; fl++) {
        if (checkable.includes(floats[fl])) {
            var floatValid = true;
        }
    }
    if (floatValid == true) {
        if (checkable.includes(":")) {
            if (checkable.includes(";")) {
                return true;
            }
            else {
                $("#dialog-text").text(missingSemicolon);
            }
        }
        else {
            $("#dialog-text").text(missingColon);
        }
    }
    else {
        $("#dialog-text").text(invalidFloat);
    }
}

function validateMargins(checkable) {
    var marginValid = false;

    for (m = 0; m < checkable.length; m++) {
        if (checkable.charAt(m) == "p") {
            if (checkable.charAt(m + 1) == "x") {
                for (v = 0; v < 10; v++) {
                    if (checkable.charAt(m - 1) == v) {
                        var marginValid = true;
                    }
                }
            }
        }
    }
    if (marginValid == true) {
        if (checkable.includes(":")) {
            if (checkable.includes(";")) {
                return true;
            }
            else {
                $("#dialog-text").text(missingSemicolon);
            }
        }
        else {
            $("#dialog-text").text(missingColon);
        }
    }
    else {
        $("#dialog-text").text(invalidMargin);
    }
}


function successDialog() {
    $("#dialog-success").dialog({
        modal: true,
        buttons: {
            OK: function () {
                $(this).dialog("close");
                if (badge == true) {
                    //addBadgefunction 
                    addBadge();
                    $("#badgeImg").empty();
                    $("#badgeImg").append(badges[currentBadge]);
                    currentBadge++;
                    $("#dialog-badge").dialog({
                        modal: true,
                        buttons: {
                            OK: function () {
                                $(this).dialog("close");
                                if (thisActivity == 21) {
                                    $("#dialog-success").text("Congratulations, you completed the tutorial. We hope you enjoyed it.");
                                    $("#dialog-success").dialog({
                                        modal: true,
                                        buttons: {
                                            OK: function () {
                                                $(this).dialog("close");
                                                //return to research site at end of tutorial
                                                window.location.href = "http://localhost:65399/Home/TutorialComplete";
                                            }
                                        }
                                    });
                                }
                            }
                        }

                    });
                }
                if (thisActivity < 21) {
                    updateAll();
                }
            }
        }

    });
}

function failureDialog() {
    $("#dialog-failure").dialog({
        modal: true,
        buttons: {
            OK: function () {
                $(this).dialog("close");
                //if (mode == "HTML" && (aMove == true || iMove == true)) {
                if (mode == "HTML") {
                    $("#htmlCode").setCaretPosition(chars + 2);
                }
                $(".codeArea").focus();
            }
        }

    });
}