/**
 * v1 failed
 */


/**
 * v2 failed
 */


/**
 * v3 failed
 */


/**
 * v4 accepted, runtime: 329 ms (58.83%), memory: 112.3 MB (5.28%)
 */
function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = fn.name + "-" + args.join("-");
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;    
    }
}


/**
 * v5 accepted, runtime: 262 ms (97.70%), memory: 110.3 MB (5.28%)
 */
function memoize(fn) {
    const s = new Map;

    return function(...args) {
        const a = JSON.stringify(args);
        if (s.has(a)) {
            return s.get(a)
        }
        const v = fn(...args);
        s.set(a, v);
        return v;
    }
}


/**
 * v6 failed
 */


/**
 * v7 accepted, runtime: 290 ms (81.25%), memory: 110.7 MB (5.28%)
 */
function memoize(fn) {
    const s = new Map();

    return function(...args) {
        const a = JSON.stringify(args);
        if (s.has(a)) {
            return s.get(a);
        }
        const v = fn(...args);
        s.set(a, v);
        return v;
    }
}
