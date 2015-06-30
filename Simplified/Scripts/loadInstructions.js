
function loadInstructions(thisActivity) {
    var intro = ["<p>Welcome to WebCoder! We hope you'll have fun learning Hyper Text Markup Language <strong>(HTML)</strong> and Cascading Style Sheets <strong>(CSS)</strong>.</p>", "<p>Knowing how to use these coding languages will allow you to build simple web pages.</p>", "<p>Web pages are made up of many HTML elements. This tutorial will help you learn how to create four of the most common elements: Paragraphs of text, headings, links, and images.</p>", "<p>You will be typing the information you want on your website inside tags to make code. Your code goes between <img class='instructions' src='/Content/images/bodyOpen.png' alt='body'> and <img class='instructions' src='/Content/images/bodyClose.png' alt='forward slash body'>, and you will see the resulting web page on the right.</p>", "<p>Instructions will be given for each activity, and some activities carry badges in celebration of your new skills. You can also track your progress by checking the progress bar at the top of the page.</p>", "<p>When you think you've finished an activity, just click the 'Check Code' button below the code area.</p><p>Ready to get started? Click the 'Check Code' button now!</p>"];
    var i = 0;
    var cssIntro = ["<p>Great work learning HTML! Now it's time to switch to CSS mode. Don't worry, your HTML code is still there and will work with your CSS code.</p>", "<p>CSS code lets us specify how our HTML elements should <em>look</em>; for example, colors, fonts, positions, and spacing between elements. By the way, in CSS, 'color' is the correct spelling, regardless of which side of the Atlantic you call home! </p>", "<p>First of all, try copying this code to change the font of your text paragraphs.</p>"];
    var cssi = 0;

    //initial instructions are broken down to make them easier to read
    $("#next").click(function () {
        if (thisActivity == 0) {
            i++;
            $("#instructions").html(intro[i]);
            if (i >= intro.length - 1) {
                $("#next").hide();
                $("#checkCode").show();
                $("#instructions").removeClass("col-lg-7 col-md-7 col-sm-7 col-xs-7");
                i = 0;
            }
        }
        else if (thisActivity == 8) {
            i++;
            $("#instructions").html(cssIntro[i]);
            if (i >= cssIntro.length - 1) {
                $("#checkCode").show();
                $("#example").show();
                $("#instructions").removeClass("col-lg-7 col-md-7 col-sm-7 col-xs-7");
                $("#next").hide();
            }
        }
    });

    instructionsList = [
       intro[i],
       "<p>Let's get started! The tag for creating a <em>paragraph</em> of text is <img class='instructions' src='/Content/images/pTag.png' alt='less than sign p greater than sign less than sign forward slash p greater than sign'>. Try typing this tag into the code area, then add any text you like in the middle and see it appear on the right!</p><p> Your code should then look something like this:</p>",
       "<p>The tag for <em>headings</em>, which are larger than paragraphs, is <img class='instructions' src='/Content/images/h1Tag.png' alt='less than sign h1 greater than sign less than sign forward slash h1 greater than sign'>Now try adding a heading with any text you like in the middle. Then, add another paragraph of text underneath. Like this:</p>",
       "<p>Now we'll adding a <em>link</em> to a website. This tag is slightly more complicated, because you need to include the website address and some text to be clicked. Try copying this example:</p>",
       "<p>Great work! Try putting together a heading, a paragraph of text, and a link. For example:</p>",
       "<p>Now we'll try creating an <em>image</em>. You need to add the filename of the image, and a short description to be read out to users who can't see the image.</p><p>To make it easier, we've included three images below - choose your favourite, and type in the filename, like this:</p>",
       "<p>Try adding a different image, then add a heading describing it. For example:</p>",
       "<p>Lets put it all together now: a heading, a paragraph of text, a link, and an image. For example:</p>",
       cssIntro[i],
       "<p>Now try copying this code to change the color of your heading:</p>",
       "<p>Good work! Try adding a new font and color style for headings, and then for paragraphs. You can find a list of web safe fonts and suitable colors above the code area. Your code should look something like this:</p>",
       "<p>We can position, or 'float', elements to the left or the right of other elements. Try floating your <em>image</em> to the right, like this:</p>",
       "<p>Now use float to position the image to the left:</p>",
       "<p>We can specify how much space we want between elements adding margins above, below, or to the side of elements. We can specify up to four margins: top, right, bottom and left. We start with the top and move clockwise through right, bottom, and left.</p><p>Try adding a margin to the top of the heading. Your code should then look something like this:</p>",
       "<p>Now add a margin to the left of the <em>image</em> and then add a margin to the left to the <em>link</em>:</p>",
       "<p>Great work! Why not take this opportunity to practise adding different styles and see how they look in the output on the right.</p><p>Make sure you specify a style for each HTML element: headings, paragraphs, images, and links.</p><p>When you're ready to move on, click the 'Check Code' button. </p>",
       "<p>Excellent work! Try changing the color for the headings to something different. You can find a list of suitable colors above the code area.</p>",
       "<p>Now, change the font for the headings and text paragraphs. You can find a list of web safe fonts above the code area.</p>",
       "<p>You can now toggle between HTML and CSS using the tabs above your code area. Switch back to HTML and try adding some extra paragraphs and images. </p>",
       "<p>Now to create a whole new web page about a topic of your choice: if you're stuck for ideas, why not make it about learning to code?</p><p>Be sure to include at least one heading, paragraph, link, and image. If you get stuck, click the 'hint' button.</p>",
       "<p>You've nearly finished the tutorial - great work! Complete the effect by creating styles for each element on your webpage. Use the tabs above the code area to switch back to CSS. Don't forget, you can get a hint if you need to.</p>"
    ];

    var examplesList = [
     " ",
    "<p>Hello World</p>",
    "<h1>Welcome to my website</h1>" + "\n" + "<p>I've learned two HTML elements already!</p>",
    "<a href='http://www.webcoder.org.uk'>Visit WebCoder</a>",
    "<h1>Learn to code...</h1>" + "\n" + "<p>...by visiting</p>" + "\n" + "<a href='http://www.webcoder.org.uk'>this website</a>",
    "<img src='mug.png' alt='a lovely coffee mug for super coders' />",
    "<h1>My code is all hat</h1>" + "\n" + "<img src='hat.png' alt='a sweet hat for HTML geniuses' />",
    "<h1>Coding is fun</h1>" + "\n" + "<p>Here at</p>" + "\n" + "<a href='http://www.webcoder.org.uk'>WebCoder</a>" + "\n" + "<img src='t-shirt.png' alt='a stylish t-shirt for web wizards' />",
    "p {" + "\n" + "font-family: Georgia;" + "\n" + "}",
    "h1 {" + "\n" + "color: blue;" + "\n" + "}",
    "h1 {" + "\n" + "font-family: Trebuchet MS;" + "\n" + "color: teal;" + "\n" + "}" + "\n" + "p {" + "\n" + "font-family: Georgia;" + "\n" + "color: purple;" + "\n" + "}",
    "img {" + "\n" + "float: right;" + "\n" + "}",
    "img {" + "\n" + "float: left;" + "\n" + "}",
    "h1 {" + "\n" + "margin: 50px 0 0 0;" + "\n" + "}",
    "img {" + "\n" + "margin: 0 0 0 40px;" + "\n" + "}" + "\n" + "a {" + "\n" + "margin: 0 0 0 30px ;" + "\n" + "}",
    ];
    var instructions = instructionsList[thisActivity];
    var example = examplesList[thisActivity];
    $("#instructions").html(instructions);
    $("#example").text(example);
}