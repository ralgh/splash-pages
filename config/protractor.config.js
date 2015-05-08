exports.config = {
  onPrepare: function onPrepare() {
    browser.ignoreSynchronization = true;
  },
  getPageTimeout: 15000,
  allScriptsTimeout: 20000,
  specs: '../app/pages/**/*.e2e.js',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    version: 'ANY',
  },
  baseUrl: 'http://localhost:4402',
  framework: 'jasmine',
  jasmineNodeOpts: {
    onComplete: null,
    realtimeFailure: true,
    showTiming: true,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 40000,
  },
};
