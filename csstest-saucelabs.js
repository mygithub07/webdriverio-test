var Proxy = require('browsermob-proxy').Proxy
    , webdriverio = require('webdriverio')
    , fs = require('fs')
    , proxy = new Proxy()
    ,username = "neeshpal"
    ,accessKey = "6c502a2d-542d-472c-9a0d-a855ee7b8236"
;

proxy.cbHAR('search.yahoo.com', doSeleniumStuff, function(err, data) {
         
        if (err) {
          
            console.error('ERR: ' + err);
        } else {
        
            fs.writeFileSync('stuff.har', data, 'utf8');
            //fs.writeFile('/Users/hanu/Desktop/amit/webdriverio/webdriverio-test/stuff.har', data, 'utf8');

        }
});

function doSeleniumStuff(proxy, cb) {
      
    var browser = webdriverio.remote({
        host: 'ondemand.saucelabs.com'
        , port: 80
        ,user: process.env.SAUCE_USERNAME
        ,key: process.env.SAUCE_ACCESS_KEY
        , desiredCapabilities: {
        browserName: 'chrome', 
        platform: 'OS X 10.10',
        version: '51.0',
        username: 'neeshpal',
        accessKey: '6c502a2d-542d-472c-9a0d-a855ee7b8236',
        seleniumProtocol: 'WebDriver',
        Proxy: { httpProxy: proxy } }
    });
    require('webdrivercss').init(browser, {
    // example options
    screenshotRoot: './webdrivercsss'
    });
    browser
        .init()
        .url("https://www.yahoo.com")     
        .saveScreenshot('./webdrivercss.png');
    console.log("test")
    browser.end().then(cb);        
    
}