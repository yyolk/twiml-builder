"use strict";
var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var concat = Function.bind.call(Function.call, Array.prototype.concat);
var keys = Reflect.ownKeys;
function entries(O) {
    return reduce(keys(O), function (e, k) {
        return concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []);
    }, []);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = entries;
;
