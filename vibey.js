/* Requirements */
var fs = require('fs');

var inputText;

function init()
{
	inputText = document.getElementById('givenvibe');
}

function parseWords(filename)
{
	fs.readFile(filename, 'utf8', function(err, content)
	{
		console.log(contents);
	});

	console.log('file as been read.');
}