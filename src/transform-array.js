module.exports = function transform(arr) {
    let transformedArr = [];
    if (toString.call(arr).slice(8, -1) !== 'Array') {
        throw new Error;
    }
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        } else {
            if (arr[i] === '--discard-prev') {
                transformedArr.pop();
            } else {
                if (arr[i] === '--double-next') {
                    if (i + 1 !== arr.length)
                        transformedArr.push(arr[i + 1]);
                } else {
                    if (arr[i] === '--double-prev') {
                        if (i - 1 > 0)
                            transformedArr.push(arr[i - 1]);
                    } else {
                        transformedArr.push(arr[i]);

                    }
                }

            }

        }

    }
    return transformedArr;
};