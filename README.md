# Fusion Alliance Security for Node.js - ESLint Plugins

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url]

The plugin architecture of [ESLint](http://eslint.org/) makes it possible to
create plugins that look for potential security issues in JavaScript code. Adam
Baldwin discusses some of these techniques in his article [Using ESLint Plugins
for Node.js App Security](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/).
This project is a collection of security-minded ESLint custom rules.

## Getting Started

You can use these rules in ESLint manually:

```shell
eslint --reset -c config.json --rulesdir ./lib [file.js] [dir]
```

But in practice it's much more convenient to use them in a task runner plugin,
such as the [FASEC Grunt plugin](https://github.com/fusionalliance/grunt-fasec).


## Demo

To see FASEC in action, clone and run the [FASEC demo project](https://github.com/fusionalliance/fasec-demo).


## Test

Testing is provided by mocha.

Either run in bash:

```shell
$ npm test
```

Or the full command:

```shell
$ node_modules/mocha/bin/_mocha tests/**/*.js --reporter spec
```

# List of supported rules

* [no-csrf-before-method-override](docs/rules/no-csrf-before-method-override): Checks to see if CSRF middleware is before methodOverride [http://blog.nodesecurity.io/2013/09/07/bypass-connect-csrf-protection-by-abusing](http://blog.nodesecurity.io/2013/09/07/bypass-connect-csrf-protection-by-abusing)
* [no-timing-attacks](docs/rules/no-timing-attacks): Looks for potential hot spot string comparisons
* [no-unsafe-regex](docs/rules/no-unsafe-regex): Check if using unsafe regex via [safe-regex](https://github.com/substack/safe-regex)

## Contributors

[![Fusion Alliance Logo](https://avatars0.githubusercontent.com/u/1154219?v=3&u=e1451e6a65343331369d53a2b6e0c7046c2cc810&s=60)](https://github.com/FusionAlliance)
**FASEC** is a product of Fusion Alliance &copy; 2015.

+ [Ray Clannan](https://github.com/rclanan) (Author)

This project uses the following Open Source components:

+ [evilpacket/eslint-rules](https://github.com/evilpacket/eslint-rules/), Copyright (c) 2013 Adam Baldwin, [MIT License](https://github.com/evilpacket/eslint-rules/blob/master/LICENSE).


## LICENSE

The MIT License (MIT)

Copyright (c) 2015 [Fusion Alliance](https://www.fusionalliance.com/?utm_source=GitHub&utm_medium=Website&utm_campaign=OpenSource)
With portions Copyright (c) 2013 [Adam Baldwin](https://github.com/evilpacket/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm-url]: https://npmjs.org/package/eslint-plugin-fasec
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-fasec.svg?style=flat-square

[travis-url]: https://travis-ci.org/fusionalliance/eslint-plugin-fasec
[travis-image]: http://img.shields.io/travis/fusionalliance/eslint-plugin-fasec/master.svg?style=flat-square

[deps-url]: https://david-dm.org/fusionalliance/eslint-plugin-fasec
[deps-image]: https://img.shields.io/david/dev/fusionalliance/eslint-plugin-fasec.svg?style=flat-square

[coverage-url]: https://coveralls.io/github/fusionalliance/eslint-plugin-fasec?branch=master
[coverage-image]: http://img.shields.io/coveralls/fusionalliance/eslint-plugin-fasec/master.svg?style=flat-square

[status-url]: https://github.com/fusionalliance/eslint-plugin-fasec/pulse
[status-image]: http://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square
