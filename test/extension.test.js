/*
 * EXTENSION.TEST.JS
 * -----------------
 */

import * as assert from "assert";
import * as vscode from "vscode";

suite("Extension Tests", function() {

    // Defines a Mocha unit test
    test("Something 1", function() {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });
});