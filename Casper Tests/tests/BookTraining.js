var address = casper.cli.get('url');
var trainingUrl = address + '/training?order=dateDesc';

casper.test.begin('Standard CIPFA Training booking test', 7, function suite(test){

	var bookingName = '';

	casper.start(trainingUrl);

	casper.then(function(){
		this.capture('shots/training.png');
	});

	casper.then(function(){
		test.assertTextExists('Training', 'The training search page loaded');
		test.assertExists('.result-body h2', 'At least one training event found');
	});

	casper.then(function(){
		bookingName= casper.evaluate(function(){
			return $('.result:first h2 a').text();
		});

		casper.echo(bookingName);
		casper.click('.result h2 a');

	});

	casper.then(function(){
		test.assertTextExists(bookingName);
		test.assertTextExists('Event summary');
		test.assertTextExists('Book now');
		this.capture('shots/course.png');
	});

	casper.then(function(){
		casper.click('.button a');
	});

	casper.then(function(){
		test.assertTextExists('Login');
		this.capture('shots/login.png');
	});

	casper.then(function(){
		this.fill('form', {
			'content_0$txtUsername': 'samjamwich',
			'content_0$txtPassword': 'Magnum12345'
		});

		this.capture('shots/login2.png');
		casper.click('#content_0_btnSubmit');
		casper.wait(1000);
	});

	casper.then(function(){
		this.capture('shots/role.png');
		test.assertTextExists('select the role');
	});

	casper.then(function(){
		this.click('#content_1_rdlRoleSelection_0');
		this.click('#content_1_btnSubmit');
	});

	casper.then(function(){
		 this.capture('shots/basket.png');
	});

	casper.run(function(){
		test.done();
	});

});