// From https://github.com/evilpacket/eslint-rules/blob/master/no-timing-attacks.js
module.exports = function(context) {
  'use strict';

  var keywords = '((' + [
      'password',
      'secret',
      'api',
      'token',
      'auth',
      'pass',
      'hash'
  ].join(')|(') + '))';

  var re = new RegExp('^' + keywords + '$', 'im');

  function containsKeyword (node) {
    if (node.type === 'Identifier') {
      if (re.test(node.name)) {
        return true;
      }
    }

    return false;
  }

  function testKeyword (direction) {
    var potential = containsKeyword(direction);

    if (potential) {
      return context.report(node, 'Potential timing attack, ' + direction + ' side: ' + potential);
    }
  }

  function testDirectionsForKeyword (directions) {
    if (directions.left) {
      testKeyword(directions.left);
    }

    if (directions.right) {
      testKeyword(directions.right);
    }
  }

  return {
    'IfStatement': function(node) {
      if (node.test && node.test.type === 'BinaryExpression') {
        if (node.test.operator === '==' || node.test.operator === '===' ||
            node.test.operator === '!=' || node.test.operator === '!==') {
          testDirectionsForKeyword(node.test);
        }
      }
    }
  };
};
