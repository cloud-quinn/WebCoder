var address = casper.cli.get('url');
var publicationsUrl = address + '/policy-and-guidance/publications';


casper.test.begin('Standard CIPFA publications page tests', 2, function suite(test){

	casper.start(publicationsUrl, function(){
		this.capture('shots/publications.png');
		test.assertTextExists('Publications', 'The publications page loading');
		test.assertExists('.result-body h2', 'At least one publication found');
		
	});

	casper.run(function(){
		test.done();
	});

});
