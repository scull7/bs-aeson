'use strict';

var Aeson_decode$BsAeson = require("../src/Aeson_decode.bs.js");

function arrayOfInts(str) {
  var json = JSON.parse(str);
  return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, json);
}

console.log(arrayOfInts("[1, 2, 3]").reverse());

exports.arrayOfInts = arrayOfInts;
/*  Not a pure module */
