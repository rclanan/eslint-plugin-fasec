// From https://github.com/evilpacket/eslint-rules/blob/master/no-unsafe-regex.js
'use strict';

var safe = require('safe-regex');

module.exports = function(context) {
  function isLiteralRegularExpression(expression) {
    return expression.type === 'RegularExpression';
  }

  function isExpressionRegularExpresion(expression) {
    return expression.callee.name === 'RegExp';
  }

  function isUnsafeRegex(expression) {
    return !safe(expression);
  }

  function isArgumentLiteral(expression) {
    return expression === 'Literal';
  }

  function validateLiteral(node) {
    var token = context.getTokens(node)[0];

    if (isLiteralRegularExpression(token)) {
      if (isUnsafeRegex(token.value)) {
        return context.report(node, 'Possible Unsafe Regular Expression');
      }
    }
  }

  function buildArgumentList(args) {
    var argumentList, len;

    len = args.length;
    argumentList = new Array(args.length);

    for (var index = 0; index < len; index++) {
      var currentArgument = args[index];

      if (!isArgumentLiteral(currentArgument.type)) {
        return [];
      }

      argumentList[index] = currentArgument.value;
    }

    return argumentList;
  }

  function validateExpression(node) {
    if (isExpressionRegularExpresion(node)) {
      var literalArguments, regex;

      literalArguments = buildArgumentList(node.arguments);
      regex = RegExp.apply(null, literalArguments);
      if (isUnsafeRegex(regex)) {
        return context.report(node, 'Possible Unsafe Regular Expression');
      }
    }
  }

  return {
    Literal: validateLiteral,
    NewExpression: validateExpression,
    CallExpression: validateExpression
  };
};

module.exports.schema = [];
