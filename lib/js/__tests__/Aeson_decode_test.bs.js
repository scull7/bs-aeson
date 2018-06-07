'use strict';

var Jest = require("@glennsl/bs-jest/lib/js/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Aeson_decode$BsAeson = require("../src/Aeson_decode.bs.js");
var Aeson_encode$BsAeson = require("../src/Aeson_encode.bs.js");

function test(decoder, prefix, param) {
  switch (param) {
    case 0 : 
        return Jest.test(prefix + "float", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, 1.23));
                    }));
    case 1 : 
        return Jest.test(prefix + "int", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, 23));
                    }));
    case 2 : 
        return Jest.test(prefix + "string", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, "test"));
                    }));
    case 3 : 
        return Jest.test(prefix + "null", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, null));
                    }));
    case 4 : 
        return Jest.test(prefix + "array", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, /* array */[]));
                    }));
    case 5 : 
        return Jest.test(prefix + "object", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, Aeson_encode$BsAeson.object_(/* [] */0)));
                    }));
    case 6 : 
        return Jest.test(prefix + "bool", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1](decoder, true));
                    }));
    
  }
}

function throws(_$staropt$star, decoder, _param) {
  while(true) {
    var param = _param;
    var $staropt$star = _$staropt$star;
    var prefix = $staropt$star ? $staropt$star[0] : "";
    if (param) {
      test(decoder, prefix, param[0]);
      _param = param[1];
      _$staropt$star = /* Some */[prefix];
      continue ;
    } else {
      return /* () */0;
    }
  };
}

var Test = /* module */[
  /* test */test,
  /* throws */throws
];

describe("bool", (function () {
        Jest.test("bool", (function () {
                return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.bool(true)));
              }));
        Jest.test("bool - false", (function () {
                return Jest.Expect[/* toEqual */12](false, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.bool(false)));
              }));
        return throws(/* None */0, Aeson_decode$BsAeson.bool, /* :: */[
                    /* Float */0,
                    /* :: */[
                      /* Int */1,
                      /* :: */[
                        /* String */2,
                        /* :: */[
                          /* Null */3,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("float", (function () {
        Jest.test("float", (function () {
                return Jest.Expect[/* toEqual */12](1.23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.$$float(1.23)));
              }));
        Jest.test("int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.$$float(23)));
              }));
        return throws(/* None */0, Aeson_decode$BsAeson.$$float, /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* String */2,
                      /* :: */[
                        /* Null */3,
                        /* :: */[
                          /* Array */4,
                          /* :: */[
                            /* Object */5,
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("int", (function () {
        Jest.test("int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.$$int(23)));
              }));
        Jest.test("int > 32-bit", (function () {
                var big_int = (2147483648);
                return Jest.Expect[/* toEqual */12](big_int, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.$$int(big_int)));
              }));
        return throws(/* None */0, Aeson_decode$BsAeson.$$int, /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* String */2,
                        /* :: */[
                          /* Null */3,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("int32", (function () {
        Jest.test("int32", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int32(23)));
              }));
        return Jest.test("int32", (function () {
                      return Jest.Expect[/* toEqual */12](-23223, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int32(-23223)));
                    }));
      }));

describe("int64", (function () {
        Jest.test("int64", (function () {
                return Jest.Expect[/* toEqual */12](/* int64 */[
                            /* hi */0,
                            /* lo */23
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int64("23")));
              }));
        Jest.test("int64", (function () {
                return Jest.Expect[/* toEqual */12](/* int64 */[
                            /* hi */0,
                            /* lo */23
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int64(23)));
              }));
        return Jest.test("int64", (function () {
                      return Jest.Expect[/* toEqual */12](/* array */[
                                  0,
                                  23
                                ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int64(23)));
                    }));
      }));

describe("int64_of_array", (function () {
        Jest.test("int64_of_array", (function () {
                return Jest.Expect[/* toEqual */12](/* int64 */[
                            /* hi */0,
                            /* lo */23
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int64_of_array(/* int64 */[
                                    /* hi */0,
                                    /* lo */23
                                  ])));
              }));
        Jest.test("int64_of_array", (function () {
                return Jest.Expect[/* toEqual */12](Caml_format.caml_int64_of_string("9223372036854775807"), Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int64_of_array(Caml_format.caml_int64_of_string("9223372036854775807"))));
              }));
        return Jest.test("int64_of_array", (function () {
                      return Jest.Expect[/* toEqual */12](Caml_format.caml_int64_of_string("-9223372036854775807"), Jest.Expect[/* expect */0](Aeson_decode$BsAeson.int64_of_array(Caml_format.caml_int64_of_string("-9223372036854775807"))));
                    }));
      }));

describe("nativeint", (function () {
        Jest.test("nativeint", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nativeint(23)));
              }));
        return Jest.test("nativeint", (function () {
                      return Jest.Expect[/* toEqual */12](-23223, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nativeint(-23223)));
                    }));
      }));

