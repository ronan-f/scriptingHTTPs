let https = require('https');

module.exports = function getHTML (options, callback) {

    let outputString = '';

    https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      outputString += data;
      callback(data);
    })
  })

}



