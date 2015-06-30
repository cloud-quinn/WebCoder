$(document).ready(function () {
    $('#htmlResult').hide();
    $("#declaration").hide();
    $("#instructions").hide();
    $("#e-mail").hide();

    $("#agreement").click(function () {;
        $("#declaration").dialog({
            modal: true,
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }

        });
    });
    $("#instruct").click(function () {;
        $("#instructions").dialog({
            modal: true,
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }

        });
    });
    $(".mailto").hover(function () {;
        $("#e-mail").show();
    }, function () {
        $("#e-mail").hide();
    });
});


function updateCSS(bc) {
    $("#breadcrumbs li").css("font-weight", "normal");
    $(bc).css("font-weight", "bold");
}