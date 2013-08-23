var url = "../YourWebSite/TestRunner.html";

console.log('Loading a web page');
var page = new WebPage();
phantom.viewportSize = {width: 800, height: 600};
page.onConsoleMessage = function (msg) { console.log(msg); };
page.open(url, function (status) {
    //Page is loaded!
        if (status !== 'success') {
                console.log('Unable to load the address!');
            } else {
                 //Using a delay to make sure the JavaScript is executed in the browser
               window.setTimeout(function () {
                    page.render("output.png");
                    phantom.exit();
               }, 200);
                }
});