'use strict';
const crypto = require('crypto');

const SAULT_LOOP_ROUND = 64 / 4;
const PRE_SAULT = [ 'ffff', 'fff', 'ff', 'f', '' ];

exports.generate_sault = function generate_sault() {
  const arrSault = [];
  let str;
  for (let i = 0; i < SAULT_LOOP_ROUND; i++) {
    str = Math.round(Math.random() * 0xffff).toString(16);
    arrSault.push(PRE_SAULT[str.length], str);
  }
  return arrSault.join('');
};

exports.hash_password = function hash_password(name, sault, password) {
  const hash = crypto.createHash('sha256');
  hash.update(`name${name}sault${sault}password${password}`);
  return hash.digest('hex');
};

exports.valid_password = function valid_password(user, password) {
  const hashed = exports.hash_password(user.name, user.sault, password);
  return hashed === user.password;
};
