//basic tests of functionality in Optimised Tutorial

casper.test.begin('Optimised test', 17, function suite(test) {

    casper.start("http://localhost:57177");
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

    //SCREENSHOTS ISSUE STARTS HERE

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
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
    });

    //task 7
    casper.then(function () {
        this.wait(3000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/TEST.png');
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

    //task 8
    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#cssCode").val(" ");
                var css = ["p {", "\n", "font-family: Arial;", "\n", "}"];
                var populaterCSS = [];
                for (i = 0; i < css.length; i++) {
                    populaterHTML += (css[i]);
                }
                $("#cssCode").val(populaterCSS);
                return $("#cssCode").val();
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            test.assertTextExists("Success", 'Success dialog title appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/CSS-success.png');
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/CSS-p-badge.png');
        });

        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    casper.run(function () {
        test.done();
    });
});