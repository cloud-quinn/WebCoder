//var centre1 = 70;
//var centre2 = 70;

//"jQuery Set Cursor Position" function by Deering (2013) in "jQuery/HTML5 Input Focus and Cursor Positions" [source code] Available from: http://www.sitepoint.com/jqueryhtml5-input-focus-cursor-positions/ (Accessed 14 May 2015)
$.fn.setCaretPosition = function (caretPos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(caretPos, caretPos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', caretPos);
            range.moveStart('character', caretPos);
            range.select();

        }
    });
    return this;

};

//some methods similar to Kester, S. (2008) jQuery Example: Inserting text with drag n’ drop [source code] Available from: http://skfox.com/2008/11/26/jquery-example-inserting-text-with-drag-n-drop/ (Accessed 2 May 2015)
$(document).ready(function () {
    var characters = 0; //track number of characters currently in code
    window.code;
    window.line = [];
    var lineOn = 0; //track number of lines currently in code
    var totalChars = 0;

    //store current code line by line in strings
    getCode = function () {
        if (mode == "CSS") {
            code = $("#cssCode").val();
        }
        else {
            code = $("#htmlCode").val();
        }
        line = code.split("\n");
    }

    //disable drag drop for final 5 activities to prompt independent coding
    checkStage = function () {
        if (thisActivity >= 16) {
            $(".html").removeClass("draggable");
            $(".html").removeClass("ui-draggable");
            $(".html").removeClass("ui-draggable-handle");
            $(".css").removeClass("draggable");
            $(".css").removeClass("ui-draggable");
            $(".css").removeClass("ui-draggable-handle");
            $(".html").addClass("hoverable");
            $(".css").addClass("hoverable");
            //provide tag hint when mouse hovers over icon
            $(".hoverable").hover(function () {
                var hint = $(this).attr("data-tagtype");
                if (mode == "CSS") {
                    if ($(this).attr("id") == "pTag") hint = "p { }";
                    else if ($(this).attr("id") == "h1Tag") hint = "h1 { }";
                    else if ($(this).attr("id") == "aTag") hint = "a { }";
                    else if ($(this).attr("id") == "imgTag") hint = "img { }";
                }
                $("#hint").text(hint);
                $("#hint").show();
            }, function () {
                $("#hint").hide();
            });
        }
    }

    //make icons draggable onto code area
    $(".draggable").draggable({
        revert: true,
    });

    //track mouse cursor position in terms of code: number of lines and characters so far
    $(".draggable").mousemove(function (event) {
        characters = 0;
        totalChars = 0;
        var lineHeight = ($(".lineNums").css("line-height"));
        lineHeight = lineHeight.substring(0, 3);
        var lineLengthArray = [];
        getCode();
        var yPos = event.pageY;
        var position = $(".codeArea").position();
        var topOfCode = position.top;
        lineOn = parseInt((yPos - topOfCode) / lineHeight);
        //lineOn = (yPos - topOfCode) / lineHeight;
        if (lineOn >= 0 && lineOn <= lines) {
            characters = line[lineOn].length;
        }
    });

    //generate tag when icon dropped
    $(".codeArea").droppable({
        accept: ".draggable",
        drop: function (ev, ui) {
            var caretPos = 0;
            var htmlTxt = $("#htmlCode").val();
            var cssTxt = $("#cssCode").val();
            var htmlToAdd = "";
            var cssToAdd = "";
            var correctToBody = 0;
            var correctCaretBy = 0;

            if (lineOn < 5) {
                for (i = lineOn; i <= 5; i++) {
                    lineOn++;
                }
            }

            if (lineOn >= (line.length - 2)) {
                for (i = lineOn; i >= (line.length - 2) ; i--) {
                    lineOn--;
                }
            }

            for (i = lineOn; i >= 0; i--) {
                caretPos += line[i].length + 1;
            }

            if (mode == "HTML") {
                htmlToAdd = $(ui.draggable).attr("data-tagtype") + "\n";
                $("#htmlCode").val(htmlTxt.substring(0, caretPos) + htmlToAdd + htmlTxt.substring(caretPos));
                if ($(ui.draggable).attr("data-tagtype") == "<p></p>") {
                    correctCaretBy = 3;
                }
                if ($(ui.draggable).attr("data-tagtype") == "<h1></h1>") {
                    correctCaretBy = 4;
                }
                if ($(ui.draggable).attr("data-tagtype") == "<img src='' alt='' />") {
                    correctCaretBy = 10;
                }
                if ($(ui.draggable).attr("data-tagtype") == "<a href=''></a>") {
                    correctCaretBy = 9;
                }
                $("#htmlCode").setCaretPosition(caretPos + correctCaretBy);
                $("#htmlCode").focus();
            }

            //CSS mode requires dialogs for selecting further options, e.g. color value for a p tag
            if (mode == "CSS") {
                var toAdd;
                caretPos += 2;

                $("#cssCode").focus();
                if ($(ui.draggable).attr("data-tagtype") == "<p></p>") {
                    cssToAdd = "\n" + "p {" + "\n" + "\n" + "}" + "\n";
                    correctCaretBy = 5;
                }
                if ($(ui.draggable).attr("data-tagtype") == "<h1></h1>") {
                    cssToAdd = "\n" + "h1 {" + "\n" + "\n" + "}" + "\n";
                    correctCaretBy = 6;
                }
                if ($(ui.draggable).attr("data-tagtype") == "<img src='' alt='' />") {
                    cssToAdd = "\n" + "img {" + "\n" + "\n" + "}" + "\n";
                    correctCaretBy = 7;
                }
                if ($(ui.draggable).attr("data-tagtype") == "<a href=''></a>") {
                    cssToAdd = "\n" + "a {" + "\n" + "\n" + "}" + "\n";
                    correctCaretBy = 5;
                }

                //generate float styles
                if ($(ui.draggable).attr("data-tagtype") == "float: ") {
                    caretPos -= 4;
                    cssToAdd = "\n" + "float: ";
                    $("#dialog-floatChoose").dialog({
                        modal: true,
                        buttons: [{
                            class: "float left",
                            text: "<= Left",
                            //icons: { primary: "ui-icon-arrow-1-w", secondary: "ui-icon-arrow-1-w" }
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "left;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $(".codeArea").focus();
                            }
                        },
                        {
                            class: "float right",
                            text: "Right =>",
                            //icon: ui-icon-arrow-1-e,
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "right;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $(".codeArea").focus();
                            }

                        }]

                    });
                    correctCaretBy = 7;

                }

                //generate color styles
                if ($(ui.draggable).attr("data-tagtype") == "color: ") {
                    caretPos -= 4;
                    cssToAdd = "\n" + "color: ";
                    $("#dialog-colorChoose").text("Black");
                    $("#dialog-colorChoose").dialog({
                        width: 400,
                        modal: true,
                        buttons: [{
                            class: "black color",
                            click: function () {
                                correctCaretBy = 7;
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "black;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Black");
                            }
                        },
                        {
                            class: "navy color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "navy;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Navy");
                            }
                        },
                        {
                            class: "blue color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "blue;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Blue");
                            }
                        },
                        {
                            class: "green color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "green;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Green");
                            }
                        },
                        {
                            class: "teal color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "teal;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Teal");
                            }
                        },
                        {
                            class: "turquoise color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "turquoise;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Turquoise");
                            }
                        },
                        {
                            class: "skyblue color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "skyblue;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Skyblue");
                            }
                        },
                        {
                            class: "lime color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "lime;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Lime");
                            }
                        },
                        {
                            class: "cyan color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "cyan;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Cyan");
                            }
                        },
                        {
                            class: "purple color",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "purple;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                            hover: function () {
                                $("#dialog-colorChoose").text("Purple");
                            }
                        },
                         {
                             class: "maroon color",
                             click: function () {
                                 $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "maroon;" + cssTxt.substring(caretPos));
                                 $(this).dialog("close");
                                 $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                 $("#cssCode").focus();
                             },
                             hover: function () {
                                 $("#dialog-colorChoose").text("Maroon");
                             }
                         },
                          {
                              class: "red color",
                              click: function () {
                                  $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "red;" + cssTxt.substring(caretPos));
                                  $(this).dialog("close");
                                  $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                  $("#cssCode").focus();
                              },
                              hover: function () {
                                  $("#dialog-colorChoose").text("Red");
                              }
                          },
                           {
                               class: "orange color",
                               click: function () {
                                   $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "orange;" + cssTxt.substring(caretPos));
                                   $(this).dialog("close");
                                   $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                   $("#cssCode").focus();
                               },
                               hover: function () {
                                   $("#dialog-colorChoose").text("Orange");
                               }
                           },
                            {
                                class: "tan color",
                                click: function () {
                                    $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "tan;" + cssTxt.substring(caretPos));
                                    $(this).dialog("close");
                                    $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                    $("#cssCode").focus();
                                },
                                hover: function () {
                                    $("#dialog-colorChoose").text("Tan");
                                }
                            },
                             {
                                 class: "silver color",
                                 click: function () {
                                     $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "silver;" + cssTxt.substring(caretPos));
                                     $(this).dialog("close");
                                     $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                     $("#cssCode").focus();
                                 },
                                 hover: function () {
                                     $("#dialog-colorChoose").text("Silver");
                                 }
                             },
                              {
                                  class: "pink color",
                                  click: function () {
                                      $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "pink;" + cssTxt.substring(caretPos));
                                      $(this).dialog("close");
                                      $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                      $("#cssCode").focus();
                                  },
                                  hover: function () {
                                      $("#dialog-colorChoose").text("Pink");
                                  }
                              },
                               {
                                   class: "yellow color",
                                   click: function () {
                                       $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "yellow;" + cssTxt.substring(caretPos));
                                       $(this).dialog("close");
                                       $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                       $("#cssCode").focus();
                                   },
                                   hover: function () {
                                       $("#dialog-colorChoose").text("Yellow");
                                   }
                               },
                                {
                                    class: "white color",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "white;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                    hover: function () {
                                        $("#dialog-colorChoose").text("White");
                                    }
                                },
                        ]
                    });
                    correctCaretBy = 7;
                }

                //generate font styles
                if ($(ui.draggable).attr("data-tagtype") == "font-family: ") {
                    caretPos -= 4;
                    cssToAdd = "\n" + "font-family: ";
                    $("#dialog-fontChoose").dialog({
                        width: 400,
                        modal: true,
                        buttons: [{
                            text: "Arial",
                            class: "Arial font",
                            click: function () {
                                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Arial;" + cssTxt.substring(caretPos));
                                $(this).dialog("close");
                                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                $("#cssCode").focus();
                            },
                        },
                            {
                                text: "Arial Black",
                                class: "ArialBlack font",
                                click: function () {
                                    $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Arial Black;" + cssTxt.substring(caretPos));
                                    $(this).dialog("close");
                                    $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                    $("#cssCode").focus();
                                },
                            },
                                {
                                    text: "Comic Sans MS",
                                    class: "ComicSans font right",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Comic Sans MS;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Courier New",
                                    class: "CourierNew font left",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Courier New;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Georgia",
                                    class: "Georgia font",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Georgia;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Helvetica",
                                    class: "Helvetica font right",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Helvetica;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Impact",
                                    class: "Impact font left",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Impact;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                            {
                                text: "Lucida Sans Unicode",
                                class: "LucidaSans font",
                                click: function () {
                                    $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Lucida Sans Unicode;" + cssTxt.substring(caretPos));
                                    $(this).dialog("close");
                                    $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                    $("#cssCode").focus();
                                },
                            },
                                {
                                    text: "Tahoma",
                                    class: "Tahoma font right",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Tahoma;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Times New Roman",
                                    class: "TimesNewRoman font",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Times New Roman;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Trebuchet MS",
                                    class: "Trebuchet font",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Trebuchet MS;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                                {
                                    text: "Verdana",
                                    class: "Verdana font right",
                                    click: function () {
                                        $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + "Verdana;" + cssTxt.substring(caretPos));
                                        $(this).dialog("close");
                                        $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                        $("#cssCode").focus();
                                    },
                                },
                        ]
                    });
                    correctCaretBy = 14;

                }

                //generate margin styles
                //moveable canvas illustrates size of margin
                function margCanvas() {
                    $("#dialog-marginChoose").find("canvas").remove();
                    window.canvas = document.createElement("canvas");
                    canvas.height = canvas.width = 180;
                    var box = canvas.getContext("2d");
                    box.font = "1.1em Arial";
                    box.strokeText(margTop, centre1, 10);
                    box.moveTo(x1, y1);
                    box.lineTo(x2, y2);
                    box.stroke();
                    box.font = "1.1em Arial";
                    box.strokeText(margRight, 140, 75);
                    box.moveTo(x3, y3);
                    box.lineTo(x4, y4);
                    box.font = "1.1em Arial";
                    box.strokeText(margBottom, centre2, 147);
                    box.moveTo(x5, y5);
                    box.lineTo(x6, y6);
                    box.stroke();
                    box.font = "1.1em Arial";
                    box.strokeText(margLeft, 5, 75);
                    box.moveTo(x7, y7);
                    box.lineTo(x8, y8);
                    box.stroke();
                    $("#dialog-marginChoose").append(canvas);
                }
              
                if ($(ui.draggable).attr("data-tagtype") == "margin: ") {
                    var margTop = 0; //value set for top margin
                    var margRight = 0; // "" right margin
                    var margBottom = 0; // "" botton margin
                    var margLeft = 0; // "" left margin
                    var centre1 = 70; //position of top margin numeric value
                    var centre2 = 70; // "" bottom margin ""
                    var x1 = 15; //starting x position for top margin
                    var y1 = 15; //starting y position for top margin
                    var x2 = 135; //ending x position for top margin
                    var y2 = 15; //ending y position for top margin
                    var x3 = 135; //starting x: right
                    var y3 = 15; //starting y: right
                    var x4 = 135; //ending x: right
                    var y4 = 135; //ending y: right
                    var x5 = 135; // "" bottom
                    var y5 = 135;
                    var x6 = 15;
                    var y6 = 135;
                    var x7 = 15; // "" left
                    var y7 = 135;
                    var x8 = 15;
                    var y8 = 15;
                    margCanvas();
                    var tclicks = 0; //record pixels added to margin through + and - button clicks //top
                    var bclicks = 0; //bottom
                    caretPos -= 4;
                    cssToAdd = "\n" + "margin: ";
                    $("#dialog-marginChoose").dialog({
                        width: 400,
                        modal: true,
                        buttons: [{ // click to edit top margin
                            text: "+",
                            class: "margin topM plus",
                            click: function () {
                                if (margTop >= 0) {
                                    margTop++;
                                    y1++;
                                    y2++;
                                    tclicks++;
                                    if (tclicks >= 10) {
                                        centre1 = 67;
                                    }
                                    margCanvas();
                                }
                            },
                        },
                            {
                                text: "-",
                                class: "margin topM minus",
                                click: function () {
                                    if (margTop > 0) {
                                        margTop--;
                                        y1--;
                                        y2--;
                                        tclicks--;
                                        if (tclicks <= 10) {
                                            centre1 = 70;
                                        }
                                        margCanvas();
                                    }

                                },
                            },

                            //right margin
                            {
                                text: "+",
                                class: "margin rightM plus1",
                                click: function () {
                                    if (margRight >= 0) {
                                        margRight++;
                                        x3--;
                                        x4--;
                                        margCanvas();
                                    }

                                },
                            },
                            {
                                text: "-",
                                class: "margin rightM minus1",
                                click: function () {
                                    if (margRight > 0) {
                                        margRight--;
                                        x3++;
                                        x4++;
                                        margCanvas();
                                    }

                                },
                            },

                            //bottom margin
                            {
                                text: "+",
                                class: "margin bottomM plus",
                                click: function () {
                                    if (margBottom >= 0) {
                                        margBottom++;
                                        y5--;
                                        y6--;
                                        bclicks++;
                                        if (bclicks >= 10) {
                                            centre2 = 67;
                                        }
                                        margCanvas();
                                    }
                                },
                            },
                            {
                                text: "-",
                                class: "margin bottomM minus",
                                click: function () {
                                    if (margBottom > 0) {
                                        margBottom--;
                                        y5++;
                                        y6++;
                                        bclicks--;
                                        if (bclicks <= 10) {
                                            centre2 = 70;
                                        }
                                        margCanvas();
                                    }
                                },
                            },

                            //left margin
                            {
                                text: "+",
                                class: "margin leftM plus1",
                                click: function () {
                                    if (margLeft >= 0) {
                                        margLeft++;
                                        x7++;
                                        x8++;
                                        margCanvas();
                                    }

                                },
                            },
                            {
                                text: "-",
                                class: "margin leftM minus1",
                                click: function () {
                                    if (margLeft > 0) {
                                        margLeft--;
                                        x7--;
                                        x8--;
                                        margCanvas();
                                    }
                                },
                            },



                             {
                                 text: "Add margins",
                                 class: "right add",
                                 click: function () {
                                     cssToAdd = "\n" + "margin: " + margTop + "px " + margRight + "px " + margBottom + "px " + margLeft + "px;";
                                     $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + cssTxt.substring(caretPos));
                                     $(this).dialog("close");
                                     $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                                     $("#cssCode").focus();
                                 },
                             },
                        ]
                    });

                    correctCaretBy = 14;

                }

                $("#cssCode").val(cssTxt.substring(0, caretPos) + cssToAdd + cssTxt.substring(caretPos));
                $("#cssCode").setCaretPosition(caretPos + correctCaretBy);
                $("#cssCode").focus();
            }

        }
    });

});


