TeamCityJasmine
===============

TeamCity + JasmineJs + PhantomJs standalone example.

Complete set of files to run client-side tests(JasmineJs) in TeamCity:

- JasmineJs scripts
- PhantomJs executable
- jasmine.teamcity_reporter.js
- example(scripts to test & actually tests)

TeamCity command to execute: *phantomjs.exe spec_runner.js*

To run tests locally: *run_local.bat*

**Notice:**
spec_runner.js should has valid path to SpecRunner.html


*Links:*

http://blog.danmerino.com/continuos-integration-ci-for-javascript-jasmine-and-teamcity/

https://jasmine.github.io/

https://github.com/ariya/phantomjs/

https://github.com/larrymyers/jasmine-reporters/

http://www.jetbrains.com/teamcity/
