$(document).ready(function () {
    window.questions = ["Question 1 text", "Question 2 text", "Question 3 text", "Question 4 text", "Question 5 text", "Question 6 text", "Question 7 text"];
    window.thisQuestion = 0;
    $("#question").text(questions[thisQuestion]);
    $(".likert").show();

});

function nextQuestion() {
    if (thisQuestion <= questions.length) {
        thisQuestion++;
        $("#question").text(questions[thisQuestion]);
    }
    else {
        $("#question").text("End of Questionnaire");
        $(".likert").hide();
    }
    }