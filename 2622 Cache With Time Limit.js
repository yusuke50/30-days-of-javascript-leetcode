/**
 * v1 failed
 */


/**
 * v2 accepted, runtime: 58 ms (66.8%), memory: 41.9 MB (44.88%)
 */
var TimeLimitedCache = function() {
    this.pair = new Map();
    this.timer = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.timer.has(key)) {
        clearTimeout(this.timer.get(key));
    }

    let timer = setTimeout(() => {
        this.pair.delete(key);
    }, duration);
    
    this.timer.set(key, timer);

    if (this.pair.has(key)) {
        this.pair.set(key, value);
        return true;
    } else {
        this.pair.set(key, value);
        return false;
    }
};

TimeLimitedCache.prototype.get = function(key) {
    if (this.pair.has(key)) {
        return this.pair.get(key)
    }
    return -1
};

TimeLimitedCache.prototype.count = function() {
    return this.pair.size;
};


/**
 * v3 accepted, runtime: 54 ms (82.17%), memory: 42.4 MB (8.44%)
 */
var TimeLimitedCache = function() {
    this.pair = new Map();
    this.timer = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.timer.has(key)) {
        clearTimeout(this.timer.get(key));
    }

    let timer = setTimeout(() => {
        this.pair.delete(key);
    }, duration);
    
    this.timer.set(key, timer);

    let f = this.pair.has(key);
    this.pair.set(key, value);
    return f
};

TimeLimitedCache.prototype.get = function(key) {
    return (this.pair.has(key) ? this.pair.get(key) : -1)
};

TimeLimitedCache.prototype.count = function() {
    return this.pair.size;
};


/**
 * v4 accepted, runtime: 64 ms (37.2%), memory: 42 MB (44.88%)
 */
var TimeLimitedCache = function() {
    this.pair = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let k = this.pair.get(key);

    if (k) {
        clearTimeout(k.timer)
    }
    let timer = setTimeout(() => {
        this.pair.delete(key);
    }, duration);
    this.pair.set(key, {value, timer});

    return Boolean(k);
};

TimeLimitedCache.prototype.get = function(key) {
    return (this.pair.has(key) ? this.pair.get(key).value : -1)
};

TimeLimitedCache.prototype.count = function() {
    return this.pair.size;
};


/**
 * v5 accepted, runtime: 50 ms (92.5%), memory: 41.9 MB (44.88%)
 */
var TimeLimitedCache = function() {
    this.pair = new Map();
    this.timer = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let f = this.pair.has(key);

    if (f) {
        clearTimeout(this.timer.get(key));
    }

    let timer = setTimeout(() => {
        this.pair.delete(key);
    }, duration);
    
    this.timer.set(key, timer);    
    this.pair.set(key, value);
    return f
};

TimeLimitedCache.prototype.get = function(key) {
    return this.pair.get(key) || -1
};

TimeLimitedCache.prototype.count = function() {
    return this.pair.size;
};