describe("string", (function () {
        Jest.test("string", (function () {
                return Jest.Expect[/* toEqual */12]("test", Jest.Expect[/* expect */0](Aeson_decode$BsAeson.string("test")));
              }));
        return throws(/* None */0, Aeson_decode$BsAeson.string, /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* Null */3,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("date", (function () {
        var now = new Date("2017-12-08T06:03:22Z");
        return Jest.test("date", (function () {
                      return Jest.Expect[/* toEqual */12](now, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.date(Aeson_encode$BsAeson.date(now))));
                    }));
      }));

describe("nullable", (function () {
        Jest.test("int -> int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.$$int, 23)));
              }));
        Jest.test("null -> int", (function () {
                return Jest.Expect[/* toEqual */12](null, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.$$int, null)));
              }));
        Jest.test("bool -> bool", (function () {
                return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.bool, true)));
              }));
        Jest.test("float -> float", (function () {
                return Jest.Expect[/* toEqual */12](1.23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.$$float, 1.23)));
              }));
        Jest.test("string -> string", (function () {
                return Jest.Expect[/* toEqual */12]("test", Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.string, "test")));
              }));
        Jest.test("null -> null", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12](null, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullable((function (param) {
                                      return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                    }), null)));
              }));
        throws(/* None */0, (function (param) {
                return Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.$$int, param);
              }), /* :: */[
              /* Bool */6,
              /* :: */[
                /* Float */0,
                /* :: */[
                  /* String */2,
                  /* :: */[
                    /* Array */4,
                    /* :: */[
                      /* Object */5,
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.nullable(Aeson_decode$BsAeson.bool, param);
                    }), /* :: */[
                    /* Int */1,
                    /* [] */0
                  ]);
      }));

