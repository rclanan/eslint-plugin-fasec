// Test cases from: https://github.com/substack/safe-regex/blob/6ecfef8db092c4b0d5dd8c7ac978ca0ebdd52889/test/regex.js
'use strict';

var rule = require('../../../lib/rules/no-unsafe-regex');
var RuleTester = require('eslint').RuleTester;

require('babel-eslint');

var ruleTester = new RuleTester();
ruleTester.run('no-unsafe-regex', rule, {
  valid: [{
    code: [
      'var re = /beep/;'
    ].join('\n')
  }, {
    code: [
      'var re = new RegExp( "\\bOakland\\b", "i" );'
    ].join('\n')
  }, {
    code: [
      'var re = /\\b(Oakland|San Francisco)\\b/i;'
    ].join('\n')
  }, {
    code: [
      'var re = /^\\d+1337\\d+$/i;'
    ].join('\n')
  }, {
    code: [
      'var re = /^\\d+(1337|404)\\d+$/i;'
    ].join('\n')
  }, {
    code: [
      'var re = /^\\d+(1337|404)*\\d+$/i;'
    ].join('\n')
  }, {
    code: [
      'var re = new RegExp( "a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?aaaaaaaaaaaaaaaaaaaaaaaaa" );'
    ].join('\n')
  }],
  invalid: [{
    code: [
      'var re = /^(a?){25}(a){25}$/;'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'Literal',
      line: 1,
      column: 10
    }]
  }, {
    code: [
      'var re = new RegExp( "a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?aaaaaaaaaaaaaaaaaaaaaaaaaa", "i" );'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'NewExpression',
      line: 1,
      column: 10
    }]
  }, {
    code: [
      'var re = /(x+x+)+y/;'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'Literal',
      line: 1,
      column: 10
    }]
  }, {
    code: [
      'var re = /foo|(x+x+)+y/;'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'Literal',
      line: 1,
      column: 10
    }]
  }, {
    code: [
      'var re = /(a+){10}y/;'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'Literal',
      line: 1,
      column: 10
    }]
  }, {
    code: [
      'var re = /(a+){2}y/;'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'Literal',
      line: 1,
      column: 10
    }]
  }, {
    code: [
      'var re = RegExp( "(.*){1,32000}[bc]" );'
    ].join('\n'),
    errors: [{
      message: 'Possible Unsafe Regular Expression',
      type: 'CallExpression',
      line: 1,
      column: 10
    }]
  }]
});
