(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _isNodeOrNodeWebKit = !!global.global;
//var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
//var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
//var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
//var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

// --- class / interfaces ----------------------------------
function MyAOJLib(value) { // @arg String = "" - comment
//{@dev
  //$args(MyAOJLib, arguments);
  //$valid($type(value, "String|omit"), MyAOJLib, "value");
//}@dev

    this._value = value || "";
}

//{@dev
MyAOJLib["repository"] = "https://github.com/orisano/MyAOJLib.js"; // GitHub repository URL. http://git.io/Help
//}@dev

MyAOJLib["prototype"] = Object.create(MyAOJLib, {
    "constructor":  { "value": MyAOJLib          },  // new MyAOJLib(value:String = ""):MyAOJLib
    // property accessor
    "value": {                                              // MyAOJLib#value:String
        "set": function(v) { this._value = v; },
        "get": function()  { return this._value; }
    },
    // methods
    "concat":       { "value": MyAOJLib_concat   },  // MyAOJLib#concat(a:String):String
    "concat$":      { "value": MyAOJLib_concat$  },  // MyAOJLib#concat$(a:String):this
});

// This example is the ES6::Class extend syntax, were simulated in ES5::Object.create.
// class SubClass extends MyAOJLib { ... }
/*
function SubClass() {
    MyAOJLib.apply(this, arguments);
}
SubClass["prototype"] = Object.create(MyAOJLib.prototype, {
    "constructor":  { "value": SubClass },
    "concat":       { "value": SubClass_concat },
    "concat$":      { "value": SubClass_concat$ },
});
 */

// --- implements ------------------------------------------
function MyAOJLib_concat(a) { // @arg String
                                     // @ret String
    return this._value + a;
}

function MyAOJLib_concat$(a) { // @arg String
                                      // @ret this
    this._value += a;
    return this;
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if (typeof module !== "undefined") {
    module["exports"] = MyAOJLib;
}
global["MyAOJLib" in global ? "MyAOJLib_" : "MyAOJLib"] = MyAOJLib; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

