//basic tests of functionality in Optimised Tutorial

casper.test.begin('Optimised test', 9, function suite(test) {

    casper.start("http://localhost:57177");
    casper.viewport(1280, 1024);

    casper.then(function () {
        // Does tutorial load?
        test.assertHttpStatus(200, 'WebCoder optimised tutorial loads');
        //test.assertTextExists('WebCoder', 'WebCoder mentioned on the homepage');
        this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/tutorial-loads.png');
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
        this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/check-code.png');
        // click "Check Code"
        this.click('button#checkCode');
    });

    casper.then(function () {
        // Does "Success" dialog appear?
        test.assertTextExists('Success', 'Success dialog title appears');
        test.assertTextExists('Let' + "'" + 's go', 'Success dialog initial message is correct');
        this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/lets-go-success-dialog.png');
        this.click('.ui-dialog-buttonset button');
    });

    casper.then(function () {
        // Try to create a <p> tag by dropping the Text icon into the code area
        this.mouse.down('#pTag');
        this.mouse.move('#htmlCode');
        this.mouse.up('#htmlCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/drag-drop-paragraph.png')
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
            this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/paragraph-error-dialog.png');
            this.click('div[aria-describedby=dialog-failure] button');  
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
            this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/task1-success-dialog.png');
        });
        this.wait(1000, function () {
            this.click('div[aria-describedby=dialog-success] .ui-dialog-buttonset button');

        });      
        this.wait(5000, function () {
            this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/text-badge.png');
            this.click('div[aria-describedby=dialog-badge] button');
        });
    });

    //casper.then(function () {

    //            
    //        });
    //    });
    //});

    casper.then(function () {
        this.wait(1000, function () {
        // Try to create an <h1> tag by dropping the Heading icon into the code area
        this.mouse.down('#h1Tag');
        this.mouse.move('#htmlCode');
        this.mouse.up('#htmlCode');
        this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/drag-drop-heading.png')
        var found = casper.evaluate(function () {
            return $("#htmlCode").val();
        });
        test.assert(found.search('<h1></h1>') > -1);
        });
    });

    //casper.then(function () {
    //    // Try to create an <a> tag by dropping the Heading icon into the code area
    //    this.mouse.down('#aTag');
    //    this.mouse.move('#htmlCode');
    //    this.mouse.up('#htmlCode');
    //    this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/drag-drop-link.png')
    //    var found = casper.evaluate(function () {
    //        return $("#htmlCode").val();
    //    });
    //    test.assert(found.search("<a href='" + "'></a>") > -1);
    //});

    //casper.then(function () {
    //    // Try to create an <img> tag by dropping the Heading icon into the code area
    //    this.mouse.down('#imgTag');
    //    this.mouse.move('#htmlCode');
    //    this.mouse.up('#htmlCode');
    //    this.capture('C:/Users/C/Documents/MSc Dissertation/Casper Tests/drag-drop-image.png')
    //    var found = casper.evaluate(function () {
    //        return $("#htmlCode").val();
    //    });
    //    test.assert(found.search("<img src='" + "' alt='" + "' />") > -1);
    //});




    casper.run(function () {
        test.done();
    });
});