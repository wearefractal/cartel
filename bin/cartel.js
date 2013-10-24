#!/usr/bin/env node

var cartel = require('../');

var delay = 60000;

var login = function(){
  console.log('Logging in...');
  cartel.login(function(err){
    if (err) {
      console.log('Error logging in', err);
    } else {
      console.log('Logged in!');
    }
    console.log('Waiting', (delay/1000), 'seconds');
    setTimeout(login, delay);
  });
};
login();