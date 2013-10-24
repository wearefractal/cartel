var request = require('request');

var user = 'cartel';
var pass = 'cartel';
var url = 'http://192.168.201.1:8000/';

module.exports = {
  login: function(cb) {
    request.post(url, {
      form: {
        auth_user: user,
        auth_pass: pass,
        redirurl: 'http://google.com',
        accept: 'Login'
      }
    }, cb);
  }
};