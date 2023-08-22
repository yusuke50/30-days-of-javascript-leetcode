/**
 * v1 accepted, runtime: 60 ms (61.39%), memory: 42.7 MB (5.49%)
 */
var debounce = function(fn, t) {
    let timer = 0;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args)
        },t)
    }
};