describe("nullAs", (function () {
        Jest.test("as 0 - null", (function () {
                return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullAs(0, null)));
              }));
        Jest.test("as Js.null", (function () {
                return Jest.Expect[/* toEqual */12](null, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullAs(null, null)));
              }));
        Jest.test("as None", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullAs(/* None */0, null)));
              }));
        Jest.test("as Some _", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */["foo"], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.nullAs(/* Some */["foo"], null)));
              }));
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.nullAs(0, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* String */2,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("array", (function () {
        Jest.test("array", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, /* array */[])));
              }));
        Jest.test("array bool", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[
                            true,
                            false,
                            true
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.bool, JSON.parse(" [true, false, true] "))));
              }));
        Jest.test("array float", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[
                            1,
                            2,
                            3
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$float, JSON.parse(" [1, 2, 3] "))));
              }));
        Jest.test("array int", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[
                            1,
                            2,
                            3
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, JSON.parse(" [1, 2, 3] "))));
              }));
        Jest.test("array string", (function () {
                return Jest.Expect[/* toEqual */12](/* array */[
                            "a",
                            "b",
                            "c"
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.string, JSON.parse(" [\"a\", \"b\", \"c\"] "))));
              }));
        Jest.test("array nullAs", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12](/* array */[
                            null,
                            null,
                            null
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.array((function (param) {
                                      return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                    }), JSON.parse(" [null, null, null] "))));
              }));
        Jest.test("array int -> array bool", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.bool, param);
                                }), JSON.parse(" [1, 2, 3] ")));
              }));
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* String */2,
                          /* :: */[
                            /* Null */3,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("list", (function () {
        Jest.test("array", (function () {
                return Jest.Expect[/* toEqual */12](/* [] */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.$$int, /* array */[])));
              }));
        Jest.test("list bool", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            true,
                            /* :: */[
                              false,
                              /* :: */[
                                true,
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.bool, JSON.parse(" [true, false, true] "))));
              }));
        Jest.test("list float", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            1,
                            /* :: */[
                              2,
                              /* :: */[
                                3,
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.$$float, JSON.parse(" [1, 2, 3] "))));
              }));
        Jest.test("list int", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            1,
                            /* :: */[
                              2,
                              /* :: */[
                                3,
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.$$int, JSON.parse(" [1, 2, 3] "))));
              }));
        Jest.test("list string", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            "a",
                            /* :: */[
                              "b",
                              /* :: */[
                                "c",
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.string, JSON.parse(" [\"a\", \"b\", \"c\"] "))));
              }));
        Jest.test("list nullAs", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12](/* :: */[
                            null,
                            /* :: */[
                              null,
                              /* :: */[
                                null,
                                /* [] */0
                              ]
                            ]
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.list((function (param) {
                                      return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                    }), JSON.parse(" [null, null, null] "))));
              }));
        Jest.test("array int -> list bool", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.bool, param);
                                }), JSON.parse(" [1, 2, 3] ")));
              }));
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.list(Aeson_decode$BsAeson.$$int, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* String */2,
                          /* :: */[
                            /* Null */3,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("pair", (function () {
        Jest.test("pair string int", (function () {
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            "a",
                            3
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.pair(Aeson_decode$BsAeson.string, Aeson_decode$BsAeson.$$int, JSON.parse(" [\"a\", 3] "))));
              }));
        Jest.test("pair int int", (function () {
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            4,
                            3
                          ], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.pair(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.$$int, JSON.parse(" [4, 3] "))));
              }));
        Jest.test("pair missing", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.pair(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.$$int, param);
                                }), JSON.parse(" [4] ")));
              }));
        Jest.test("pair too large", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.pair(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.$$int, param);
                                }), JSON.parse(" [3, 4, 5] ")));
              }));
        Jest.test("pair bad left type", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.pair(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.$$int, param);
                                }), JSON.parse(" [\"3\", 4] ")));
              }));
        return Jest.test("pair bad right type", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                        return Aeson_decode$BsAeson.pair(Aeson_decode$BsAeson.string, Aeson_decode$BsAeson.string, param);
                                      }), JSON.parse(" [\"3\", 4] ")));
                    }));
      }));

describe("singleEnumerator", (function () {
        return Jest.test("singleEnumerator", (function () {
                      return Jest.Expect[/* toEqual */12](/* SingleEnumerator */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.singleEnumerator(/* SingleEnumerator */0, /* array */[])));
                    }));
      }));

