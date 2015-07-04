
var score = 0; //User will score out of 8 for the test
var answers = []; //array of correct and incorrect responses

function checkCode() {
        validateHTML();
        validateCSS();
        window.score;

        //save score to database from Home Controller
        $.post("/Home/SaveScore", { Score: score, Answers: answers }, function () {
            window.location.href = "/Home/TestComplete";
        });
}

function validateHTML() {
    var output = $("iframe.col-md-12").contents();
    var code = $("#htmlCode").val();
    var line = [];
    line = code.split("/n");

    //find how many p, h1, img, and a tags exist in the output
    var hOutput = output.find("h1").length;
    var pOutput = output.find("p").length;
    var iOutput = output.find("img").length;
    var aOutput = output.find("a").length;

    if (hOutput > 0) {
        output.find("h1").each(function (index) {
            if ($(this).text() != "") {
                score += 1;
                answers.push("true");
            }
            else {
                answers.push("false");
            }
            
        });
    }
        else {
                answers.push("false");
            }

    if (pOutput > 0) {
        output.find("p").each(function (index) {
            if ($(this).text() != "") {
                score += 1;
                answers.push("true");
            }
            else {
                answers.push("false");
            }
        });
    }
        else {
            answers.push("false");
        }

    if (iOutput > 0) {
        output.find("img").each(function (index) {
            if ($(this).attr("alt") != "" && ($(this).attr("src") == "mug.png" || $(this).attr("src") == "hat.png" || $(this).attr("src") == "t-shirt.png")) {
                score += 1;
                answers.push("true");
            }
            else {
                answers.push("false");
            }
        });
    }
        else {
                answers.push("false");
        }

    if (aOutput > 0) {
        output.find("a").each(function (index) {
            if ($(this).attr("href") != "" && $(this).text() != "") {
                score += 1;
                answers.push("true");
            }
            else {
                answers.push("false");
            }
        });
    }
    else {
        answers.push("false");
    }
}

function validateCSS() {
    var output = $("iframe.col-md-12").contents();
    var style = output.find("style").text();
    var styles = style.split("}");
    var hPos; //identify which section of code contains an h1
    var pPos; //identify which section of code contains a p
    var iPos; //identify which section of code contains an img
    var aPos; //identify which section of code contains an a

    for (i = 0; i < styles.length; i++) {
        if (styles[i].search("h1 {") >= 0) {
            hPos = i;
        }
        if (styles[i].search("p {") >= 0) {
            pPos = i;
        }
        if (styles[i].search("img {") >= 0) {
            iPos = i;
        }
        if (styles[i].search("a {") >= 0) {
            aPos = i;
        }
    }

    if (hPos >= 0 && styles[hPos].search("color") >= 0 && styles[hPos].search(":") >= 0 && styles[hPos].search("color") >= 0 && styles[hPos].search(";") >= 0) {
        score += 1;
        answers.push("true");
    }

    else {
        answers.push("false");
    }

    if (pPos >= 0 && styles[pPos].search("font-family") >= 0 && styles[pPos].search(":") >= 0 && styles[pPos].search("Arial") >= 0 && styles[pPos].search(";") >= 0) {
        score += 1;
        answers.push("true");
    }

    else {
        answers.push("false");
    }

    if (iPos >= 0 && styles[iPos].search("float") >= 0 && styles[iPos].search(":") >= 0 && styles[iPos].search("right") >= 0 && styles[iPos].search(";") >= 0) {
        score += 1;
        answers.push("true");
    }

    else {
        answers.push("false");
    }

    if (aPos >= 0 && styles[aPos].search("margin") >= 0 && styles[aPos].search(":") >= 0 && styles[aPos].search("40px") >= 0 && styles[aPos].search(";") >= 0) {
        score += 1;
        answers.push("true");
    }

    else {
        answers.push("false");
    }
}