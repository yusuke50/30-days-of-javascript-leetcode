/**
 * v1 accepted, runtime: 2453 ms (5.2%), memory: 141.6 MB (5.31%)
 */
var flat = function (arr, n) {
    let res = arr;

    if (arr.length) {
        while (n) {
            let newRes = res;
            res = [];
            newRes.forEach((item) => {
                if (typeof item === 'number' ) {
                    res.push(item);
                } else {
                    item.forEach((i) => {
                        res.push(i);
                    })
                }
            });

            n -= 1;
        }
    }

    return res;
};


/**
 * v2 accepted, runtime: 143 ms (58.91%), memory: 103.46 MB (14.30%)
 */
var flat = function (arr, n) {
    if (n < 1) {
        return arr;
    } 

    return arr.reduce((accumulator, current) => {
        if (typeof current === 'object') {
            accumulator.push(...flat(current, n - 1));
        } else {
            accumulator.push(current);
        }
        return accumulator;
    }, [])
};
