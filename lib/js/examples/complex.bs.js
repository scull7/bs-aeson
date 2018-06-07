'use strict';

var Aeson_decode$BsAeson = require("../src/Aeson_decode.bs.js");

function point(json) {
  return /* record */[
          /* x */Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$float, json),
          /* y */Aeson_decode$BsAeson.field("y", Aeson_decode$BsAeson.$$float, json)
        ];
}

function line(json) {
  return /* record */[
          /* start */Aeson_decode$BsAeson.field("start", point, json),
          /* end_ */Aeson_decode$BsAeson.field("end", point, json),
          /* thickness */Aeson_decode$BsAeson.optional((function (param) {
                  return Aeson_decode$BsAeson.field("thickness", Aeson_decode$BsAeson.$$int, param);
                }), json)
        ];
}

var Decode = /* module */[
  /* point */point,
  /* line */line
];

var data = " {\n  \"start\": { \"x\": 1.1, \"y\": -0.4 },\n  \"end\":   { \"x\": 5.3, \"y\": 3.8 }\n} ";

console.log(line(JSON.parse(data)));

exports.Decode = Decode;
exports.data = data;
/*  Not a pure module */
