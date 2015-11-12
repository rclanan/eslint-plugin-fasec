/* eslint-env mocha */
'use strict';

var plugin = require('..');

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var rules = fs.readdirSync(path.resolve(__dirname, '../lib/rules/'))
  .map(function(f) {
    return path.basename(f, '.js');
  });

var defaultSettings = {};

describe('all rule files should be exported by the plugin', function() {
  rules.forEach(function(ruleName) {
    it('should export ' + ruleName, function() {
      assert.equal(plugin.rules[ruleName],
        require(path.join('../lib/rules', ruleName))
      );
    });

    if (defaultSettings.hasOwnProperty(ruleName)) {
      var val = defaultSettings[ruleName];
      it('should configure ' + ruleName + ' to ' + val + ' by default', function() {
        assert.equal(
          plugin.rulesConfig[ruleName],
          val
        );
      });
    } else {
      it('should configure ' + ruleName + ' off by default', function() {
        assert.equal(
          plugin.rulesConfig[ruleName],
          0
        );
      });
    }
  });
});
