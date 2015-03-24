module.exports = {
  rules: {
    'no-unsafe-regex': require('./lib/no-unsafe-regex'),
    'no-csrf-before-method-override': require('./lib/no-csrf-before-method-override'),
    'no-timing-attacks': require('./lib/no-timing-attacks')
  },
  rulesConfig: {
    'no-unsafe-regex': 2,
    'no-csrf-before-method-override': 2,
    'no-timing-attacks': 2
  }
};
