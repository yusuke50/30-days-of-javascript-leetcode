/**
 * v1 accepted, runtime: 52 ms (87.97%), memory: 44.3 MB (73.96%)
 */
var chunk = function(arr, size) {
    let final = [];
    const len = arr.length;
    for (let i = 0; i < len / size; i += 1) {
        final.push(arr.slice(i*size, i * size + size))
    }
    return final
};
