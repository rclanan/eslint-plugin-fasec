// From https://github.com/evilpacket/eslint-rules/blob/master/no-csrf-before-method-override.js
module.exports = function(context) {
  'use strict';

  var csrf = false;

  return {
    "CallExpression": function(node) {
      var token = context.getTokens(node)[0],
          nodeValue = token.value;

      if (nodeValue === 'express') {
        var callee = node.callee.property.name;

        if (callee === 'methodOverride' && csrf) {
          context.report(node, 'csrf middleware found before express.methodOverride()');
        }

        if (callee === 'csrf') {
          // Keep track of found CSRF
          csrf = true;
        }
      }
    }
  };
};
