'use strict';

module.exports = {
  rules: {
    'no-unsafe-regex': require('./lib/rules/no-unsafe-regex'),
    'no-csrf-before-method-override': require('./lib/rules/no-csrf-before-method-override'),
    'no-timing-attacks': require('./lib/rules/no-timing-attacks')
  },
  rulesConfig: {
    'no-unsafe-regex': 0,
    'no-csrf-before-method-override': 0,
    'no-timing-attacks': 0
  }
};
