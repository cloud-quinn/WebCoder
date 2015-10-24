//basic tests of functionality in Simplified Tutorial

casper.test.begin('Simplified test', 7, function suite(test) {

    casper.start("http://uis.webcoder.org.uk");
    casper.viewport(1280, 1024);

    casper.then(function () {
        // Does tutorial load?
        test.assertHttpStatus(200, 'WebCoder simplified tutorial loads');
        //test.assertTextExists('WebCoder', 'WebCoder mentioned on the homepage');
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/tutorial-loads.png');
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
        this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/check-code.png');
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
        this.wait(1000, function () {
            this.click('button#checkCode');
            // Does "Error" dialog appear?
            test.assertTextExists("That'" + "s not quite right", 'Error dialog title appears');
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
                    htmlLength++;
                }
                $("#htmlCode").val(populaterHTML);
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/task1-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');

        });
        this.wait(1000, function () {
            test.assertTextExists("You earned a badge", 'Badge appears');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/text-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
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
                    htmlLength++;
                }
                $("#htmlCode").val(populaterHTML);
            });
            this.wait(1000, function () {
                this.click('button#checkCode');
                this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/header-error-dialog.png');
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
                    htmlLength++;
                }
                $("#htmlCode").val(populaterHTML);
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/task2-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/heading-badge.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(2000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/link-error-dialog.png');
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
                    htmlLength++;
                }
                $("#htmlCode").val(populaterHTML);
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
        });
        this.wait(5000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/task3-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/link-badge.png');
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
                    htmlLength++;
                }
                $("#htmlCode").val(populaterHTML);
            });
        });
        this.wait(1000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/task4-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
    });

    casper.then(function () {
        this.wait(1000, function () {
            casper.evaluate(function () {
                $("#htmlCode").val(" ");
                var htmlStart = ["<!DOCTYPE HTML>", "\n", "<html>", "\n", "<head>", "\n", "</head>", "\n", "<body>", "\n", "\n", "<img src='mug.png' alt='coffee mug /'>", "\n", "</body>", "\n", "</html>"];
                var populaterHTML = [];
                for (i = 0; i < htmlStart.length; i++) {
                    populaterHTML += (htmlStart[i]);
                    htmlLength++;
                }
                $("#htmlCode").val(populaterHTML);
            });
        });
        this.wait(2000, function () {
            this.click('button#checkCode');
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/task5-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');
        });
        this.wait(1000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/mscstuff/Casper Tests/Simplified/img-badge.png');
            this.click('div[aria-describedby=dialog-badge] .ui-dialog-buttonset button');
        });
    });

    casper.run(function () {
        test.done();
    });
});