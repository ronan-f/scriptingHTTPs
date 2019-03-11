var getHTML = require('./step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  let upperCase = html.toUpperCase();
  console.log(typeof upperCase);

}

getHTML(requestOptions, printUpperCase);
