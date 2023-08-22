/**
 * v1 accepted, runtime: 62 ms (50.16%), memory: 41.9 MB (44.73%)
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        const timeFn = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });

        return await Promise.race([fn(...args), timeFn])
    }
};


/**
 * v2 failed
 */
