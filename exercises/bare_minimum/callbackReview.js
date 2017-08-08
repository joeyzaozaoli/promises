/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, function(error, data) {
    if (error) {
      callback(error, null);
    } else {
      var firstLine = data.toString().split('\n')[0];
      callback(null, firstLine);
    }
  });
  // fs.readFile(filePath, 'utf8', function(error, data) {
  //   if (error) {
  //     callback(error, null);
  //   } else {
  //     var firstLine = data.split('\n')[0];
  //     callback(null, firstLine);
  //   }
  // });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(error, data) {
    if (error) {
      callback(error, null);
    } else {
      var statusCode = data.statusCode;
      callback(null, statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
