var address = casper.cli.get('url');
var homeUrl = address;
var examsUrl = address + '/training';

casper.test.begin('Standard CIPFA Training page tests', 4, function suite(test){

	var examsCount;

	casper.start(examsUrl);

	casper.then(function(){
		this.capture('shots/training.png');
	});

	casper.then(function(){
		test.assertTextExists('Training', 'The training page loading');
		test.assertExists('.result-body h2', 'At least one exam found');
		examsCount = this.fetchText('.show-results-filter strong span');
		test.assert(examsCount > 0, 'At least one result');
	});

	casper.then(function(){
		this.click('.filterLink');
	});

	casper.waitForUrl(/filters/, function(){
		var filteredExamsCount = this.fetchText('.show-results-filter strong span');
		test.assert(parseInt(examsCount) > parseInt(filteredExamsCount), 'Filtering reduces the number of results ' + examsCount + ' vs ' + filteredExamsCount);
		this.capture('shots/examsFiltered.png');
	});

	casper.run(function(){
		test.done();
	});

});