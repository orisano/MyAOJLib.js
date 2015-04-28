var ModuleTestMyAOJLib = (function(global) {

var _isNodeOrNodeWebKit = !!global.global;
var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

var test = new Test("MyAOJLib", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
    }).add([
        testMyAOJLib_value,
        testMyAOJLib_concat,
        testMyAOJLib_concat$,
    ]);

if (_runOnBrowser || _runOnNodeWebKit) {
    //test.add([]);
} else if (_runOnWorker) {
    //test.add([]);
} else if (_runOnNode) {
    //test.add([]);
}

// --- test cases ------------------------------------------
function testMyAOJLib_value(test, pass, miss) {

    var instance = new MyAOJLib("a");

    if (instance.value === "a") {
        instance.value = "b";

        if (instance.value === "b") {
            test.done(pass());
            return;
        }
    }
    test.done(miss());
}

function testMyAOJLib_concat(test, pass, miss) {

    var result = {
            0: new MyAOJLib(   ).concat("a") === "a", // true
            1: new MyAOJLib("b").concat("b") === "bb" // true
        };

    if (/false/.test(JSON.stringify(result, null, 2))) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testMyAOJLib_concat$(test, pass, miss) {

    var result = {
            0: new MyAOJLib(   ).concat$("a").value === "a", // true
            1: new MyAOJLib("b").concat$("b").value === "bb" // true
        };

    if (/false/.test(JSON.stringify(result, null, 2))) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

return test.run().clone();

})((this || 0).self || global);

