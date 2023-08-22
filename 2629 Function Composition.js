/**
 * v1 accepted, runtime: 77 ms (19.70%), memory: 43.4 MB (49.32%)
 */
var compose = function(functions) {
	return function(x) {
        const len = functions.length;
        for (let i = len - 1; i >= 0; i -= 1) {
            x = functions[i](x)
        }
        return x;
    }
};


/**
 * v2 accepted, runtime: 60 ms (87%), memory: 43.6 MB (28.5%)
 */
var compose = function(functions) {
	return function(x) {
        let idx = functions.length - 1;
        while (idx >= 0) {
            x = functions[idx](x)
            idx -= 1;
        }

        return x;
    }
};
