'use strict';

const tap = require('tap');
const browserslist = require('browserslist');
const config = require('../index.js');

tap.test('config is an array', t => {
  t.true(Array.isArray(config));
  t.end();
});

tap.test('config is not empty', t => {
  t.true(config.length > 0);
  t.end();
});

tap.test('works with browserslist', t => {
  t.doesNotThrow(browserslist(config), 'test');
  t.end();
});
