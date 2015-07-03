var address = casper.cli.get('url');
var studyUrl = address + '/study';

casper.test.begin('Standard CIPFA Study page tests', 2, function suite(test){

	casper.start(studyUrl);

	casper.then(function(){
		this.capture('shots/study.png');
	});

	casper.then(function(){
		test.assertTextExists('Study', 'The study page loaded');
		test.assertExists('.box1', 'At least one box image found');
	});

	casper.run(function(){
		test.done();
	});

});