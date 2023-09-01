/**
 * v1 accepted, runtime: 87 ms (66.68%), memory: 51.59 MB (87.26%)
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(item => compactObject(item));
    } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            if (!obj[key]) {
                delete obj[key];
            } else {
                obj[key] = compactObject(obj[key]);
            }
        }
        return obj;
    }
    return obj;
};


/**
 * v2 accepted, runtime: 76 ms (91.89%), memory: 51.29 MB (93.86%)
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            if (!obj[key]) {
                delete obj[key];
            } else {
                obj[key] = compactObject(obj[key]);
            }
        }
        return obj;
    }
    return obj;
};
