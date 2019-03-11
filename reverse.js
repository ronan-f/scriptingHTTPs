var getHTML = require('./step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function reverse (html) {

  let reverse = html.split('').reverse().join('');
  console.log(reverse);

}

getHTML(requestOptions, reverse);