describe("dict", (function () {
        Jest.test("object", (function () {
                return Jest.Expect[/* toEqual */12]({ }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.$$int, Aeson_encode$BsAeson.object_(/* [] */0))));
              }));
        Jest.test("dict bool", (function () {
                return Jest.Expect[/* toEqual */12]({
                            a: true,
                            b: false
                          }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.bool, JSON.parse(" { \"a\": true, \"b\": false } "))));
              }));
        Jest.test("dict float", (function () {
                return Jest.Expect[/* toEqual */12]({
                            a: 1.2,
                            b: 2.3
                          }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.$$float, JSON.parse(" { \"a\": 1.2, \"b\": 2.3 } "))));
              }));
        Jest.test("dict int", (function () {
                return Jest.Expect[/* toEqual */12]({
                            a: 1,
                            b: 2
                          }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.$$int, JSON.parse(" { \"a\": 1, \"b\": 2 } "))));
              }));
        Jest.test("dict string", (function () {
                return Jest.Expect[/* toEqual */12]({
                            a: "x",
                            b: "y"
                          }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.string, JSON.parse(" { \"a\": \"x\", \"b\": \"y\" } "))));
              }));
        Jest.test("dict nullAs", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12]({
                            a: null,
                            b: null
                          }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict((function (param) {
                                      return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                    }), JSON.parse(" { \"a\": null, \"b\": null } "))));
              }));
        Jest.test("dict null -> dict string", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.string, param);
                                }), JSON.parse(" { \"a\": null, \"b\": null } ")));
              }));
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.dict(Aeson_decode$BsAeson.$$int, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* String */2,
                          /* :: */[
                            /* Null */3,
                            /* :: */[
                              /* Array */4,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("field", (function () {
        Jest.test("field bool", (function () {
                return Jest.Expect[/* toEqual */12](false, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("b", Aeson_decode$BsAeson.bool, JSON.parse(" { \"a\": true, \"b\": false } "))));
              }));
        Jest.test("field float", (function () {
                return Jest.Expect[/* toEqual */12](2.3, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("b", Aeson_decode$BsAeson.$$float, JSON.parse(" { \"a\": 1.2, \"b\": 2.3 } "))));
              }));
        Jest.test("field int", (function () {
                return Jest.Expect[/* toEqual */12](2, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("b", Aeson_decode$BsAeson.$$int, JSON.parse(" { \"a\": 1, \"b\": 2 } "))));
              }));
        Jest.test("field string", (function () {
                return Jest.Expect[/* toEqual */12]("y", Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("b", Aeson_decode$BsAeson.string, JSON.parse(" { \"a\": \"x\", \"b\": \"y\" } "))));
              }));
        Jest.test("field nullAs", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12](null, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("b", (function (param) {
                                      return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                    }), JSON.parse(" { \"a\": null, \"b\": null } "))));
              }));
        Jest.test("field null -> field string", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.field("b", Aeson_decode$BsAeson.string, param);
                                }), JSON.parse(" { \"a\": null, \"b\": null } ")));
              }));
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.field("foo", Aeson_decode$BsAeson.$$int, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* String */2,
                          /* :: */[
                            /* Null */3,
                            /* :: */[
                              /* Array */4,
                              /* :: */[
                                /* Object */5,
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("at", (function () {
        Jest.test("at bool", (function () {
                return Jest.Expect[/* toEqual */12](false, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.at(/* :: */[
                                      "a",
                                      /* :: */[
                                        "x",
                                        /* :: */[
                                          "y",
                                          /* [] */0
                                        ]
                                      ]
                                    ], Aeson_decode$BsAeson.bool)(JSON.parse(" {\n        \"a\": { \"x\" : { \"y\" : false } }, \n        \"b\": false \n      } "))));
              }));
        Jest.test("field nullAs", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12](null, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.at(/* :: */[
                                      "a",
                                      /* :: */[
                                        "x",
                                        /* [] */0
                                      ]
                                    ], (function (param) {
                                        return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                      }))(JSON.parse(" {\n        \"a\": { \"x\" : null }, \n        \"b\": null \n      } "))));
              }));
        return throws(/* None */0, Aeson_decode$BsAeson.at(/* :: */[
                        "foo",
                        /* :: */[
                          "bar",
                          /* [] */0
                        ]
                      ], Aeson_decode$BsAeson.$$int), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* Int */1,
                        /* :: */[
                          /* String */2,
                          /* :: */[
                            /* Null */3,
                            /* :: */[
                              /* Array */4,
                              /* :: */[
                                /* Object */5,
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("optional", (function () {
        Jest.test("bool -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, true)));
              }));
        Jest.test("float -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, 1.23)));
              }));
        Jest.test("int -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[23], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, 23)));
              }));
        Jest.test("int32 -> int32", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[23], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.int32, 23)));
              }));
        Jest.test("int64 -> int64", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[/* int64 */[
                              /* hi */0,
                              /* lo */64
                            ]], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.int64_of_array, /* int64 */[
                                    /* hi */0,
                                    /* lo */64
                                  ])));
              }));
        Jest.test("string -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, "test")));
              }));
        Jest.test("null -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, null)));
              }));
        Jest.test("array -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, /* array */[])));
              }));
        Jest.test("object -> int", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, Aeson_encode$BsAeson.object_(/* [] */0))));
              }));
        Jest.test("bool -> bool ", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[true], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.bool, true)));
              }));
        Jest.test("float -> float", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[1.23], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$float, 1.23)));
              }));
        Jest.test("string -> string", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */["test"], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.string, "test")));
              }));
        Jest.test("null -> null", (function () {
                var partial_arg = null;
                return Jest.Expect[/* toEqual */12](/* Some */[null], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional((function (param) {
                                      return Aeson_decode$BsAeson.nullAs(partial_arg, param);
                                    }), null)));
              }));
        Jest.test("int -> bool", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.bool, 1)));
              }));
        Jest.test("optional field", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[2], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional((function (param) {
                                      return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                                    }), JSON.parse(" { \"x\": 2} "))));
              }));
        Jest.test("optional field - incorrect type", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional((function (param) {
                                      return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                                    }), JSON.parse(" { \"x\": 2.3} "))));
              }));
        Jest.test("optional field - no such field", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.optional((function (param) {
                                      return Aeson_decode$BsAeson.field("y", Aeson_decode$BsAeson.$$int, param);
                                    }), JSON.parse(" { \"x\": 2} "))));
              }));
        Jest.test("field optional", (function () {
                return Jest.Expect[/* toEqual */12](/* Some */[2], Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("x", (function (param) {
                                      return Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, param);
                                    }), JSON.parse(" { \"x\": 2} "))));
              }));
        Jest.test("field optional - incorrect type", (function () {
                return Jest.Expect[/* toEqual */12](/* None */0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.field("x", (function (param) {
                                      return Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, param);
                                    }), JSON.parse(" { \"x\": 2.3} "))));
              }));
        return Jest.test("field optional - no such field", (function () {
                      return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                        return Aeson_decode$BsAeson.field("y", (function (param) {
                                                      return Aeson_decode$BsAeson.optional(Aeson_decode$BsAeson.$$int, param);
                                                    }), param);
                                      }), JSON.parse(" { \"x\": 2} ")));
                    }));
      }));

