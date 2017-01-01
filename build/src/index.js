"use strict";
var objectEntries_1 = require("./objectEntries");
function twiml() {
    var tags = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tags[_i - 0] = arguments[_i];
    }
    return '<?xml version="1.0" encoding="UTF-8"?>' +
        '<Response>' + tags.map(tagToString).join('') + '</Response>';
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = twiml;
exports.Say = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Say'].concat(args);
};
exports.Play = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Play'].concat(args);
};
exports.Pause = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Pause'].concat(args);
};
exports.Gather = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Gather'].concat(args);
};
exports.Record = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Record'].concat(args);
};
exports.Dial = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Dial'].concat(args);
};
exports.Number = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Number'].concat(args);
};
exports.Client = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Client'].concat(args);
};
exports.Conference = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Conference'].concat(args);
};
exports.Sip = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Sip'].concat(args);
};
exports.Queue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Queue'].concat(args);
};
exports.Enqueue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Enqueue'].concat(args);
};
exports.Task = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Task'].concat(args);
};
exports.Leave = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Leave'].concat(args);
};
exports.Hangup = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Hangup'].concat(args);
};
exports.Redirect = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Redirect'].concat(args);
};
exports.Reject = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Reject'].concat(args);
};
exports.Sms = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Sms'].concat(args);
};
exports.Message = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Message'].concat(args);
};
exports.Media = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Media'].concat(args);
};
exports.Body = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return ['Body'].concat(args);
};
function esc(str) {
    return String(str).replace(/&/g, '&amp;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&apos;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function isPlainObject(it) {
    return typeof it === "object" && !Array.isArray(it);
}
function tagToString(tag) {
    var tagName = tag[0], attrsOrContents = tag.slice(1), _a = isPlainObject(attrsOrContents[0]) ?
        [attrsOrContents[0], attrsOrContents.slice(1)] :
        [{}, attrsOrContents], attrs = _a[0], contents = _a[1];
    var attrStrings = objectEntries_1.default(attrs).map(function (attr) { return " " + attr[0] + '="' + esc(attr[1]) + '"'; }), formattedTagName = tagName.substr(0, 1).toUpperCase() + tagName.substr(1);
    return ("<" + formattedTagName + attrStrings.join('') + ">" +
        contents.map(function (child) {
            return Array.isArray(child) ? tagToString(child) : esc(child);
        }).join("") +
        "</" + formattedTagName + ">");
}
