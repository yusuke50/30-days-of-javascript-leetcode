/**
 * v1 accepted, runtime: 57 ms (45%), memory: 41.9 MB (48.23%)
 */
var expect = function(val) {
    const toBe = (val2) => {
        if (val === val2) {
            return true;
        } else {
            throw new Error('Not Equal')
        }
    }

    const notToBe = (val2) => {
        if (val !== val2) {
            return true;
        } else {
            throw new Error('Equal')
        }
    }

    return {
        toBe: toBe,
        notToBe: notToBe
    }
};


/**
 * v2 accepted, runtime: 58 ms (40.46%), memory: 42 MB (27.27%)
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) {
                throw new Error ('Not Equal')
            }
            return true;
        },
        notToBe: (val3) => {
            if (val === val3) {
                throw new Error ('Equal');
            }
            return true;
        }
    }
};
