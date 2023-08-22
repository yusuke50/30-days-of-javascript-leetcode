/**
 * v1 failed
 */


/**
 * v2 accepted, runtime: 58 ms (90.33%), memory: 41.8 MB (83.44%)
 */
var cancellable = function(fn, args, t) {
    fn(...args);

    let timer = 0;
    let repeat = () => {
        timer = setTimeout(() => {
            fn(...args);
            repeat();
        }, t)
    }
    repeat()

    const cancelFn = () => {
        clearTimeout(timer)
    }
    return cancelFn
};
