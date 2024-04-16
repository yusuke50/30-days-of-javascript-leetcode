/**
 * v1 failed
 */


/**
 * v2 failed
 */

/**
 * v3 accepted, runtime: 47 ms (91.25%), memory: 50.90 MB (19.36%)
 */
var longestCommonPrefix = function(strs) {
    let final = [];

    let firstStr = strs[0];
    for (let i = 0; i < firstStr.length; i += 1) {
        let flag = true;
        let tempstr = '';
        tempstr = firstStr.slice(0, i + 1);
        for (let j = 1; j < strs.length; j += 1) {
            if (strs[j].slice(0, i + 1) !== tempstr) {
                flag = false;
                break;
            }
        }
        if (flag) {
            final.push(tempstr);
        }
    }

    var temp = '';
    for (let i = 0; i < final.length; i += 1) {
        if (final[i].length > temp.length) {
            temp = final[i];
        }
    }
    console.log(temp);
    return temp;
};
