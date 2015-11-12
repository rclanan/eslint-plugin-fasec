// From https://github.com/evilpacket/eslint-rules/blob/master/no-timing-attacks.js
'use strict';

module.exports = function(context) {
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

  function isIdentifier(expression) {
    return expression.type === 'Identifier';
  }

  function isVulnerable(expression) {
    return re.test(expression.name);
  }

  function containsKeyword(expression) {
    if (isIdentifier(expression)) {
      return isVulnerable(expression);
    }

    return false;
  }

  function testDirectionsForKeyword(expression) {
    var test, testResults;

    test = expression.test;

    if (test.left) {
      testResults = containsKeyword(test.left);
      if (testResults) {
        return context.report(expression, 'Potential timing attack, left side.');
      }
    }

    if (test.right) {
      testResults = containsKeyword(test.right);
      if (testResults) {
        return context.report(expression, 'Potential timing attack, right side.');
      }
    }
  }

  function isBinaryExpression(expression) {
    return expression.test.type === 'BinaryExpression';
  }

  function isValidEqualityOperator(expression) {
    return (expression.test.operator === '==' || expression.test.operator === '===' ||
      expression.test.operator === '!=' || expression.test.operator === '!==');
  }

  return {
    IfStatement: function(node) {
      if (node.test && isBinaryExpression(node)) {
        if (isValidEqualityOperator(node)) {
          return testDirectionsForKeyword(node);
        }
      }
    }
  };
};

module.exports.schema = [];
