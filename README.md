# Fusion Alliance Security for Node.js - ESLint Plugins

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
$ node node_modules/.bin/eslint --rulesdir lib ./ && node_modules/.bin/mocha --reporter spec
```


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
