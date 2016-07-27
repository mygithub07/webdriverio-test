
- You can use this setup to run browsermobproxy with webdriverio.
- Make sure webdriverio is installed and running
- Make sure your browsermob proxy and selenium server is running. 
- From cmd go to folder where test.js is located and run command "node test.js"
- stuff.har should be generated where test.js is located
- Using webdrivercss for taking screenshots - run csstest.js , similar way as above and scrrenshot will be saved where csstest.js is located
- How to use webdriverio with Saucelabs  - Run css-saucelabs.js and provide your username and password in the script where required. Your test will run in Saucelabs environment and you can see by logging in your saucelab dashboard. (for this test saucelab account is required) - this test is without browsermobproxy
