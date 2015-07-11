//basic tests of functionality in Optimised Tutorial

casper.test.begin('Optimised test', 28, function suite(test) {

    casper.start("http://uio.webcoder.org.uk");
    casper.viewport(1280, 1024);

    casper.then(function () {
        // Does tutorial load?
        test.assertHttpStatus(200, 'WebCoder optimised tutorial loads');
        //test.assertTextExists('WebCoder', 'WebCoder mentioned on the homepage');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/tutorial-loads.png');
    });

    casper.then(function () {
        // "Next" button should appear initially
        test.assertVisible('button#next');
    });

    casper.then(function () {
        // click "Next" button 6 times to reach end of initial instructions
        for (i = 0; i < 6; i++) {
            this.click('button#next');
        }
    });

    casper.then(function () {
        //does the "Check Code" button appear once initial instructions have been read?
        test.assertVisible('button#checkCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/check-code.png');
        // click "Check Code"
        this.click('button#checkCode');
    });

    casper.then(function () {
        // Does "Success" dialog appear?
        test.assertTextExists('Success', 'Success dialog title appears');
        test.assertTextExists('Let' + "'" + 's go', 'Success dialog initial message is correct');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/lets-go-success-dialog.png');
        this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
    });

    casper.then(function () {
        // Try to create a <p> tag by dropping the Text icon into the code area
        this.mouse.down('#pTag');
        this.mouse.move('#htmlCode');
        this.mouse.up('#htmlCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/drag-drop-paragraph.png')
        var found = casper.evaluate(function () {
            return $("#htmlCode").val();
        });
        test.assert(found.search('<p></p>') > -1);
    });

    casper.then(function () {
        this.wait(1000, function () {
            this.click('button#checkCode');
            // Does "Error" dialog appear?
            test.assertTextExists("That'" + "s not quite right", 'Error dialog title appears');
            test.assertTextExists('Make sure you type some words between <p> and </p> to make a paragraph', 'Empty P tag error message is displayed');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/paragraph-error-dialog.png');
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<p>Hello World</p>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task1-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');

        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/text-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            // Try to create an <h1> tag by dropping the Heading icon into the code area
            this.mouse.down('#h1Tag');
            this.mouse.move('#htmlCode');
            this.mouse.up('#htmlCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/drag-drop-heading.png');
            var found = casper.evaluate(function () {
                return $("#htmlCode").val();
            });
            test.assert(found.search('<h1></h1>') > -1);
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<h1></h1>", "\n", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
            this.wait(1000, function () {
                this.click('button#checkCode');
                this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/header-error-dialog.png');
            });
            this.wait(1000, function () {
                this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
            });
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<h1>My Web Page</h1>", "\n", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task2-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/heading-badge.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        // Try to create an <a> tag by dropping the Link icon into the code area
        this.mouse.down('#aTag');
        this.mouse.move('#htmlCode');
        this.mouse.up('#htmlCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/drag-drop-link.png')
        var found = casper.evaluate(function () {
            return $("#htmlCode").val();
        });
        test.assert(found.search("<a href='" + "'></a>") > -1);
    });

    casper.then(function () {
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(2000, function () {
            test.assertTextExists("That'" + "s not quite right", 'Error dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/link-error-dialog.png');
        });
        this.wait(2000, function () {
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<a href='http://www.webcoder.org.uk'> Visit WebCoder</a>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task3-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/link-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<h1>My heading</h1>", "\n", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>", "\n", "<a href='http://www.webcoder.org.uk'> Visit WebCoder</a>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task4-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            // Try to create an <img> tag by dropping the Image icon into the code area
            this.mouse.down('#imgTag');
            this.mouse.move('#htmlCode');
            this.mouse.up('#htmlCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/drag-drop-image.png')
            var found = casper.evaluate(function () {
                return $("#htmlCode").val();
            });
            test.assert(found.search("<img src='" + "' alt='" + "' />") > -1);
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(2000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/image-error-dialog.png');
        });
        this.wait(2000, function () {
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<img src='mug.png' alt='' />", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/image-error-missing-alt-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
    });

    //task 5
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<img src='mug.png' alt='coffee mug' />", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task5-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/img-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    //task 6
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<h1>My code is all hat</h1>", "\n", "<img src='hat.png' alt='WebCoder hat' />", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task6-success-dialog.png');
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
    });

    //task 7
    casper.then(function () {
        this.wait(3000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<h1>My heading</h1>", "\n", "<p>My paragraph</p>", "\n", "<img src='t-shirt.png' alt='WebCoder t-shirt' />", "\n", "<a href='http://www.webcoder.org.uk'>My link</a>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                }
                $("#htmlCode").val(populaterHTML);
                return $("#htmlCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task7-success-dialog.png');
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });

        this.wait(1000, function () {
            test.assertTextExists("You earned a badge", 'Badge appears');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    //switch to CSS mode
    casper.then(function () {
        this.wait(4000, function () {
            // "Next" button should appear initially
            test.assertVisible('button#next');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/css-intro.png');
        });
    });

    casper.then(function () {
        // click "Next" button 6 times to reach end of initial instructions
        for (i = 0; i < 2; i++) {
            this.click('button#next');
        }
    });

    casper.then(function () {
        //does the "Check Code" button appear once CSS instructions have been read?
        test.assertVisible('button#checkCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/CSS-mode.png');
    });

    //Test CSS icons
    casper.then(function () {
        // Try to create a p style by dropping the Text icon into the code area in CSS mode
        this.mouse.down('#pTag');
        this.mouse.move('#cssCode');
        this.mouse.up('#cssCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/drag-drop-css-paragraph.png')
        var found = casper.evaluate(function () {
            return $("#cssCode").val();
        });
        test.assert(found.search('p {') > -1);
    });

    casper.then(function () {
        // Try to add a font-family style for paragraphs by dropping the Font icon into the code area in CSS mode
        this.mouse.down('#font');
        this.mouse.move('#cssCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/css-font-drag.png')
        this.mouse.up('#cssCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/css-font-select.png')
        this.wait(1000, function () {
            // Select a font
            this.click('button.Impact');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/css-font-code.png');
        });
        var found = casper.evaluate(function () {
            return $("#cssCode").val();
        });
        test.assert(found.search('font-family') > -1);
    });

    //task 8
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                return $("#cssCode").val();
            });
            this.click('button#checkCode');
            test.assertTextExists("That" + "'s not quite right", 'CSS error dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/no-CSS-error.png');
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["p {", "\n", "\n", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("That" + "'s not quite right", 'CSS error dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/empty-CSS-error.png');
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["p {", "\n", "font-family Arial;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("That" + "'s not quite right", 'CSS error dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/missing-colon-CSS-error.png');
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["p {", "\n", "font-family: Arial", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("That" + "'s not quite right", 'CSS error dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/missing-semicolon-CSS-error.png');
            this.click('div[aria-describedby=dialog-failure] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["p {", "\n", "font-family: Arial;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'CSS success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task8-success-dialog.png');
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/CSS-p-badge.png');
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    //task 9
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["h1 {", "\n", "color: blue;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task9-success-dialog.png');
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/CSS-color-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    //task 10
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["h1 {", "\n", "font-family: Trebuchet MS;", "\n" + "color: teal;", "\n" + "}", "\n", "\n", "p {" + "\n", "font-family: Georgia;", "\n", "color: purple;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task10-success-dialog.png');
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
    });

    //task 11
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["img {", "\n", "float: right;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task11-success-dialog.png');
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/CSS-float-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    //task 12
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["img {", "\n", "float: left;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterCSS += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/task12-success-dialog.png');
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
    });

    casper.run(function () {
        test.done();
    });
});