describe("oneOf", (function () {
        Jest.test("object with field", (function () {
                return Jest.Expect[/* toEqual */12](2, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.oneOf(/* :: */[
                                    Aeson_decode$BsAeson.$$int,
                                    /* :: */[
                                      (function (param) {
                                          return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                                        }),
                                      /* [] */0
                                    ]
                                  ], JSON.parse(" { \"x\": 2} "))));
              }));
        Jest.test("int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.oneOf(/* :: */[
                                    Aeson_decode$BsAeson.$$int,
                                    /* :: */[
                                      (function (param) {
                                          return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                                        }),
                                      /* [] */0
                                    ]
                                  ], 23)));
              }));
        var partial_arg_001 = /* :: */[
          (function (param) {
              return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
            }),
          /* [] */0
        ];
        var partial_arg = /* :: */[
          Aeson_decode$BsAeson.$$int,
          partial_arg_001
        ];
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.oneOf(partial_arg, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* String */2,
                        /* :: */[
                          /* Null */3,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("result", (function () {
        Jest.test("Ok", (function () {
                return Jest.Expect[/* toEqual */12](/* Error */Block.__(1, ["hello"]), Jest.Expect[/* expect */0](Aeson_decode$BsAeson.result(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.string, JSON.parse(" {\"Error\": \"hello\"} "))));
              }));
        return Jest.test("Error", (function () {
                      return Jest.Expect[/* toEqual */12](/* Ok */Block.__(0, [2]), Jest.Expect[/* expect */0](Aeson_decode$BsAeson.result(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.string, JSON.parse(" {\"Ok\": 2} "))));
                    }));
      }));

describe("either", (function () {
        Jest.test("Right", (function () {
                return Jest.Expect[/* toEqual */12](/* Right */Block.__(1, ["hello"]), Jest.Expect[/* expect */0](Aeson_decode$BsAeson.either(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.string, JSON.parse(" {\"Right\": \"hello\"} "))));
              }));
        return Jest.test("Left", (function () {
                      return Jest.Expect[/* toEqual */12](/* Left */Block.__(0, [2]), Jest.Expect[/* expect */0](Aeson_decode$BsAeson.either(Aeson_decode$BsAeson.$$int, Aeson_decode$BsAeson.string, JSON.parse(" {\"Left\": 2} "))));
                    }));
      }));

describe("tryEither", (function () {
        Jest.test("object with field", (function () {
                return Jest.Expect[/* toEqual */12](2, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.tryEither(Aeson_decode$BsAeson.$$int, (function (param) {
                                        return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                                      }))(JSON.parse(" { \"x\": 2} "))));
              }));
        Jest.test("int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.tryEither(Aeson_decode$BsAeson.$$int, (function (param) {
                                        return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                                      }))(23)));
              }));
        return throws(/* None */0, Aeson_decode$BsAeson.tryEither(Aeson_decode$BsAeson.$$int, (function (param) {
                          return Aeson_decode$BsAeson.field("x", Aeson_decode$BsAeson.$$int, param);
                        })), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* String */2,
                        /* :: */[
                          /* Null */3,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("withDefault", (function () {
        Jest.test("bool", (function () {
                return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, true)));
              }));
        Jest.test("float", (function () {
                return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, 1.23)));
              }));
        Jest.test("int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, 23)));
              }));
        Jest.test("string", (function () {
                return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, "test")));
              }));
        Jest.test("null", (function () {
                return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, null)));
              }));
        Jest.test("array", (function () {
                return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, /* array */[])));
              }));
        return Jest.test("object", (function () {
                      return Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.withDefault(0, Aeson_decode$BsAeson.$$int, Aeson_encode$BsAeson.object_(/* [] */0))));
                    }));
      }));

