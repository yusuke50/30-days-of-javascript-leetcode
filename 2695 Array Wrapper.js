/**
 * v1 accepted, runtime: 47 ms (89.61%), memory: 44.3 MB (14.83%)
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((accumulator, current) => (accumulator + current), 0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}


/**
 * v2 accepted, runtime: 64 ms (17.2%), memory: 44.5 MB (10%)
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let sum = 0; 
    for (let item of this.nums) {
        sum += item;
    }
    return sum;
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}


/**
 * v3 accepted, runtime: 53 ms (67.6%), memory: 42.3 MB (94.21%)
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((accumulator, current) => (accumulator + current), 0);
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.nums);
}
