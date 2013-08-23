TeamCityJasmine
===============

TeamCity + JasmineJs + PhantomJs standalone example.

Complete set of files to run client-side tests(JasmineJs) in TeamCity:

- JasmineJs scripts
- PhantomJs executable
- jasmine.teamcity_reporter.js
- example(scripts to test & actually tests)


TeamCity command to execute: *phantomjs.exe test_runner.js*

To run tests locally: *run_local.bat*

**Notice:**
test_runner.js should has valid path to TestRunner.html


*Links:*

http://blog.danmerino.com/continuos-integration-ci-for-javascript-jasmine-and-teamcity/

http://pivotal.github.io/jasmine/

https://github.com/ariya/phantomjs/

https://github.com/larrymyers/jasmine-reporters/

http://www.jetbrains.com/teamcity/
