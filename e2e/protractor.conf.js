// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

//const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
      './chart.e2e-spec.ts',
    ],
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [{
      'browserName': 'chrome',
      'chromeOptions': { 'args': ["--window-size=1024,768"]},  
    },
    ],
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
    },
    onPrepare() {
      browser.manage().window().maximize();
  
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json')
      });
  
    },
    allScriptsTimeout: 20000
  };
  