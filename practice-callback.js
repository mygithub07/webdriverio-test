var fs = require('fs')
var request = require('request')
var myNumber = undefined
 

request('http://www.webdriver.io', doSomeStuff);

console.log("write before request function output");

function doSomeStuff (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Modulus homepage.
    }
};