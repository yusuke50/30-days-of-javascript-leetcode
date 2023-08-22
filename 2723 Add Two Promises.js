/**
 * v1 accepted, runtime: 55 ms (88.54%), memory: 41.9 MB (57.2%)
 */
var addTwoPromises = async function(promise1, promise2) {
    return (await promise1 + await promise2)
};
