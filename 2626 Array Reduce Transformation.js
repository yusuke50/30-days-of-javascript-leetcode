/**
 * v1 accepted, runtime: 55 ms (69.76%), memory: 41.6 MB (97.97%)
 */
var reduce = function(nums, fn, init) {
    const len = nums.length;
    for (let i = 0; i < len; i += 1) {
        init = fn(init, nums[i])
    }
    return init
};
