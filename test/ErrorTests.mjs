// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as RescriptCore from "../src/RescriptCore.mjs";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

function panicTest(param) {
  var caught;
  try {
    caught = RescriptCore.panic("uh oh");
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    if (err.RE_EXN_ID === Js_exn.$$Error) {
      caught = err._1.message;
    } else {
      throw err;
    }
  }
  Test.run([
        [
          "ErrorTests.res",
          8,
          22,
          43
        ],
        "Should resolve test"
      ], caught, (function (prim0, prim1) {
          return prim0 === prim1;
        }), "Panic! uh oh");
}

panicTest(undefined);

export {
  panicTest ,
}
/*  Not a pure module */