/**
 * v1 accepted, runtime: 71 ms (36.38%), memory: 42.3 MB (13.55%)
 */
var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t);

    const cancelFn = () => {
        if (timer) {
            clearTimeout(timer);
        }
    }
    
    return cancelFn
};


/**
 * v2 accepted, runtime: 75 ms (21.5%), memory: 42 MB (43.69%)
 */
var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t);

    return () => {clearTimeout(timer)}
};


/**
 * v3 accepted, runtime: 53 ms (96.4%), memory: 42.5 MB (7.82%)
 */
var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t);

    const cancelFn = () => {clearTimeout(timer)}

    return cancelFn
};
