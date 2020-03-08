var request = require('request');

var apiKey = process.env.ZIPCODE_API_KEY || "hNINh8gQRm8UnfNLCbjINZ8gtmCvOeuo4fkASFq0iSUFwJiDZvK3Vb4HZnxzPnYh";
var zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
  find: function(req, res, next) {
    request(zipCodeURL + apiKey + '/distance.json/' + req.params.zipcode1 + '/' + req.params.zipcode2 + '/mile', 
    function(error, response, body) {
      if(!error && response.statusCode == 200) {
        response = JSON.parse(body);
        res.send(response);
      } else {
        console.error(response.statusCode + response.body);
        res.send({distance: -1});
      }
    });

  }
};

module.exports = distance;
