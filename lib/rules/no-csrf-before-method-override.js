// From https://github.com/evilpacket/eslint-rules/blob/master/no-csrf-before-method-override.js
'use strict';

module.exports = function(context) {
  var csrf = false;

  function isExpress(expression) {
    return expression === 'express';
  }

  function getCalleePropertyName(expression) {
    return expression.callee.property.name;
  }

  function isPropertyMethodOverride(property) {
    return property === 'methodOverride';
  }

  function isPropertyCSRF(property) {
    return property === 'csrf';
  }

  return {
    CallExpression: function(node) {
      var token = context.getTokens(node)[0];

      if (isExpress(token.value)) {
        var propertyName = getCalleePropertyName(node);

        if (isPropertyMethodOverride(propertyName) && csrf) {
          return context.report(node, 'Bypass Connect CSRF protection by abusing methodOverride Middleware ' +
            '- http://blog.nodesecurity.io/2013/09/07/bypass-connect-csrf-protection-by-abusing');
        }

        if (isPropertyCSRF(propertyName)) {
          // Keep track of found CSRF
          csrf = true;
        }
      }
    }
  };
};

module.exports.schema = [];
