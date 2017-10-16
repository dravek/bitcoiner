const http = require('http');

var getvalue = (callback) =>{
  http.get({
          host: 'api.coindesk.com',
          path: '/v1/bpi/currentprice.json'
          },
          function(response) {
                  var body = '';
                  response.on('data', function(d) { body += d; });
                  response.on('end', function() {
                      var parsed = JSON.parse(body);
                      callback({value: parsed.bpi.USD.rate});
                  });
          }
  );
};

module.exports = {
  getvalue
};
