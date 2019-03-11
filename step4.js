let https = require('https');

function getHTML (options, callback) {

    let outputString = '';

    https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      outputString += data;
      callback(data);
    })
  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);