
# browsermobproxy with webdriverio.
- Make sure node.js and webdriverio is installed.
- Make sure your browsermob proxy and selenium server is up and running before running the test. 
- Download content in a folder
- From cmd go to folder where test.js is located and run command "node test.js"
- stuff.har should be generated where test.js is located
- Using webdrivercss for taking screenshots - run csstest.js , similar way as above and scrrenshot will be saved where csstest.js is located
- How to use webdriverio with Saucelabs  - Run csstest-saucelabs.js and provide your username and password in the script where required. Your test will run in Saucelabs environment and you can see by logging in your saucelab dashboard. (for this test saucelab account is required) - this test is without browsermobproxy
