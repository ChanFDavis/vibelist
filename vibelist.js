/* Requirements */
var fs = require('fs');

var inputText;

function init()
{
	inputText = document.getElementById('givenvibe');
}


function parseWords(filename)
{
	fs.readFile(filename, 'utf8', function(err, contents)
	{
		console.log(contents);
	});

	console.log('file as been read.');
}

// Initialize this code once the window content has been completely loaded.
window.onload = init;