/**
 * v1 accepted, runtime: 63 ms (57.44%), memory: 44.9 MB (17.19%)
 */
var createCounter = function(init) {
    let start = init;

    return {
        increment: () => {
            start += 1;
            return start;
        },
        decrement: () => {
            start -= 1;
            return start;
        },
        reset: () => {
            start = init;
            return start;
        },
    }
};


/**
 * v2 failed
 */


/**
 * v3 accepted, runtime: 51 ms (94.97%), memory: 45.1 MB (10.2%)
 */
var createCounter = function(init) {
    let start = init;

    return {
        increment: () => {
            start += 1;
            return start;
        },
        decrement: () => {
            start -= 1;
            return start;
        },
        reset: () => {
            start = init;
            return start;
        },
    }
};