describe("map", (function () {
        Jest.test("int", (function () {
                return Jest.Expect[/* toEqual */12](25, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.map((function (param) {
                                      return 2 + param | 0;
                                    }), Aeson_decode$BsAeson.$$int, 23)));
              }));
        return throws(/* None */0, (function (param) {
                      return Aeson_decode$BsAeson.map((function (param) {
                                    return 2 + param | 0;
                                  }), Aeson_decode$BsAeson.$$int, param);
                    }), /* :: */[
                    /* Bool */6,
                    /* :: */[
                      /* Float */0,
                      /* :: */[
                        /* String */2,
                        /* :: */[
                          /* Null */3,
                          /* :: */[
                            /* Array */4,
                            /* :: */[
                              /* Object */5,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }));

describe("andThen", (function () {
        Jest.test("int -> int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.andThen((function () {
                                      return Aeson_decode$BsAeson.$$int;
                                    }), Aeson_decode$BsAeson.$$int, 23)));
              }));
        Jest.test("int -> int andThen float", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.andThen((function () {
                                      return Aeson_decode$BsAeson.$$float;
                                    }), Aeson_decode$BsAeson.$$int, 23)));
              }));
        Jest.test("int -> float andThen int", (function () {
                return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.andThen((function () {
                                      return Aeson_decode$BsAeson.$$int;
                                    }), Aeson_decode$BsAeson.$$float, 23)));
              }));
        throws(/* Some */["int andThen int "], (function (param) {
                return Aeson_decode$BsAeson.andThen((function () {
                              return Aeson_decode$BsAeson.$$int;
                            }), Aeson_decode$BsAeson.$$int, param);
              }), /* :: */[
              /* Bool */6,
              /* :: */[
                /* Float */0,
                /* :: */[
                  /* String */2,
                  /* :: */[
                    /* Null */3,
                    /* :: */[
                      /* Array */4,
                      /* :: */[
                        /* Object */5,
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
        throws(/* Some */["float andThen int "], (function (param) {
                return Aeson_decode$BsAeson.andThen((function () {
                              return Aeson_decode$BsAeson.$$int;
                            }), Aeson_decode$BsAeson.$$float, param);
              }), /* :: */[
              /* Float */0,
              /* [] */0
            ]);
        return throws(/* Some */["int to "], (function (param) {
                      return Aeson_decode$BsAeson.andThen((function () {
                                    return Aeson_decode$BsAeson.$$float;
                                  }), Aeson_decode$BsAeson.$$int, param);
                    }), /* :: */[
                    /* Float */0,
                    /* [] */0
                  ]);
      }));

describe("composite expressions", (function () {
        Jest.test("dict array array int", (function () {
                return Jest.Expect[/* toEqual */12]({
                            a: /* array */[
                              /* array */[
                                1,
                                2
                              ],
                              /* array */[3]
                            ],
                            b: /* array */[
                              /* array */[4],
                              /* array */[
                                5,
                                6
                              ]
                            ]
                          }, Jest.Expect[/* expect */0](Aeson_decode$BsAeson.dict((function (param) {
                                      return Aeson_decode$BsAeson.array((function (param) {
                                                    return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, param);
                                                  }), param);
                                    }), JSON.parse(" { \"a\": [[1, 2], [3]], \"b\": [[4], [5, 6]] } "))));
              }));
        Jest.test("dict array array int - heterogenous structure", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.dict((function (param) {
                                                return Aeson_decode$BsAeson.array((function (param) {
                                                              return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, param);
                                                            }), param);
                                              }), param);
                                }), JSON.parse(" { \"a\": [[1, 2], [true]], \"b\": [[4], [5, 6]] } ")));
              }));
        Jest.test("dict array array int - heterogenous structure 2", (function () {
                return Jest.Expect[/* toThrow */18](Jest.Expect[/* expectFn */1]((function (param) {
                                  return Aeson_decode$BsAeson.dict((function (param) {
                                                return Aeson_decode$BsAeson.array((function (param) {
                                                              return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, param);
                                                            }), param);
                                              }), param);
                                }), JSON.parse(" { \"a\": [[1, 2], \"foo\"], \"b\": [[4], [5, 6]] } ")));
              }));
        return Jest.test("field", (function () {
                      var json = JSON.parse(" { \"foo\": [1, 2, 3], \"bar\": \"baz\" } ");
                      return Jest.Expect[/* toEqual */12](/* tuple */[
                                  /* array */[
                                    1,
                                    2,
                                    3
                                  ],
                                  "baz"
                                ], Jest.Expect[/* expect */0](/* tuple */[
                                      Aeson_decode$BsAeson.field("foo", (function (param) {
                                              return Aeson_decode$BsAeson.array(Aeson_decode$BsAeson.$$int, param);
                                            }), json),
                                      Aeson_decode$BsAeson.field("bar", Aeson_decode$BsAeson.string, json)
                                    ]));
                    }));
      }));

exports.Test = Test;
/*  Not a pure module */
