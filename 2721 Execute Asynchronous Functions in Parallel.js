/**
 * v1 accepted, runtime: 86 ms (14.57%), memory: 41.7 MB (95.44%)
 */
var promiseAll = async function(functions) {
    let f = true;
    let final = [];
    let counter = 0;
    return new Promise((resolve, reject) => {
        functions.forEach(async(func, idx) => {
            try {
                final[idx] = await func();
                counter += 1;

                if (f && counter === functions.length) {
                    resolve(final)
                }
            } catch(error) {
                f = false;
                reject('Error')
            }
        })
    })
};
