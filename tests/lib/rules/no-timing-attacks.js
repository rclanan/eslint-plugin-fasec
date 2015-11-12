'use strict';

var rule = require('../../../lib/rules/no-timing-attacks');
var RuleTester = require('eslint').RuleTester;

require('babel-eslint');

var ruleTester = new RuleTester();
ruleTester.run('no-timing-attacks', rule, {
  valid: [{
    code: [
      'if(encodedHash === "0820b32b206b7352858e8903a838ed14319acdfd") {',
      'console.log("valid");',
      '}'
    ].join('\n')
  }],
  invalid: [{
    code: [
      'if(password === "testing") {',
      'console.log("invalid");',
      '}'
    ].join('\n'),
    errors: [{
      message: 'Potential timing attack, left side.'
    }]
  }]
});
