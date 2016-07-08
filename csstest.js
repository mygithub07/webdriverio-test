var Proxy = require('browsermob-proxy').Proxy
    , webdriverio = require('webdriverio')
    , fs = require('fs')
    , proxy = new Proxy()
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
        host: 'localhost'
        , port: 4444
        , desiredCapabilities: { browserName: 'chrome', seleniumProtocol: 'WebDriver', Proxy: { httpProxy: proxy } }
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