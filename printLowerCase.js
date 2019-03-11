var getHTML = require('./step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLower (html) {

  let lowerCase = html.toLowerCase();
  console.log(lowerCase);

}

getHTML(requestOptions, printLower);
