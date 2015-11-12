'use strict';

var rule = require('../../../lib/rules/no-csrf-before-method-override');
var RuleTester = require('eslint').RuleTester;

require('babel-eslint');

var ruleTester = new RuleTester();
ruleTester.run('no-csrf-before-method-override', rule, {
  valid: [{
    code: [
      'app.use(express.methodOverride());',
      'app.use(express.csrf());'
    ].join('\n')
  }],
  invalid: [{
    code: [
      'app.use(express.csrf());',
      'app.use(express.methodOverride());'
    ].join('\n'),
    errors: [{
      message: 'Bypass Connect CSRF protection by abusing methodOverride Middleware ' +
      '- http://blog.nodesecurity.io/2013/09/07/bypass-connect-csrf-protection-by-abusing'
    }]
  }]
});
