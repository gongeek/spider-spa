//https://www.mxgw.info/t/phantomjs-prerender-for-seo.html
var page = require('webpage').create();
var system = require('system');
var resourceWait = 500;
var resourceWaitTimer;
var maxWait = 5000;
var maxWaitTimer;
var resourceCount = 0;
var url = system.args[1];

page.viewportSize = {
    width: 1280,
    height: 1014
};

var capture = function (errCode) {
    console.log(page.content);
    clearTimeout(maxWaitTimer);
    phantom.exit(errCode);
};

page.onResourceRequested = function (req) {
    resourceCount++;
    clearTimeout(resourceWaitTimer);
};

page.onResourceReceived = function (res) {
    if (res.stage !== 'end') {
        return;
    }
    resourceCount--;
    if (resourceCount === 0) {
        resourceWaitTimer = setTimeout(capture, resourceWait);
    }
};

page.onResourceTimeout = function (req) {
    resourceCount--;
};

page.onResourceError = function (err) {
    resourceCount--;
};
page.open(url, function (status) {
    if (status !== 'success') {
        phantom.exit(1);
    } else {
        maxWaitTimer = setTimeout(function () {
            capture(0);
        }, maxWait);
    }
});