var address = casper.cli.get('url');
var sitecoreUrl = address + '/sitecore/login';

casper.test.begin('Standard CIPFA Sitecore tests', 0, function suite(test){

	casper.start(sitecoreUrl, function(){


	});

	casper.run(function(){
		test.done();
	});

});
