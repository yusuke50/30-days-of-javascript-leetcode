/**
 * v1 accepted, runtime: 51 ms (69.8%), memory: 41.6 MB (67.98%)
 */
Array.prototype.last = function() {
    const len = this.length
    if (len === 0) {
        return -1
    }
    return this[len - 1]
};
