var https = require('https');

function getAndPrintHTML (options) {


  let outputString = '';

    https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      outputString += data;
      console.log(outputString);
    })
  })
}
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);