/**
 * v1 accepted, runtime: 110 ms (95.06%), memory: 69.70 MB (8.10%)
 */
Array.prototype.groupBy = function(fn) {
    const res = {};

    for (let item of this) {
        const k = fn(item);
        res[k] = res[k] || [];
        res[k].push(item)
    }

    return res;
};
