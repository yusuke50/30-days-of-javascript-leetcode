/**
 * v1 accepted, runtime: 42 ms (97.45%), memory: 41.4 MB (90.73%)
 */
var filter = function(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i])
        }
    }
    return newArray
};
