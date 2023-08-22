/**
 * v1 accepted, runtime: 54 ms (63.9%), memory: 43.7 MB (6.86%)
 */
var isEmpty = function(obj) {
    return Boolean(!Object.entries(obj).length)
};


/**
 * v2 accepted, runtime: 45 ms (93.76%), memory: 44.7 MB (5.16%)
 */
var isEmpty = function(obj) {
    if (Object.entries(obj).length) {
        return false;
    }
    return true
};
