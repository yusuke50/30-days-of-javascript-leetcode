/**
 * v1 failed
 */

/**
 * v2 failed
 */

/**
 * v3 failed
 */

/**
 * v4 failed
 */

/**
 * v5 accepted, runtime: 308 ms (75.24%), memory: 110.61 MB (66.57%)
 */
var join = function (arr1, arr2) {
    let m = new Map();

    for (let item of arr1) {
        m.set(item.id, item);
    }

    for (let item of arr2) {
        if (!m.has(item.id)) {
            m.set(item.id, item);
        } else {
            let ori = m.get(item.id);
            let keys = Object.keys(item);
            for (let k of keys) {
                ori[k] = item[k];
            }
        }
    }

    let res = [];
    let mapKeys = m.keys();
    for (let k of mapKeys) {
        res.push(m.get(k));
    }

    return res.sort((a, b) => {
        return a.id - b.id;
    });
};
