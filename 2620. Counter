/**
 * v1 accepted, runtime: 50 ms (76.57%), memory: 41.8 MB (52.86%)
 */
var createCounter = function(n) {
    return function() {
        return n++
    };
};


/**
 * v2 accepted, runtime: 58 ms (35.63%), memory: 42 MB (42.10%)
 */
var createCounter = function(n) {
    let c = n;
    return () => (c++)
};
