/**
 * v1 accepted, runtime: 151 ms (36.11%), memory: 56.52 MB (46.34%)
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};
