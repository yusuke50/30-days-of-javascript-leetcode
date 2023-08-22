/**
 * v1 accepted, runtime: 57 ms (47.24%), memory: 42.2 MB (21.57%)
 */
var once = function(fn) {
    let f = true;
    return function(...args){
        if (f) {
            f = false
            return (fn(...args))
        }
    }
};


/**
 * v2 accepted, runtime: 54 ms (63.45%), memory: 42.2 MB (13.3%)
 */
var once = function(fn) {
    return function(...args){
        const res = fn && fn(...args);
        fn = null
        if (res) {
            return res
        }
    }
};
