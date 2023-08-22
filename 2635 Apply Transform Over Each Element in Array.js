/**
 * v1 accepted, runtime: 54 ms (60.77%), memory: 42.1 MB (33.97%)
 */
var map = function(arr, fn) {
    let newArray = arr;
    for (let i = 0; i < arr.length; i += 1) {
        newArray[i] = fn(arr[i], i);
    }
    return newArray
};


/**
 * v2 accepted, runtime: 43 ms (96.37%), memory: 42.3 MB (15.42%)
 */
var map = function(arr, fn) {
    let newArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i += 1) {
        newArray[i] = fn(arr[i], i);
    }
    
    return newArray
};


/**
 * v3 accepted, runtime: 47 ms (89.30%), memory: 42.3 MB (15.42%)
 */
var map = function(arr, fn) {
    const len = arr.length;
    let newArray = new Array(len);
    for (let i = 0; i < len; i += 1) {
        newArray[i] = fn(arr[i], i);
    }
    
    return newArray
};
