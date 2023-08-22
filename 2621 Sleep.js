/**
 * v1 accepted, runtime: 48 ms (89.48%), memory: 41.7 MB (55.26%)
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}
